export interface IColorPickerProps {
    key?: string;
    className?: string;
    color: string;
    label?: string;
    onChange?(color: string): void;
    bottom?: boolean;
    left?: boolean;
    right?: boolean;
    top?: boolean;
}
declare const ColorPicker: (props: IColorPickerProps) => JSX.Element;
export default ColorPicker;
