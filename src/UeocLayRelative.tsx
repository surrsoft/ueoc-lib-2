import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CreateCSSProperties } from '@material-ui/styles';
import { UeocElem } from './UeocElem';
import { UeocSize } from './simple/UeocGeometry';

export enum UeocRelPosition {
  TOP_LEFT = 'top_left',
  TOP_CENTER = 'top_center',
  TOP_RIGHT = 'top_right',
  BOTTOM_LEFT = 'bottom_left',
  BOTTOM_CENTER = 'bottom_center',
  BOTTOM_RIGHT = 'bottom_right',
  CENTER_LEFT = 'center_left',
  CENTER_CENTER = 'center_center',
  CENTER_RIGHT = 'center_right',
}

export class UeocElemAndPos {
  constructor(public child: UeocElem, public position: UeocRelPosition = UeocRelPosition.TOP_LEFT) {
  }
}

export class UeocLayRelative extends UeocElem {
  vElemAndPosArr: UeocElemAndPos[] = []

  build() {
    if (this.vHide) {
      return <></>
    }
    const cssOj = this.nobCssOj()

    if (this.vOtherCss) {
      Object.assign(cssOj, this.vOtherCss)
    }

    // ---
    const classes = makeStyles({
      container: cssOj,
    })()

    function tVert(elem: UeocElem) {
      return `calc(-50% - ${elem.vMargins ? elem.vMargins.vTopPx : 0}px)`;
    }

    function tHoriz(elem: UeocElem) {
      return `calc(-50% - ${elem.vMargins ? elem.vMargins.vLeftPx : 0}px)`;
    }

    // ---
    const attrs0 = {};
    if (this.vOnClick) {
      // @ts-ignore
      attrs0.onClick = this.vOnClick;
    }

    return <div className={classes.container} style={{position: 'relative'}} {...attrs0}>
      {this.vElemAndPosArr.map(el => {
        const {child, position} = el;
        const geom = child.vGeometry;
        const cssOj1: CreateCSSProperties = {};
        if (position) {
          cssOj1.position = 'absolute'
          if (geom) {
            if (geom.vHS === UeocSize.FILL && geom.vWS === UeocSize.FILL) {
              cssOj1.top = 0
              cssOj1.right = 0
              cssOj1.left = 0
              cssOj1.bottom = 0
            } else {
              switch (position) {
                case UeocRelPosition.TOP_LEFT:
                  cssOj1.left = 0
                  cssOj1.top = 0
                  if (geom.vHS === UeocSize.FILL) {
                    cssOj1.bottom = 0
                  } else if (geom.vWS === UeocSize.FILL) {
                    cssOj1.right = 0
                  }
                  break;
                case UeocRelPosition.TOP_CENTER:
                  cssOj1.top = 0
                  if (geom.vHS === UeocSize.FILL) {
                    cssOj1.left = '50%'
                    cssOj1.transform = `translate(${tHoriz(child)}, 0)`
                    cssOj1.bottom = 0
                  } else if (geom.vWS === UeocSize.FILL) {
                    cssOj1.left = 0
                    cssOj1.right = 0
                  } else {
                    cssOj1.left = '50%'
                    cssOj1.transform = `translate(${tHoriz(child)}, 0)`
                  }
                  break;
                case UeocRelPosition.TOP_RIGHT:
                  cssOj1.right = 0
                  cssOj1.top = 0
                  if (geom.vHS === UeocSize.FILL) {
                    cssOj1.bottom = 0
                  } else if (geom.vWS === UeocSize.FILL) {
                    cssOj1.left = 0
                  }
                  break;
                case UeocRelPosition.BOTTOM_LEFT:
                  cssOj1.left = 0
                  cssOj1.bottom = 0
                  if (geom.vHS === UeocSize.FILL) {
                    cssOj1.top = 0
                  } else if (geom.vWS === UeocSize.FILL) {
                    cssOj1.right = 0
                  }
                  break;
                case UeocRelPosition.BOTTOM_CENTER:
                  cssOj1.bottom = 0
                  if (geom.vHS === UeocSize.FILL) {
                    cssOj1.left = '50%'
                    cssOj1.transform = `translate(${tHoriz(child)}, 0)`
                    cssOj1.bottom = 0
                    cssOj1.top = 0
                  } else if (geom.vWS === UeocSize.FILL) {
                    cssOj1.left = 0
                    cssOj1.right = 0
                  } else {
                    cssOj1.left = '50%'
                    cssOj1.transform = `translate(${tHoriz(child)}, 0)`
                  }
                  break;
                case UeocRelPosition.BOTTOM_RIGHT:
                  cssOj1.right = 0
                  cssOj1.bottom = 0
                  if (geom.vHS === UeocSize.FILL) {
                    cssOj1.top = 0
                  } else if (geom.vWS === UeocSize.FILL) {
                    cssOj1.left = 0
                  }
                  break;
                case UeocRelPosition.CENTER_LEFT:
                  cssOj1.left = 0
                  if (geom.vHS === UeocSize.FILL) {
                    cssOj1.bottom = 0
                    cssOj1.top = 0
                  } else if (geom.vWS === UeocSize.FILL) {
                    cssOj1.top = '50%'
                    cssOj1.transform = `translate(0, ${tVert(child)})`
                    cssOj1.right = 0
                  } else {
                    cssOj1.top = '50%'
                    cssOj1.transform = `translate(0, ${tVert(child)})`
                  }
                  break;
                case UeocRelPosition.CENTER_CENTER:
                  if (geom.vHS === UeocSize.FILL) {
                    cssOj1.left = '50%'
                    cssOj1.transform = `translate(${tHoriz(child)}, 0)`
                    cssOj1.bottom = 0
                    cssOj1.top = 0
                  } else if (geom.vWS === UeocSize.FILL) {
                    cssOj1.left = 0
                    cssOj1.right = 0
                    cssOj1.top = '50%'
                    cssOj1.transform = `translate(0, ${tVert(child)})`
                  } else {
                    cssOj1.left = '50%'
                    cssOj1.top = '50%'
                    cssOj1.transform = `translate(${tHoriz(child)}, ${tVert(child)})`
                  }
                  break;
                case UeocRelPosition.CENTER_RIGHT:
                  cssOj1.right = 0
                  if (geom.vHS === UeocSize.FILL) {
                    cssOj1.bottom = 0
                    cssOj1.top = 0
                  } else if (geom.vWS === UeocSize.FILL) {
                    cssOj1.top = '50%'
                    cssOj1.transform = `translate(0, ${tVert(child)})`
                    cssOj1.left = 0
                  } else {
                    cssOj1.top = '50%'
                    cssOj1.transform = `translate(0, ${tVert(child)})`
                  }
                  break;
              }
            }
          }
        }
        child.nobCssOjAddingSet(cssOj1)
        // ---

        // ---
        return child.build();
      })}
    </div>
  }

  childAddWithPos(child: UeocElem, position?: UeocRelPosition) {
    this.vElemAndPosArr.push(new UeocElemAndPos(child, position))
    return this
  }

}
