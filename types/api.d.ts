import { IRoomParticipant, IRoll, IRoom, IDiceRoll, IDiceRollOptions, IUser, ITheme } from '@dice/config';
export declare enum ThreeDDiceRollEvent {
    RollCreated = "RollCreateEvent",
    RollUpdated = "RollUpdateEvent",
    RollStarted = "roll:started",
    RollFinished = "roll:finished",
    RollFadeStarted = "roll:fade:started",
    RollFadeFinished = "roll:fade:finished",
    RollUnhideFinished = "roll:unhide:finished"
}
export declare enum ThreeDDiceRoomEvent {
    RoomUpdated = "RoomUpdateEvent"
}
export declare type ConnectionStateCallback = (state: string) => any;
export declare type ConnectionErrorCallback = (error: string) => any;
export declare type ConnectionCreatedCallback = (participants: IRoomParticipant[]) => any;
export declare type ConnectionUpdatedCallback = (participant: IRoomParticipant) => any;
export declare type RollEventCallback = (roll: IRoll) => any;
export declare type RoomEventCallback = (roll: IRoom) => any;
export declare type DieEventCallback = (die: string) => any;
export interface IApiResponse<T, R> {
    type: T;
    data: R;
}
export declare class ThreeDDiceAPI {
    private apiKey?;
    private roomSlug?;
    private roomPasscode?;
    private connection?;
    private roomConnection?;
    private privateConnection?;
    private diceBoxPagingState;
    constructor(apiKey?: string);
    connect: (roomSlug: string, roomPasscode?: string, userUuid?: string) => ThreeDDiceAPI;
    listen(event: ThreeDDiceRoomEvent, callback: RoomEventCallback): ThreeDDiceAPI;
    listen(event: ThreeDDiceRollEvent, callback: RollEventCallback): ThreeDDiceAPI;
    onConnectionStateChange: (callback: (state: string) => any) => ThreeDDiceAPI;
    onConnectionError: (callback: ConnectionErrorCallback) => ThreeDDiceAPI;
    onConnect: (callback: ConnectionCreatedCallback) => ThreeDDiceAPI;
    onParticipantConnect: (callback: ConnectionUpdatedCallback) => ThreeDDiceAPI;
    onParticipantDisconnect: (callback: ConnectionUpdatedCallback) => ThreeDDiceAPI;
    diceBox: {
        list: (filter?: string) => Promise<IApiResponse<'theme[]', ITheme[]>>;
        next: () => Promise<IApiResponse<'theme[]', ITheme[]> | null>;
    };
    roll: {
        create: (dice: IDiceRoll[], options?: Partial<IDiceRollOptions>) => Promise<IApiResponse<'roll', IRoll>>;
        get: (id: string) => Promise<IApiResponse<'roll', IRoll>>;
        update: (id: string, payload: {
            dice: {
                uuid: string;
                is_hidden?: boolean;
            }[];
            room?: string;
        }) => Promise<IApiResponse<'roll', IRoll>>;
        updateBulk: (rolls: {
            uuid: string;
            dice: {
                uuid: string;
                is_hidden?: boolean;
            }[];
            room?: string;
        }[]) => Promise<IApiResponse<'roll[]', IRoll[]>>;
    };
    room: {
        list: () => Promise<IApiResponse<'room[]', IRoom[]>>;
        create: () => Promise<IApiResponse<'room', IRoom>>;
        get: (slug: string) => Promise<IApiResponse<'room', IRoom>>;
        join: (slug: string) => Promise<IApiResponse<'room', IRoom>>;
        leave: (slug: string, participantId?: string) => Promise<IApiResponse<'room', IRoom>>;
        updateParticipant: (slug: string, participantId: string, data: {
            username?: string;
            color?: string;
        }) => Promise<IApiResponse<'room', IRoom>>;
        updateRolls: (slug: string, dice: {
            is_cleared: boolean;
        }) => Promise<any>;
    };
    theme: {
        get: (id: string) => Promise<IApiResponse<'theme', ITheme>>;
    };
    user: {
        get: () => Promise<IApiResponse<'user', IUser>>;
        guest: () => Promise<IApiResponse<'string', string>>;
    };
}
