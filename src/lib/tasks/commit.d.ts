import type { CommitResult, SimpleGit } from '../../../typings/index.d.ts';
import type { StringTask } from '../types/index.d.ts';
export declare function commitTask(message: string[], files: string[], customArgs: string[]): StringTask<CommitResult>;
export default function (): Pick<SimpleGit, 'commit'>;
