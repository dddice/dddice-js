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
    description?: string;
    overrides: Record<string, ITextureProperties[]>;
    baseTheme?: string;
    uniforms: object;
    shader?: string;
    name: string;
    meshes: Record<string, string>;
    sizes: Record<string, number>;
    hiddenness?: number;
    map?: number | Record<string, string>;
    mapFileName?: string | Record<string, string>;
    bumpMap?: number | Record<string, string>;
    bumpMapFileName?: string | Record<string, string>;
    textures: {
        background: Record<string, Record<string, ITextureMap>>;
        outline: Record<string, Record<string, ITextureMap>>;
    };
}
export interface INumberLayerParameter {
    scale: number;
    blurStrength: number;
}
export interface ITextureMap {
    fileName: string;
    dataURI: string;
}
export interface ITextureProperties {
    fontColor?: number;
    fontEmissiveColor?: number;
    fontSheenColor?: number;
    fontFamily?: string;
    fontSize?: number;
    textX?: number;
    textY?: number;
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
    numberBumpScale?: number;
    numberBumpBlurStrength?: number;
    numberSpecularScale?: number;
    numberEmissiveBlurStrength?: number;
    numberMetalnessScale?: number;
    numberMetalnessBlurStrength?: number;
    numberRoughnessScale?: number;
    numberRoughnessBlurStrength?: number;
    numberClearcoatScale?: number;
    numberClearcoatBlurStrength?: number;
    numberClearcoatRoughnessScale?: number;
    numberClearcoatRoughnessBlurStrength?: number;
    numberSheenScale?: number;
    numberSheenBlurStrength?: number;
    numberSheenRoughnessScale?: number;
    numberSheenRoughnessBlurStrength?: number;
}
export default class ThreeDGenerator {
    static DEFAULT_FORM_STATE: IFormState;
    static TEXTURE_SIZE: number;
    static TEXTURE_NUMBER_SIZE: number;
    static isStateValid: (state: ITextureProperties) => boolean;
    static base64FileUpload: (file: File) => Promise<string>;
    static getHeightAndWidthFromDataUrl: (dataURL: any) => Promise<{
        width: any;
        height: any;
    }>;
    static toDataURL: (url: any) => Promise<string>;
    static getImageDimensions: (fileData: string) => Promise<[number, number]>;
    static drawSquare: (width: number, height: number) => Graphics;
    static drawTriangle: (size: number) => Graphics;
    private app;
    constructor(canvas: HTMLCanvasElement);
    get width(): number;
    get height(): number;
    generateNumbers(currentDie: string, properties: IFormState, colorKey?: string, blurKey?: string | undefined, linearMap?: boolean): Promise<string>;
}
