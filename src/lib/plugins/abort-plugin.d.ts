import { SimpleGitOptions } from '../types/index.d.ts';
import { SimpleGitPlugin } from './simple-git-plugin.d.ts';
export declare function abortPlugin(signal: SimpleGitOptions['abort']): (SimpleGitPlugin<"spawn.before"> | SimpleGitPlugin<"spawn.after">)[] | undefined;
