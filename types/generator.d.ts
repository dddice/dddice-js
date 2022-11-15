import { Graphics } from 'pixi.js';
import { IDieType } from '@dice/config';
export declare enum FontFamily {
    Arial = "Arial",
    HelveticaNeue = "HelveticaNeue",
    Bangers = "Bangers"
}
export declare enum DieFaceType {
    Image = "image",
    Text = "text"
}
export declare enum BackgroundType {
    Color = "color",
    Image = "image"
}
export interface IFormState extends ITextureProperties {
    overrides: Record<IDieType, ITextureProperties[]>;
    baseTheme?: string;
    uniforms: object;
    shader?: string;
    name: string;
}
export interface ITextureProperties {
    fontColor: number;
    fontFamily?: string;
    fontSize: number;
    id?: number;
    dieFace?: number;
    dieFaceType?: DieFaceType;
    dieFaceValue?: string;
    chatDisplayValue?: string;
    chatDisplayType?: DieFaceType;
    chatDisplayValueFileName?: string;
    dieFaceValueFileName?: string;
    iconX?: number;
    iconY?: number;
    iconHeight?: number;
    iconWidth?: number;
    backgroundType?: BackgroundType;
    backgroundValue?: string | number;
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
    generateNumbers(currentDie: IDieType, properties: IFormState): Promise<string>;
}
