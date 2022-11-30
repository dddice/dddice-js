import { Color, Mesh, Texture, ShaderMaterial } from 'three';
import { DiceObject, IDicePhysicsState } from '@dice/dice';
import { IFormState } from './generator';
export interface IBindableTexture {
    binding: string;
    texture: Texture;
}
export interface IBindableTextureSrc {
    binding: string;
    src: DieDefinition<string> | string;
}
export interface ICamera {
    fov: number;
    distance: number;
}
export declare type DieDefinition<T> = T | {
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
export interface IAvailableDie {
    id: string;
    type: IDieType;
    notation?: string;
}
export interface IDiceConfig {
    size: number;
    throw: IDiceThrow;
}
export interface IDiceOptions {
    color: string;
    inertia?: number;
    isRollHidden: boolean;
    shouldFadeOut: boolean;
    material: ShaderMaterial;
    meshTemplate: Mesh;
    size: number;
    textures: IBindableTexture[];
    uuid: string;
    weight?: number;
}
export interface IDicePile {
    dieType: IDieType;
    theme: ITheme['id'];
}
export interface IDiceRoll {
    type: IDieType;
    theme: ITheme['id'];
    is_hidden: boolean;
}
export interface IDiceRollOptions {
    room?: string;
    operator?: object;
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
export interface IDiceValue {
    dice: DiceObject;
    value: number;
    keyframes: IDicePhysicsState[];
    stableCount: number;
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
    bgColor: Color | string | number;
    bgOpacity: number;
    camera: ICamera;
    dice: IDiceConfig;
    drawDebug?: boolean;
    light: ILight;
    previewMode?: boolean;
    persistRolls?: boolean;
}
export interface ILight {
    ambientColor: Color | string | number;
    ambientIntensity: number;
    castShadows: boolean;
    direction: {
        x: number;
        y: number;
        z: number;
    };
    directionalColor: Color | string | number;
    directionalIntensity: number;
}
export interface IRoom {
    bg_file_path?: string;
    created_at: string;
    id: number;
    is_public: boolean;
    name: string;
    participants: IRoomParticipant[];
    passcode: string;
    slug: string;
    updated_at: string;
    user: IUser;
}
export interface IRoomParticipant {
    id: number;
    username: string;
    color: string;
    user: IUser;
    position: number;
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
}
export interface IRoll {
    uuid: string;
    equation: string;
    direction: number;
    room: IRoom;
    total_value: string | (IRollValueImage | string)[];
    user: IUser;
    external_id?: string;
    values: IRollValue[];
    velocity: number;
    created_at: string;
    updated_at: string;
}
export interface IRollValue {
    uuid: string;
    is_hidden: boolean;
    is_user_value: boolean;
    is_visible: boolean;
    is_cleared: boolean;
    is_dropped: boolean;
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
export interface ITheme extends IThemeOptions {
    formState?: IFormState;
    extend: string;
    frag_shader: ShaderMaterial['fragmentShader'];
    vert_shader: ShaderMaterial['vertexShader'];
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
export interface IThemeOptions {
    id: ThemeName;
    meshes: DieDefinition<string>;
    available_dice: IAvailableDie[] | IDieType[];
    textures: IBindableTextureSrc[];
    uniforms: ShaderMaterial['uniforms'];
    sizes: DieDefinition<number>;
    physics?: {
        inertia?: DieDefinition<number>;
        weight?: DieDefinition<number>;
    };
    sounds?: ISound[];
    values: {
        d4: number[];
        d6: number[];
        d8: number[];
        d10: number[];
        d10x: number[];
        d12: number[];
        d20: number[];
    };
}
export declare enum DiceEvent {
    Any = "any",
    DieCollide = "die.collide",
    DieValue = "die.value",
    DieRollHigh = "die.high",
    DieRollLow = "die.low",
    RollLoading = "roll.loading",
    RollLoaded = "roll.loaded"
}
export declare type DiceEventCallback = (themeName: string, value: number, loop: boolean) => void;
export interface IAction {
    type: Action;
    payload?: IActionPayload;
}
export declare enum Action {
    ADD_DIE = 0,
    REMOVE_DIE = 1
}
export interface IActionPayload {
}
export interface IActionAddDie extends IActionPayload {
    dieIndex: number;
    dieType: IDieType;
    fromDieIndex?: number;
    fromIndex?: number;
    index: number;
    theme: ITheme['id'];
}
export interface IActionRemoveDie extends IActionPayload {
    dieIndex: number;
    index: number;
}
export declare type ThemeName = string;
