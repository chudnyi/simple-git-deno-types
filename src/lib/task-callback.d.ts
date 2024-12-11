import { SimpleGitTask, SimpleGitTaskCallback } from './types/index.d.ts';
export declare function taskCallback<R>(task: SimpleGitTask<R>, response: Promise<R>, callback?: SimpleGitTaskCallback<R>): void;
