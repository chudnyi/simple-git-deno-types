import { PullResult } from '../../../typings/index.d.ts';
import { Maybe, StringTask } from '../types/index.d.ts';
export declare function pullTask(remote: Maybe<string>, branch: Maybe<string>, customArgs: string[]): StringTask<PullResult>;
