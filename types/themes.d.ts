import { ITheme, ThemeName } from '@dice/config';
export declare const BASE_THEMES: string[];
export default class ThemeBuilder {
    static loadFromId(themeId: ThemeName): Promise<ITheme>;
    static load(theme: ITheme): ITheme;
    static loadBaseTheme(themeId: ThemeName): Promise<ITheme>;
    static buildTheme(partialTheme: ITheme | Partial<ITheme>): ITheme;
    static transformColorUniform(uniform: any): any;
    static formifyColorUniform(uniform: any): any;
    static checkSyntaxV1_0(theme: ITheme): void;
}
export declare const getDieNotation: (theme: ITheme, dieId: string) => string;
export declare const DEFAULT_THEME: Partial<ITheme>;
export declare const DEFAULT_PHONG_THEME: {
    uniforms: {
        dissolve: {
            type: string;
            value: number;
        };
        bumpScale: {
            type: string;
            value: number;
        };
        diffuse: {
            type: string;
            value: {
                r: number;
                g: number;
                b: number;
            };
        };
        number: {
            type: string;
            value: {
                r: number;
                g: number;
                b: number;
            };
        };
        emissive: {
            type: string;
            value: {
                r: number;
                g: number;
                b: number;
            };
        };
        specular: {
            type: string;
            value: {
                r: number;
                g: number;
                b: number;
            };
        };
        shininess: {
            type: string;
            value: number;
            min: number;
            max: number;
        };
        hiddenness: {
            type: string;
            value: number;
        };
        opacity: {
            type: string;
            value: number;
            min: number;
            max: number;
        };
    };
    frag_shader: string;
    vert_shader: string;
};
export declare const DEFAULT_TOON_THEME: {
    frag_shader: string;
    vert_shader: string;
    uniforms: {
        dissolve: {
            type: string;
            value: number;
        };
        diffuse: {
            type: string;
            value: string;
        };
        number: {
            type: string;
            value: string;
        };
        emissive: {
            type: string;
            value: string;
        };
        opacity: {
            type: string;
            value: number;
            min: number;
            max: number;
        };
    };
};
export declare const DEFAULT_PHYSICAL_THEME: {
    frag_shader: string;
    vert_shader: string;
    uniforms: {
        dissolve: {
            type: string;
            value: number;
        };
        diffuse: {
            type: string;
            value: string;
        };
        number: {
            type: string;
            value: string;
        };
        emissive: {
            type: string;
            value: string;
        };
        clearcoat: {
            type: string;
            value: number;
            min: number;
            max: number;
        };
        clearcoatRoughness: {
            type: string;
            value: number;
            min: number;
            max: number;
        };
        metalness: {
            type: string;
            value: number;
            min: number;
            max: number;
        };
        roughness: {
            type: string;
            value: number;
            min: number;
            max: number;
        };
        reflectivity: {
            type: string;
            value: number;
            min: number;
            max: number;
        };
        opacity: {
            type: string;
            value: number;
            min: number;
            max: number;
        };
    };
};
export declare const SHADERS: {
    phong: {
        uniforms: {
            dissolve: {
                type: string;
                value: number;
            };
            bumpScale: {
                type: string;
                value: number;
            };
            diffuse: {
                type: string;
                value: {
                    r: number;
                    g: number;
                    b: number;
                };
            };
            number: {
                type: string;
                value: {
                    r: number;
                    g: number;
                    b: number;
                };
            };
            emissive: {
                type: string;
                value: {
                    r: number;
                    g: number;
                    b: number;
                };
            };
            specular: {
                type: string;
                value: {
                    r: number;
                    g: number;
                    b: number;
                };
            };
            shininess: {
                type: string;
                value: number;
                min: number;
                max: number;
            };
            hiddenness: {
                type: string;
                value: number;
            };
            opacity: {
                type: string;
                value: number;
                min: number;
                max: number;
            };
        };
        frag_shader: string;
        vert_shader: string;
    };
    toon: {
        frag_shader: string;
        vert_shader: string;
        uniforms: {
            dissolve: {
                type: string;
                value: number;
            };
            diffuse: {
                type: string;
                value: string;
            };
            number: {
                type: string;
                value: string;
            };
            emissive: {
                type: string;
                value: string;
            };
            opacity: {
                type: string;
                value: number;
                min: number;
                max: number;
            };
        };
    };
    physical: {
        frag_shader: string;
        vert_shader: string;
        uniforms: {
            dissolve: {
                type: string;
                value: number;
            };
            diffuse: {
                type: string;
                value: string;
            };
            number: {
                type: string;
                value: string;
            };
            emissive: {
                type: string;
                value: string;
            };
            clearcoat: {
                type: string;
                value: number;
                min: number;
                max: number;
            };
            clearcoatRoughness: {
                type: string;
                value: number;
                min: number;
                max: number;
            };
            metalness: {
                type: string;
                value: number;
                min: number;
                max: number;
            };
            roughness: {
                type: string;
                value: number;
                min: number;
                max: number;
            };
            reflectivity: {
                type: string;
                value: number;
                min: number;
                max: number;
            };
            opacity: {
                type: string;
                value: number;
                min: number;
                max: number;
            };
        };
    };
};
