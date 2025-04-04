export declare class APIError extends Error {
    constructor();
}
export declare class APIConnectError extends Error {
    constructor();
}
export declare class APIRoomConnectError extends Error {
    constructor();
}
export declare class RollError extends Error {
    constructor(message?: string);
}
export declare class ThemeSyntaxError extends Error {
    private expected;
    private received;
    constructor(message: string, expected: any, received: any);
    toString(): string;
}
