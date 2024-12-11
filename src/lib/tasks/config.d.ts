import type { SimpleGit } from '../../../typings/index.d.ts';
export declare enum GitConfigScope {
    system = "system",
    global = "global",
    local = "local",
    worktree = "worktree"
}
export default function (): Pick<SimpleGit, 'addConfig' | 'getConfig' | 'listConfig'>;
