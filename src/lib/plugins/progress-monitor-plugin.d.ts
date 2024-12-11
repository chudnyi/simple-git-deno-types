import { SimpleGitOptions } from '../types/index.d.ts';
import { SimpleGitPlugin } from './simple-git-plugin.d.ts';
export declare function progressMonitorPlugin(progress: Exclude<SimpleGitOptions['progress'], void>): (SimpleGitPlugin<"spawn.after"> | SimpleGitPlugin<"spawn.args">)[];
