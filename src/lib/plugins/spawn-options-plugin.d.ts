/// <reference types="npm:@types/node" />
import { SpawnOptions } from 'node:child_process';
import { SimpleGitPlugin } from './simple-git-plugin.d.ts';
export declare function spawnOptionsPlugin(spawnOptions: Partial<SpawnOptions>): SimpleGitPlugin<'spawn.options'>;
