export declare class UeocTextStyle {
    vColor: string;
    vBgColor: string;
    vSizePx: number;
    vIsBold: boolean;
    vIsItalic: boolean;
    vIsUnderline: boolean;
    color(color: string): this;
    bgColor(color: string): this;
    size(px: number): this;
    bold(enable?: boolean): this;
    italic(enable?: boolean): this;
    underline(enable?: boolean): this;
}
