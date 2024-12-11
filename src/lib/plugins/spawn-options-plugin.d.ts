/// <reference types="node" />
import { SpawnOptions } from 'node:child_process';
import { SimpleGitPlugin } from './simple-git-plugin';
export declare function spawnOptionsPlugin(spawnOptions: Partial<SpawnOptions>): SimpleGitPlugin<'spawn.options'>;
