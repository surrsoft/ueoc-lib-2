import { UeocElem } from './UeocElem';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

export class UeocWrap extends UeocElem {
  vChild?: JSX.Element

  child(elem: JSX.Element): this {
    this.vChild = elem
    return this
  }

  build(): JSX.Element {
    if (this.vChild) {
      const cssOj = this.nobCssOj()
      if (this.vOtherCss) {
        Object.assign(cssOj, this.vOtherCss)
      }
      const classes = makeStyles({
        container: cssOj,
      })()

      return <div className={classes.container}>{this.vChild}</div>
    }
    return <></>
  }

}
