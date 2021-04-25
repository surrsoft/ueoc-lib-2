import { CreateCSSProperties } from '@material-ui/styles';
import { UeocGeometry, UeocSize } from './simple/UeocGeometry';
import { UeocBorder } from './simple/UeocBorder';
import { UeocPaddings } from './simple/UeocPaddings';
import { UeocMargins } from './simple/UeocMargins';

export abstract class UeocElem {
  public vGeometry?: UeocGeometry
  public vBorder?: UeocBorder
  public vPaddings?: UeocPaddings;
  public vMargins?: UeocMargins;
  public vBgColor: string = '';
  public vCssOjAdding?: CreateCSSProperties;
  public vOtherCss?: CreateCSSProperties;
  public vKey?: number | string;
  public vOnClick?: () => any;
  public vHide: boolean = false

  private fnPaddingsGetAnd() {
    if (!this.vPaddings) {
      this.vPaddings = new UeocPaddings();
    }
    return this.vPaddings
  }

  private fnMarginsGetAnd() {
    if (!this.vMargins) {
      this.vMargins = new UeocMargins();
    }
    return this.vMargins
  }

  private fnGeomentryGetAnd() {
    if (!this.vGeometry) {
      this.vGeometry = new UeocGeometry()
    }
    return this.vGeometry
  }

  /**
   * Любой дополнительный CSS
   * @param css
   */
  otherCss(css: CreateCSSProperties): this {
    this.vOtherCss = css
    return this
  }

  geometry(geometry: UeocGeometry): this {
    this.vGeometry = geometry
    return this
  }

  utW(px: number | UeocSize): this {
    this.fnGeomentryGetAnd().w(px)
    return this;
  }

  utH(px: number | UeocSize): this {
    this.fnGeomentryGetAnd().h(px)
    return this;
  }

  border(border: UeocBorder): this {
    this.vBorder = border
    return this
  }

  paddings(paddings: UeocPaddings): this {
    this.vPaddings = paddings
    return this
  }

  key(key: number | string): this {
    this.vKey = key;
    return this
  }

  utPaddings(sizePx: number): this {
    this.fnPaddingsGetAnd().all(sizePx)
    return this;
  }

  utPaddingsFour(topPx: number, rightPx: number, bottomPx: number, leftPx: number): this {
    this.fnPaddingsGetAnd().four(topPx, rightPx, bottomPx, leftPx);
    return this;
  }

  utPaddingT(px: number): this {
    this.fnPaddingsGetAnd().t(px)
    return this
  }

  utPaddingR(px: number): this {
    this.fnPaddingsGetAnd().r(px)
    return this
  }

  utPaddingB(px: number): this {
    this.fnPaddingsGetAnd().b(px)
    return this
  }

  utPaddingL(px: number): this {
    this.fnPaddingsGetAnd().l(px)
    return this
  }

  margins(margins: UeocMargins): this {
    this.vMargins = margins
    return this
  }

  utMargins(sizePx: number): this {
    this.fnMarginsGetAnd().all(sizePx)
    return this;
  }

  utMarginsFour(topPx: number, rightPx: number, bottomPx: number, leftPx: number): this {
    this.fnMarginsGetAnd().four(topPx, rightPx, bottomPx, leftPx);
    return this;
  }

  utMarginsT(px: number): this {
    this.fnMarginsGetAnd().t(px)
    return this
  }

  utMarginsR(px: number): this {
    this.fnMarginsGetAnd().r(px)
    return this
  }

  utMarginsB(px: number): this {
    this.fnMarginsGetAnd().b(px)
    return this
  }

  utMarginsL(px: number): this {
    this.fnMarginsGetAnd().l(px)
    return this
  }

  bgColor(color: string): this {
    this.vBgColor = color;
    return this
  }

  onClickFn(onClickFn: () => any): this {
    this.vOnClick = onClickFn;
    return this;
  }

  hide(enable: boolean): this {
    this.vHide = enable;
    return this;
  }

  show(enable: boolean): this {
    this.vHide = !enable
    return this;
  }

  nobCssOjAddingSet(cssOjAdding: CreateCSSProperties) {
    this.vCssOjAdding = cssOjAdding
  }

  // ---
  nobCssOj(): CreateCSSProperties {
    const cssOj: CreateCSSProperties = {
      display: 'inline-flex',
      alignSelf: this.vGeometry?.vHS === UeocSize.FILL ? 'stretch' : 'start'
    }
    if (this.vGeometry) {
      if (this.vGeometry.vWPx > 0) {
        cssOj.width = this.vGeometry.vWPx + 'px'
      }
      if (this.vGeometry.vHPx > 0) {
        cssOj.height = this.vGeometry.vHPx + 'px'
      }
      if (this.vGeometry.vWS === UeocSize.FILL) {
        cssOj.flexGrow = 1
      }
    }
    if (this.vBorder) {
      if (this.vBorder.vThPx > 0) {
        cssOj.borderWidth = this.vBorder.vThPx + 'px'
        cssOj.borderStyle = this.vBorder.vStyle
        cssOj.borderColor = this.vBorder.vColor
        if (this.vBorder.vRadius > 0) {
          cssOj.borderRadius = this.vBorder.vRadius + 'px'
        }
      }
    }
    if (this.vPaddings) {
      cssOj.paddingTop = this.vPaddings.vTopPx
      cssOj.paddingRight = this.vPaddings.vRightPx
      cssOj.paddingBottom = this.vPaddings.vBottomPx
      cssOj.paddingLeft = this.vPaddings.vLeftPx
    }
    if (this.vMargins) {
      cssOj.marginTop = this.vMargins.vTopPx
      cssOj.marginRight = this.vMargins.vRightPx
      cssOj.marginBottom = this.vMargins.vBottomPx
      cssOj.marginLeft = this.vMargins.vLeftPx
    }
    if (this.vBgColor) {
      cssOj.backgroundColor = this.vBgColor
    }
    // ---
    if (this.vCssOjAdding) {
      Object.assign(cssOj, this.vCssOjAdding)
    }
    return cssOj;
  }

  abstract build(): JSX.Element

}
