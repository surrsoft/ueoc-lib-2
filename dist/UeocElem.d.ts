/// <reference types="react" />
import { CreateCSSProperties } from '@material-ui/styles';
import { UeocGeometry, UeocSize } from './simple/UeocGeometry';
import { UeocBorder } from './simple/UeocBorder';
import { UeocPaddings } from './simple/UeocPaddings';
import { UeocMargins } from './simple/UeocMargins';
export declare abstract class UeocElem {
    vGeometry?: UeocGeometry;
    vBorder?: UeocBorder;
    vPaddings?: UeocPaddings;
    vMargins?: UeocMargins;
    vBgColor: string;
    vCssOjAdding?: CreateCSSProperties;
    vOtherCss?: CreateCSSProperties;
    private fnPaddingsGetAnd;
    private fnMarginsGetAnd;
    private fnGeomentryGetAnd;
    /**
     * Любой дополнительный CSS
     * @param css
     */
    otherCss(css: CreateCSSProperties): this;
    geometry(geometry: UeocGeometry): this;
    utW(px: number | UeocSize): this;
    utH(px: number | UeocSize): this;
    border(border: UeocBorder): this;
    paddings(paddings: UeocPaddings): this;
    utPaddings(sizePx: number): this;
    utPaddingsFour(topPx: number, rightPx: number, bottomPx: number, leftPx: number): this;
    utPaddingT(px: number): this;
    utPaddingR(px: number): this;
    utPaddingB(px: number): this;
    utPaddingL(px: number): this;
    margins(margins: UeocMargins): this;
    utMargins(sizePx: number): this;
    utMarginsFour(topPx: number, rightPx: number, bottomPx: number, leftPx: number): this;
    utMarginsT(px: number): this;
    utMarginsR(px: number): this;
    utMarginsB(px: number): this;
    utMarginsL(px: number): this;
    bgColor(color: string): this;
    nobCssOjAddingSet(cssOjAdding: CreateCSSProperties): void;
    nobCssOj(): CreateCSSProperties;
    abstract build(): JSX.Element;
}
