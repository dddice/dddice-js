import { ShaderMaterial } from 'three';
export declare enum TextSize {
    Small = "sm",
    Medium = "md",
    Large = "lg"
}
export declare enum PickUp {
    Manually = 0,
    BeforeNextRoll = 1
}
export declare enum DiceSize {
    XSmall = 0,
    Small = 1,
    Medium = 2,
    Large = 3
}
export declare enum ClickBehavior {
    Reroll = "reroll",
    Explode = "explode",
    Drop = "drop",
    Nothing = "nothing"
}
export interface IBindableTextureSrc {
    binding: string;
    src: DieDefinition<string> | string;
    encoding?: string;
}
export interface ICamera {
    fov: number;
    distance: number;
}
export type DieDefinition<T> = T | {
    d4: T;
    d6: T;
    d8: T;
    d10: T;
    d12: T;
    d20: T;
    d10x: T;
};
export declare enum IDieType {
    D4 = "d4",
    D6 = "d6",
    D8 = "d8",
    D10 = "d10",
    D10X = "d10x",
    D12 = "d12",
    D20 = "d20",
    Modifier = "mod"
}
export type IAvailableDie = {
    id: string;
    type: IDieType;
    notation?: string;
};
export interface IDiceConfig {
    allowPlayerRollUpdates?: boolean;
    allowPlayerMoveDice?: boolean;
    drawOutlines?: boolean;
    defaultClickBehavior?: ClickBehavior;
    limit: number;
    size: number;
    throw: IDiceThrow;
}
export interface IDicePile {
    dieType: IDieType;
    theme: ITheme['id'];
}
export interface IDiceRoll {
    type: string;
    theme?: ITheme['id'];
    label?: string;
    uuid?: string;
    is_hidden?: boolean;
    is_dropped?: boolean;
    is_cleared?: boolean;
    meta?: object;
    value?: number;
    value_to_display?: number | string | IRollValueImage;
}
type OperatorKey = number | string;
type OperatorValue = OperatorKey | Record<OperatorKey, number[]>;
export type Operator = {
    '*'?: Exclude<OperatorValue, string>;
    '/'?: Exclude<OperatorValue, string>;
    k?: OperatorValue;
    d?: OperatorValue;
    round?: OperatorValue;
};
export interface IDiceRollOptions {
    external_id?: string;
    label?: string;
    operator?: Operator;
    room?: string;
    whisper?: number[];
}
export interface IDiceThrow {
    height: number;
    distance: number;
    posRandom: number;
    speedHor: number;
    speedRandom: number;
    speedVert: number;
    directionCone: number;
    maxSpin: number;
}
export declare enum IDirection {
    N = 0,
    NE = -45,
    E = -90,
    SE = -135,
    S = -180,
    SW = -225,
    W = -270,
    NW = -315
}
export interface IEngineConfig {
    autoClear?: number | null;
    bgColor: string | number;
    bgOpacity: number;
    camera: ICamera;
    dice: Partial<IDiceConfig>;
    drawDebug?: boolean;
    light: ILight;
    physics: IPhysics;
    previewMode?: boolean;
    persistRolls?: boolean;
}
export interface IPhysics {
    gravity: {
        x: number;
        y: number;
        z: number;
    };
}
export interface ILight {
    ambientColor: string | number;
    ambientIntensity: number;
    castShadows: boolean;
    direction: {
        x: number;
        y: number;
        z: number;
    };
    directionalColor: string | number;
    directionalIntensity: number;
}
export interface IChatSettings {
    backgroundColor: number;
    deleteAfter: number;
    fadeAfter: number;
    isDiceExpanded: boolean;
    isDiceSorted: boolean;
    isUsernameVisible: boolean;
    isVisible: boolean;
    textColor: number;
    textSize: TextSize;
}
export interface ILightingSettings {
    ambientColor: number;
    ambientIntensity: number;
    spotlightColor: number;
    spotlightIntensity: number;
}
export interface IPhysicsSettings {
    gravity: number;
    throwSpeed: number;
}
export interface IRollSettings {
    allowPlayerRollUpdates: boolean;
    allowPlayerMoveDice: boolean;
    autoClear: number;
    defaultClickBehavior: ClickBehavior;
    diceLimit: number;
    diceSize: DiceSize;
    diceTrayColor: number;
    disableDiceOutline: boolean;
    disableDiceShadows: boolean;
    disableShakingSound: boolean;
    pickUp: PickUp;
}
export interface IRoomSettings {
    participant: IParticipantSettings;
    chat: IChatSettings;
    lighting: ILightingSettings;
    physics: IPhysicsSettings;
    roll: IRollSettings;
}
export interface IParticipantSettings {
    defaultDiceTrayToGM: boolean;
}
export interface IRoom {
    bg_file_path?: string;
    created_at: string;
    custom_slug?: string;
    id: number;
    is_public: boolean;
    name: string;
    participants: IRoomParticipant[];
    passcode: string;
    slug: string;
    updated_at: string;
    user: IUser;
    settings: IRoomSettings;
}
export type IDiceTray = {
    dieType: IDieType;
    theme: ThemeName;
}[][];
export interface IRoomParticipant {
    id: number;
    username: string;
    color: string;
    user: IUser;
    dice_tray: IDiceTray;
    position: number;
    settings?: Partial<IRoomSettings>;
    created_at: string;
    updated_at: string;
}
export interface IUser {
    uuid: string;
    name: string;
    username: string;
    created_at: string;
    updated_at: string;
    has_external_accounts: boolean;
    subscription: boolean;
}
export interface IRoll {
    uuid: string;
    equation: string;
    direction: number;
    room: IRoom;
    label?: string;
    total_value: string | (IRollValueImage | string)[];
    user: IUser;
    external_id?: string;
    values: IRollValue[];
    velocity: number;
    created_at: string;
    updated_at: string;
    operator: Record<string, string>;
    whisper: string[];
}
export interface IRollValue {
    uuid: string;
    is_hidden: boolean;
    is_user_value: boolean;
    is_visible: boolean;
    is_cleared: boolean;
    is_dropped: boolean;
    label?: string;
    meta?: {
        [key: string]: any;
    };
    type: string;
    theme: string;
    value: number;
    value_to_display: string | IRollValueImage;
    created_at: string;
    updated_at: string;
}
export interface IRollValueImage {
    src: string;
}
export interface ISound {
    src: DieDefinition<string>;
    on: DiceEvent | string;
    value?: number | string;
}
export interface IParticleSystem {
    system: any;
    on: ParticleSystemStates | string;
    rotate_with_die: boolean;
}
export interface IThemeOptions {
    id: ThemeName;
    api_version: number | string;
    meshes: DieDefinition<string>;
    available_dice: (IAvailableDie | IDieType)[];
    textures: IBindableTextureSrc[];
    uniforms: ShaderMaterial['uniforms'];
    sizes: DieDefinition<number>;
    physics?: {
        inertia?: DieDefinition<number>;
        weight?: DieDefinition<number>;
    };
    particles?: IParticleSystem[];
    sounds?: ISound[];
    values: Record<string, (number | {
        src: any;
    })[]>;
}
export interface ITheme extends IThemeOptions {
    extend: string;
    frag_shader: string;
    vert_shader: string;
    options: Record<string, unknown>;
    api_version: number | string;
    author?: string;
    name?: string;
    description?: string;
    label?: {
        color?: string;
        background_color?: string;
    };
    preview: {
        [previewType: string]: string;
    };
    user?: IUser;
    created_at: string;
    updated_at: string;
    version: string;
}
export declare enum DiceEvent {
    Any = "any",
    DieCollide = "die.collide",
    DieValue = "die.value",
    DieRollHigh = "die.high",
    DieRollLow = "die.low",
    RollLoading = "roll.loading",
    RollLoaded = "roll.loaded",
    Always = "always"
}
export declare enum ParticleSystemStates {
    DieIdle = "die.idle",
    Always = "always",
    DieCollide = "die.collide",
    DieValue = "die.value",
    DieRollHigh = "die.high",
    DieRollLow = "die.low",
    RollLoading = "roll.loading",
    RollLoaded = "roll.loaded"
}
export type DiceEventCallback = (themeName: string, value: number, loop: boolean) => void;
export type ThemeName = string;
export {};
