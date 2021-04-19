/// <reference types="react" />
import { UeocElem } from './UeocElem';
export declare enum UeocRelPosition {
    TOP_LEFT = "top_left",
    TOP_CENTER = "top_center",
    TOP_RIGHT = "top_right",
    BOTTOM_LEFT = "bottom_left",
    BOTTOM_CENTER = "bottom_center",
    BOTTOM_RIGHT = "bottom_right",
    CENTER_LEFT = "center_left",
    CENTER_CENTER = "center_center",
    CENTER_RIGHT = "center_right"
}
export declare class UeocElemAndPos {
    child: UeocElem;
    position: UeocRelPosition;
    constructor(child: UeocElem, position?: UeocRelPosition);
}
export declare class UeocLayRelative extends UeocElem {
    vElemAndPosArr: UeocElemAndPos[];
    build(): JSX.Element;
    childAddWithPos(child: UeocElem, position?: UeocRelPosition): this;
}
