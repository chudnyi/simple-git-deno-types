import { FetchResult } from '../../../typings/index.d.ts';
import { StringTask } from '../types/index.d.ts';
import { EmptyTask } from './task.d.ts';
export declare function fetchTask(remote: string, branch: string, customArgs: string[]): StringTask<FetchResult> | EmptyTask;
