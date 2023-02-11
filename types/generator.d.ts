import { Graphics } from 'pixi.js';
export declare enum DieFaceType {
    Image = "image",
    Text = "text"
}
export declare enum BackgroundType {
    Color = "color",
    Image = "image"
}
export interface IFormState extends ITextureProperties {
    available_dice: any[];
    overrides: Record<string, ITextureProperties[]>;
    baseTheme?: string;
    uniforms: object;
    shader?: string;
    name: string;
    meshes: Record<string, string>;
    sizes: Record<string, number>;
    map?: number | Record<string, string>;
    mapFileName?: string | Record<string, string>;
    bumpMap?: number | Record<string, string>;
    bumpMapFileName?: string | Record<string, string>;
    numbersBumpScale: number;
    numbersBumpBlurStrength: number;
}
export interface ITextureProperties {
    fontColor?: number;
    fontFamily?: string;
    fontSize?: number;
    id?: number;
    dieFace?: number;
    dieFaceType?: DieFaceType;
    dieFaceValue?: string;
    dieFaceValueUnderline?: boolean;
    chatDisplayValue?: string;
    chatDisplayType?: DieFaceType;
    chatDisplayValueFileName?: string;
    dieFaceValueFileName?: string;
    iconX?: number;
    iconY?: number;
    iconHeight?: number;
    iconWidth?: number;
}
export default class ThreeDGenerator {
    static DEFAULT_FORM_STATE: IFormState;
    static TEXTURE_SIZE: number;
    static TEXTURE_NUMBER_SIZE: number;
    static isStateValid: (state: ITextureProperties) => boolean;
    static base64FileUpload: (file: File) => Promise<string>;
    static getImageDimensions: (fileData: string) => Promise<[number, number]>;
    static drawSquare: (width: number, height: number) => Graphics;
    static drawTriangle: (size: number) => Graphics;
    private app;
    constructor(canvas: HTMLCanvasElement);
    get width(): number;
    get height(): number;
    generateNumbers(currentDie: string, properties: IFormState, bumpMap?: boolean): Promise<string>;
}
