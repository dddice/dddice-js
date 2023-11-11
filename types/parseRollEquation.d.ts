import { IDiceRoll, ITheme, Operator } from './config';
export declare class MissingDieError extends Error {
    constructor(message: any, availableDiceMessage: any);
    available_dice: string;
}
export default function parseRollEquation(equation: string, theme: string | ITheme, values?: (number | string)[]): {
    dice: IDiceRoll[];
    operator: Operator;
};
export declare function tokenizeEquation(equation: string): string[];
