import { IDiceRoll } from '@dice/config';
export default function parseRollEquation(equation: string, themeSlug: string, values?: (number | string)[]): {
    dice: IDiceRoll[];
    operator: Record<string, string | Record<string, number[]>>;
};
