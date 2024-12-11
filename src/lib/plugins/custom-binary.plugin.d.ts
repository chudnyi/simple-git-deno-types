import type { SimpleGitOptions } from '../types/index.d.ts';
import { PluginStore } from './plugin-store.d.ts';
export declare function customBinaryPlugin(plugins: PluginStore, input?: SimpleGitOptions['binary'], allowUnsafe?: boolean): void;
