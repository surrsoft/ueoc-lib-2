export declare enum UeocAlign {
    START = "start",
    CENTER = "center",
    END = "end"
}
export declare enum UeocAlignS {
    START = "start",
    CENTER = "center",
    END = "end",
    STRETCH = "stretch"
}
export declare class UeocAlignSPlus {
    static toCss(align: UeocAlignS): string;
}
export declare class UeocAlignPlus {
    static toCssFormat(align: UeocAlign): string;
}
export declare enum UeocOrient {
    HORIZONTAL = "horizontal",
    VERTICAL = "vertical"
}
