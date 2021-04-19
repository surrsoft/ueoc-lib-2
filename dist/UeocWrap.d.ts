/// <reference types="react" />
import { UeocElem } from './UeocElem';
export declare class UeocWrap extends UeocElem {
    vChild?: JSX.Element;
    child(elem: JSX.Element): this;
    build(): JSX.Element;
}
