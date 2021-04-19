/// <reference types="react" />
import { UeocElem } from './UeocElem';
import { UeocTextStyle } from './simple/UeocTextStyle';
import { UeocAlignCls } from './simple/UeocAlignCls';
export declare class UeocTextElem extends UeocElem {
    vText: string;
    vTextStyle?: UeocTextStyle;
    vTextAlign: UeocAlignCls;
    private fnTextStyleGetAnd;
    text(text: string): this;
    textStyle(textStyle: UeocTextStyle): this;
    utColor(color: string): this;
    utTextSize(sizePx: number): this;
    utBold(enable?: boolean): this;
    utItalic(enable?: boolean): this;
    utUnderline(enable?: boolean): this;
    textAlign(align: UeocAlignCls): this;
    build(): JSX.Element;
}
