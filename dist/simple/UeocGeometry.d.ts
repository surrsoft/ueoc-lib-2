export declare enum UeocSize {
    FILL = "fill",
    WRAP = "wrap"
}
export declare class UeocGeometry {
    vWPx: number;
    vHPx: number;
    vWS?: UeocSize;
    vHS?: UeocSize;
    w(wPxOrConst: number | UeocSize): this;
    h(hPxOrConst: number | UeocSize): this;
}
