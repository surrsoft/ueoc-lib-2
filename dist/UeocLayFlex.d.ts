/// <reference types="react" />
import { UeocAlign, UeocOrient } from './utils';
import { UeocElem } from './UeocElem';
export declare class UeocLayFlex extends UeocElem {
    vOrientation: UeocOrient;
    vChildsStart: UeocElem[];
    private vChildsStartAlings;
    vChildsEnd: UeocElem[];
    private vChildsEndAlings;
    vChildBase?: UeocElem;
    vChildBaseAlign: UeocAlign;
    horizontal(enable?: boolean): this;
    vertical(enable?: boolean): this;
    childAddToStart(child?: UeocElem, align?: UeocAlign): this;
    childAddToEnd(child?: UeocElem, align?: UeocAlign): this;
    childBase(child?: UeocElem, align?: UeocAlign): this;
    build(): JSX.Element;
}
