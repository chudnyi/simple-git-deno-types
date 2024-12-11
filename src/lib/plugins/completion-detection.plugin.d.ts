import { SimpleGitPluginConfig } from '../types/index.d.ts';
import { SimpleGitPlugin } from './simple-git-plugin.d.ts';
export declare function completionDetectionPlugin({ onClose, onExit, }?: SimpleGitPluginConfig['completion']): SimpleGitPlugin<'spawn.after'>;
