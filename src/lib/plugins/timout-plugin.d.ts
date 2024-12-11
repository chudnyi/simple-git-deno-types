import type { SimpleGitPlugin } from './simple-git-plugin.d.ts';
import type { SimpleGitOptions } from '../types/index.d.ts';
export declare function timeoutPlugin({ block, stdErr, stdOut, }: Exclude<SimpleGitOptions['timeout'], undefined>): SimpleGitPlugin<'spawn.after'> | void;
