#!/usr/bin/env -S pkgx +deno.land@2.1.1 deno run --no-lock --no-config -A
import { Command } from "jsr:@cliffy/command@1.0.0-rc.7";
import $ from "jsr:@david/dax@0.42.0";

const simpleGitVersion = "3.27.0";
const tgzUrl =
  `https://registry.npmjs.org/simple-git/-/simple-git-${simpleGitVersion}.tgz`;

export const command = new Command()
  .description("Download source simple-git files")
  .option("--verbose", "Verbose log")
  .action(async (options) => {
    $.setPrintCommand(options.verbose ?? false);
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

if (import.meta.main) {
  await command.parse();
}
