import { SimpleGitOptions, SimpleGitTask } from '../types/index.d.ts';
import { GitError } from './git-error.d.ts';
export declare class GitPluginError extends GitError {
    task?: SimpleGitTask<any> | undefined;
    readonly plugin?: keyof SimpleGitOptions | undefined;
    constructor(task?: SimpleGitTask<any> | undefined, plugin?: keyof SimpleGitOptions | undefined, message?: string);
}
