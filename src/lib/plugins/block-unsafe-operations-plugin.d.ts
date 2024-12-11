import type { SimpleGitPlugin } from './simple-git-plugin.d.ts';
import type { SimpleGitPluginConfig } from '../types/index.d.ts';
export declare function blockUnsafeOperationsPlugin({ allowUnsafeProtocolOverride, allowUnsafePack, }?: SimpleGitPluginConfig['unsafe']): SimpleGitPlugin<'spawn.args'>;
