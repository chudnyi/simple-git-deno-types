import type { SimpleGit } from '../../../typings/index.d.ts';
export interface VersionResult {
    major: number;
    minor: number;
    patch: number | string;
    agent: string;
    installed: boolean;
}
export default function (): Pick<SimpleGit, 'version'>;
