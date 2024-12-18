import { RemoteMessageResult, RemoteMessages } from '../../../typings/index.d.ts';
export declare function parseRemoteMessages<T extends RemoteMessages = RemoteMessages>(_stdOut: string, stdErr: string): RemoteMessageResult;
export declare class RemoteMessageSummary implements RemoteMessages {
    readonly all: string[];
}
