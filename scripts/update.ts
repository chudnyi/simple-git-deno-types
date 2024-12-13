#!/usr/bin/env -S pkgx +deno.land@2.1.1 deno run --no-lock --no-config -A
import { Command } from "jsr:@cliffy/command@1.0.0-rc.7";
import { parse } from "jsr:@std/semver@1.0.3/parse";
import $ from "jsr:@david/dax@0.42.0";

export const command = new Command()
  .description("Download source simple-git files")
  .option("--version <version:string>", "Version of simple-git")
  .option("--verbose", "Verbose log")
  .action(async (options) => {
    $.setPrintCommand(options.verbose ?? false);
    const version = options.version
      ? options.version
      : await getLatestVersion();
    parse(version);
    const tgzUrl =
      `https://registry.npmjs.org/simple-git/-/simple-git-${version}.tgz`;

    await $`rm -fr .simple-git`;
    await $`mkdir -p .simple-git`;
    console.log(`download ${tgzUrl}`);
    await $`curl -fsSL ${tgzUrl} -o .simple-git/simple-git.tar`;
    await $`tar -zx -C .simple-git -f .simple-git/simple-git.tar`;
    console.log(`replace sources: src typings`);
    await $`rm -fr src typings`;
    await $`cp -R .simple-git/package/dist/src .`;
    await $`cp -R .simple-git/package/dist/typings .`;
  });

async function getLatestVersion() {
  const res = await fetch(
    "https://registry.npmjs.org/-/package/simple-git/dist-tags",
  );
  const body = await res.json();
  return body["latest"];
}

if (import.meta.main) {
  await command.parse();
}
