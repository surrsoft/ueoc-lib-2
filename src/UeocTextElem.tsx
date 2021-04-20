import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { UeocAlign } from './utils';
import { UeocElem } from './UeocElem';
import { UeocTextStyle } from './simple/UeocTextStyle';
import { UeocAlignCls } from './simple/UeocAlignCls';

export class UeocTextElem extends UeocElem {
  vText: string = ''
  vTextStyle?: UeocTextStyle
  vTextAlign: UeocAlignCls = new UeocAlignCls().h(UeocAlign.CENTER).v(UeocAlign.CENTER)

  private fnTextStyleGetAnd = () => {
    if (!this.vTextStyle) {
      this.vTextStyle = new UeocTextStyle()
    }
    return this.vTextStyle
  }

  text(text: string): this {
    this.vText = text;
    return this;
  }

  textStyle(textStyle: UeocTextStyle): this {
    this.vTextStyle = textStyle
    return this
  }

  utColor(color: string): this {
    this.fnTextStyleGetAnd().vColor = color;
    return this;
  }

  utTextSize(sizePx: number): this {
    this.fnTextStyleGetAnd().vSizePx = sizePx;
    return this;
  }

  utBold(enable?: boolean): this {
    this.fnTextStyleGetAnd().bold(enable)
    return this;
  }

  utItalic(enable?: boolean): this {
    this.fnTextStyleGetAnd().italic(enable)
    return this;
  }

  utUnderline(enable?: boolean): this {
    this.fnTextStyleGetAnd().underline(enable)
    return this;
  }

  textAlign(align: UeocAlignCls): this {
    this.vTextAlign = align
    return this
  }

  build(): JSX.Element {
    const cssOj = this.nobCssOj()

    if (this.vOtherCss) {
      Object.assign(cssOj, this.vOtherCss)
    }

    // ---
    const tsx = this.vTextStyle
    if (tsx) {
      if (tsx.vColor) {
        cssOj.color = tsx.vColor
      }
      if (tsx.vBgColor) {
        cssOj.backgroundColor = tsx.vBgColor
      }
      if (tsx.vSizePx) {
        cssOj.fontSize = tsx.vSizePx
      }
      if (tsx.vIsBold) {
        cssOj.fontWeight = 'bold'
      }
      if (tsx.vIsItalic) {
        cssOj.fontStyle = 'italic'
      }
      if (tsx.vIsUnderline) {
        cssOj.textDecoration = 'underline'
      }
    }

    switch (this.vTextAlign?.vHorizontaly) {
      case UeocAlign.START:
        cssOj.justifyContent = 'flex-start'
        break;
      case UeocAlign.CENTER:
        cssOj.justifyContent = 'center'
        break;
      case UeocAlign.END:
        cssOj.justifyContent = 'flex-end'
        break;
    }
    switch (this.vTextAlign?.vVerticaly) {
      case UeocAlign.START:
        cssOj.alignItems = 'flex-start'
        break;
      case UeocAlign.CENTER:
        cssOj.alignItems = 'center'
        break;
      case UeocAlign.END:
        cssOj.alignItems = 'flex-end'
        break;
    }

    // ---
    const classes = makeStyles({
      container: cssOj,
    })()

    // ---
    return <div className={classes.container}>
      {this.vText}
    </div>;
  }
}

