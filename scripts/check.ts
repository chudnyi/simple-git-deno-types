#!/usr/bin/env -S pkgx +deno.land@2.1.1 deno run --no-lock --no-config -A
import { Command } from "jsr:@cliffy/command@1.0.0-rc.7";
import $ from "jsr:@david/dax@0.42.0";
import { expandGlob } from "jsr:@std/fs@1.0.6/expand-glob";
import { relative } from "jsr:@std/path@0.225.2";

export const command = new Command()
  .description("Check code with deno check")
  .option("--verbose", "Verbose log")
  .action(async (options) => {
    $.setPrintCommand(options.verbose ?? false);
    const globs = [expandGlob("src/**/*.ts"), expandGlob("typings/**/*.ts")];
    for (const glob of globs) {
      for await (const entry of glob) {
        const rel = relative(Deno.cwd(), entry.path);
        console.log(`check ${rel}`);
        await $`deno check --allow-import --no-config ${rel}`;
      }
    }
  });

if (import.meta.main) {
  await command.parse();
}
