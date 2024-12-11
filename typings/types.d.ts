export type { RemoteWithoutRefs, RemoteWithRefs } from '../src/lib/responses/GetRemoteSummary.d.ts';
export type { LogOptions, DefaultLogFields } from '../src/lib/tasks/log.d.ts';

export type {
   outputHandler,
   Options,
   TaskOptions,
   SimpleGitOptions,
   SimpleGitProgressEvent,
   SimpleGitTaskCallback,
} from '../src/lib/types/index.d.ts';

export { pathspec } from '../src/lib/args/pathspec.d.ts';
export type { ApplyOptions } from '../src/lib/tasks/apply-patch.d.ts';
export { CheckRepoActions } from '../src/lib/tasks/check-is-repo.d.ts';
export { CleanOptions, CleanMode } from '../src/lib/tasks/clean.d.ts';
export type { CloneOptions } from '../src/lib/tasks/clone.d.ts';
export { GitConfigScope } from '../src/lib/tasks/config.d.ts';
export type { CountObjectsResult } from '../src/lib/tasks/count-objects.d.ts';
export { DiffNameStatus } from '../src/lib/tasks/diff-name-status.d.ts';
export { GitGrepQuery, grepQueryBuilder } from '../src/lib/tasks/grep.d.ts';
export { ResetOptions, ResetMode } from '../src/lib/tasks/reset.d.ts';
export type { VersionResult } from '../src/lib/tasks/version.d.ts';
