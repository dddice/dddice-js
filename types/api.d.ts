import { IDiceRoll, IDiceRollOptions, IRoll, IRoom, IRoomParticipant, ITheme, IUser } from './config';
export declare enum ThreeDDiceRollEvent {
    RollCreated = "RollCreateEvent",
    RollUpdated = "RollUpdateEvent",
    RollDeleted = "RollDeleteEvent",
    RollStarted = "roll:started",
    RollFinished = "roll:finished",
    RollFadeStarted = "roll:fade:started",
    RollFadeFinished = "roll:fade:finished",
    RollUnhideFinished = "roll:unhide:finished"
}
export declare enum ThreeDDiceRoomEvent {
    RoomUpdated = "RoomUpdateEvent"
}
export declare enum ThreeDDiceDiceBoxEvent {
    DiceBoxCreated = "DiceBoxCreateEvent",
    DiceBoxDeleted = "DiceBoxDeleteEvent"
}
export type ConnectionStateCallback = (state: string) => any;
export type ConnectionErrorCallback = (error: string) => any;
export type ConnectionCreatedCallback = (participants: IRoomParticipant[]) => any;
export type ConnectionUpdatedCallback = (participant: IRoomParticipant) => any;
export type DiceBoxEventCallback = (theme: ITheme) => any;
export type RollEventCallback = (roll: IRoll) => any;
export type RoomEventCallback = (roll: IRoom) => any;
export type LocalEventCallback = (data: {
    [key: string]: any;
}) => any;
export type DieEventCallback = (die: string) => any;
export interface IApiResponse<T, R> {
    type: T;
    data: R;
}
export declare class ThreeDDiceAPI {
    roomSlug?: string;
    userUuid?: string;
    private apiKey?;
    private roomPasscode?;
    private connection?;
    private roomConnection?;
    private privateConnection?;
    private userConnection?;
    private diceBoxPagingState;
    constructor(apiKey?: string, appName?: string);
    connect: (roomSlug: string, roomPasscode?: string, userUuid?: string) => ThreeDDiceAPI;
    disconnect: () => ThreeDDiceAPI;
    listen(event: ThreeDDiceRoomEvent, callback: RoomEventCallback): ThreeDDiceAPI;
    listen(event: ThreeDDiceRollEvent, callback: RollEventCallback): ThreeDDiceAPI;
    listen(event: ThreeDDiceDiceBoxEvent, callback: DiceBoxEventCallback): ThreeDDiceAPI;
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
            dice: Partial<IDiceRoll>[];
            room?: string;
        }) => Promise<IApiResponse<'roll', IRoll>>;
        updateBulk: (rolls: {
            uuid: string;
            dice: Partial<IDiceRoll>[];
            room?: string;
        }[]) => Promise<IApiResponse<'roll[]', IRoll[]>>;
    };
    room: {
        list: () => Promise<IApiResponse<'room[]', IRoom[]>>;
        create: () => Promise<IApiResponse<'room', IRoom>>;
        get: (slug: string, passcode?: string) => Promise<IApiResponse<'room', IRoom>>;
        join: (slug: string, passcode?: string) => Promise<IApiResponse<'room', IRoom>>;
        leave: (slug: string, participantId?: string) => Promise<IApiResponse<'room', IRoom>>;
        updateParticipant: (slug: string, participantId: number, data: Partial<IRoomParticipant>) => Promise<IApiResponse<'room', IRoom>>;
        updateRolls: (slug: string, dice: {
            is_cleared: boolean;
        }, participant?: string | number) => Promise<any>;
        update: (slug: string, room: {
            name: string;
            is_public: boolean;
            passcode: string;
        }) => Promise<any>;
        deleteRolls: (slug: string) => Promise<any>;
        updateBackground: (slug: string, file: File) => Promise<any>;
    };
    theme: {
        get: (id: string) => Promise<IApiResponse<'theme', ITheme>>;
    };
    user: {
        get: () => Promise<IApiResponse<'user', IUser>>;
        guest: () => Promise<IApiResponse<'string', string>>;
    };
    sendLocal: (eventName: string, data: {
        [key: string]: any;
    }) => void;
    listenLocal(event: string, callback: LocalEventCallback): ThreeDDiceAPI;
}
