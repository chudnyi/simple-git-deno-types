import type { SimpleGit } from '../../../typings/index.d.ts';
export interface CountObjectsResult {
    count: number;
    size: number;
    inPack: number;
    packs: number;
    sizePack: number;
    prunePackable: number;
    garbage: number;
    sizeGarbage: number;
}
export default function (): Pick<SimpleGit, 'countObjects'>;
