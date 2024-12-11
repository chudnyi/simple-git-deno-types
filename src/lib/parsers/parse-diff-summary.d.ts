import { LogFormat } from '../args/log-format.d.ts';
import { DiffSummary } from '../responses/DiffSummary.d.ts';
export declare function getDiffParser(format?: LogFormat): (stdOut: string) => DiffSummary;
