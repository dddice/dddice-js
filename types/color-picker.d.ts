export interface IColorPickerProps {
    bottom?: boolean;
    className?: string;
    color: string;
    key?: string;
    label?: string;
    left?: boolean;
    onChange?(color: string): void;
    right?: boolean;
    top?: boolean;
}
declare const ColorPicker: (props: IColorPickerProps) => JSX.Element;
export default ColorPicker;
