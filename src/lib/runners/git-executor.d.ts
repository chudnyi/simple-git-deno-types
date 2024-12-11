import type { PluginStore } from '../plugins/index.d.ts';
import type { GitExecutorEnv, outputHandler, SimpleGitExecutor, SimpleGitTask } from '../types/index.d.ts';
import { Scheduler } from './scheduler.d.ts';
export declare class GitExecutor implements SimpleGitExecutor {
    cwd: string;
    private _scheduler;
    private _plugins;
    private _chain;
    env: GitExecutorEnv;
    outputHandler?: outputHandler;
    constructor(cwd: string, _scheduler: Scheduler, _plugins: PluginStore);
    chain(): SimpleGitExecutor;
    push<R>(task: SimpleGitTask<R>): Promise<R>;
}
