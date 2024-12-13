#!/usr/bin/env -S pkgx +deno.land@2.1.1 deno run --no-lock --no-config -A
import { Command } from "jsr:@cliffy/command@1.0.0-rc.7";
import { dirname, relative, resolve } from "jsr:@std/path@0.225.2";
import { join } from "jsr:@std/path@0.225.2/join";

export const command = new Command()
  .description("Transform code")
  .option("--verbose", "Verbose log")
  .action(async (_options) => {
    // $.setPrintCommand(options.verbose ?? false);
    await processDir("typings");
    await processDir("src");
    // удаление зависимости от debug
    const delFiles = [
      "src/lib/git-logger.d.ts",
      "src/lib/runners/tasks-pending-queue.d.ts",
    ];
    for (const delFile of delFiles) {
      if (await lstat(delFile)) {
        console.log(`🔻delete file: ${delFile}`);
        await Deno.remove(delFile);
      }
    }
  });

async function processDir(dir: string) {
  for await (const entry of Deno.readDir(dir)) {
    const path = join(dir, entry.name);
    if (entry.isDirectory) {
      await processDir(path);
    } else {
      await processFile(path);
    }
  }
}

async function processFile(path: string) {
  const dir = dirname(path);
  const code = await Deno.readTextFile(path);
  let newCode = code;
  console.log(`➡️ process file: ${path}`);

  // <reference types="node" />
  newCode = newCode.replaceAll('/// <reference types="node" />', "");
  // newCode = newCode.replaceAll('/// <reference types="node" />', '/// <reference types="npm:@types/node" />')

  // Buffer
  if (
    !newCode.includes("node:buffer") &&
    (newCode.includes(" Buffer") || newCode.includes("<Buffer>"))
  ) {
    newCode = `
import { Buffer } from "node:buffer";
${newCode}`;
  }

  // child_process
  if (
    !newCode.includes("node:child_process") &&
    newCode.includes("child_process")
  ) {
    newCode = newCode.replaceAll("'child_process'", "'node:child_process'");
  }

  // NodeJS.ReadableStream
  newCode = newCode.replaceAll("NodeJS.ReadableStream", "ReadableStream");

  const importRegexes = [/from '(.*)';/img, /import\("(.*)"\)/img];
  for (const importRegex of importRegexes) {
    const matches = code.matchAll(importRegex);
    for (const match of matches) {
      const isDynamicImport = match[0]?.startsWith("import");
      const importRef = match[1];
      if (!importRef) throw new Error("Не получен путь из import");
      if (importRef.endsWith(".d.ts")) continue;
      const isFile = importRef.startsWith(".");
      if (isFile) {
        let newImportRef = importRef;
        const importPath = relative(
          Deno.cwd(),
          resolve(join(dir, importRef)),
        );
        const stat = await lstat(importPath);
        if (stat) {
          if (!stat.isDirectory) {
            throw new Error(
              `Ожидается, что тут будет папка: ${importPath}`,
            );
          }
          newImportRef = `${importRef}/index.d.ts`;
        } else {
          newImportRef = `${importRef}.d.ts`;
        }
        const newImportPath = relative(
          Deno.cwd(),
          resolve(join(dir, newImportRef)),
        );
        const newStat = await lstat(newImportPath);
        if (!newStat || !newStat.isFile) {
          throw new Error(`Тут должен быть файл: ${newImportRef}`);
        }
        console.log(`${importRef} -> ${newImportRef}`);
        if (!isDynamicImport) {
          newCode = newCode.replaceAll(
            importRef + "'",
            newImportRef + "'",
          );
        } else {
          newCode = newCode.replaceAll(
            importRef + '"',
            newImportRef + '"',
          );
        }
      } else if (!importRef.startsWith("node:")) {
        console.log(`unhandled module: ${importRef}`);
      }
    }
  }

  await Deno.writeTextFile(path, newCode);
}

async function lstat(path: string) {
  try {
    return await Deno.lstat(path);
  } catch (error) {
    if (!(error instanceof Deno.errors.NotFound)) {
      throw error;
    }
  }
}

if (import.meta.main) {
  await command.parse();
}
