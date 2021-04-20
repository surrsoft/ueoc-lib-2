import React from 'react';
import { CreateCSSProperties } from '@material-ui/styles';
import { makeStyles } from '@material-ui/core/styles';
import { UeocAlign, UeocAlignPlus, UeocOrient } from './utils';
import { UeocElem } from './UeocElem';
import { UeocSize } from './simple/UeocGeometry';

type UeocType1206 = { child: UeocElem, align: UeocAlign }[];

export class UeocLayFlex extends UeocElem {
  vOrientation: UeocOrient = UeocOrient.HORIZONTAL
  vChildsStart: UeocElem[] = []
  private vChildsStartAlings: UeocType1206 = []
  vChildsEnd: UeocElem[] = []
  private vChildsEndAlings: UeocType1206 = []
  vChildBase?: UeocElem
  vChildBaseAlign: UeocAlign = UeocAlign.START

  horizontal(enable: boolean = true): this {
    if (enable) {
      this.vOrientation = UeocOrient.HORIZONTAL
    }
    return this
  }

  vertical(enable: boolean = true): this {
    if (enable) {
      this.vOrientation = UeocOrient.VERTICAL
    }
    return this
  }

  childAddToStart(child?: UeocElem, align: UeocAlign = UeocAlign.START): this {
    if (child) {
      this.vChildsStart.push(child)
      this.vChildsStartAlings.push({child, align})
    }
    return this
  }

  childAddToEnd(child?: UeocElem, align: UeocAlign = UeocAlign.START): this {
    if (child) {
      this.vChildsEnd.push(child)
      this.vChildsEndAlings.push({child, align})
    }
    return this
  }

  childBase(child?: UeocElem, align: UeocAlign = UeocAlign.START): this {
    if (child) {
      this.vChildBase = child
      this.vChildBaseAlign = align
    }
    return this
  }

  build(): JSX.Element {
    const cssOj = this.nobCssOj()

    if (this.vOtherCss) {
      Object.assign(cssOj, this.vOtherCss)
    }

    if (this.vOrientation === UeocOrient.VERTICAL) {
      cssOj.flexDirection = 'column'
    }

    // ---
    const classes = makeStyles({
      container: cssOj,
    })()

    const fnNx = (align: UeocAlign, vWS: UeocSize | undefined, vHS: UeocSize | undefined) => {
      if (this.vOrientation === UeocOrient.HORIZONTAL) {
        if (vHS === UeocSize.FILL) {
          return 'stretch'
        }
      } else {
        if (vWS === UeocSize.FILL) {
          return 'stretch'
        }
      }
      return UeocAlignPlus.toCssFormat(align)
    }

    return <div className={classes.container}>
      {this.vChildsStart.map((child) => {
        const cssOjAdding = {
          flexShrink: 0,
          // @ts-ignore
          alignSelf: fnNx(this.vChildsStartAlings.find(el => el.child === child)?.align, child.vGeometry?.vWS, child.vGeometry?.vHS),
        };
        child.nobCssOjAddingSet(cssOjAdding)
        return child.build()
      })}
      {(() => {
        if (this.vChildBase) {
          const cssOj3: CreateCSSProperties = {
            alignSelf: fnNx(this.vChildBaseAlign, this.vChildBase.vGeometry?.vWS, this.vChildBase.vGeometry?.vHS)
          }
          this.vChildBase.nobCssOjAddingSet(cssOj3)
          return this.vChildBase.build()
        } else {
          return ''
        }
      })()}
      {this.vChildsEnd.map((child, index) => {
        child.nobCssOjAddingSet(
          Object.assign(
            {flexShrink: 0}
            // @ts-ignore
            , {alignSelf: fnNx(this.vChildsEndAlings.find(el => el.child === child)?.align, child.vGeometry?.vWS, child.vGeometry?.vHS)}
            , index === 0
              ? this.vOrientation === UeocOrient.HORIZONTAL
                ? {marginLeft: 'auto'}
                : {marginTop: 'auto'}
              : {}
          )
        )
        return child.build()
      })}
    </div>
  }

}
