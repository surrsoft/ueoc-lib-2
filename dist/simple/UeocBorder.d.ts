export declare type LineStyle = "dashed" | "dotted" | "double" | "groove" | "hidden" | "inset" | "none" | "outset" | "ridge" | "solid";
export declare class UeocBorder {
    vThPx: number;
    vStyle: LineStyle;
    vColor: string;
    vRadius: number;
    th(borderThPx: number): this;
    style(borderStyle: LineStyle): this;
    color(color: string): this;
    radius(raduis: number): this;
}
