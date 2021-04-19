export enum UeocAlign {
  START = 'start',
  CENTER = 'center',
  END = 'end'
}

export enum UeocAlignS {
  START = 'start',
  CENTER = 'center',
  END = 'end',
  STRETCH = 'stretch'
}

export class UeocAlignSPlus {
  static toCss(align: UeocAlignS) {
    let ret = ''
    switch (align) {
      case UeocAlignS.START:
        ret = 'flex-start'
        break;
      case UeocAlignS.CENTER:
        ret = 'center'
        break;
      case UeocAlignS.END:
        ret = 'flex-end'
        break;
      case UeocAlignS.STRETCH:
        ret = 'stretch'
        break;
    }
    return ret
  }
}

export class UeocAlignPlus {
  static toCssFormat(align: UeocAlign) {
    let ret = ''
    switch (align) {
      case UeocAlign.START:
        ret = 'flex-start'
        break;
      case UeocAlign.CENTER:
        ret = 'center'
        break;
      case UeocAlign.END:
        ret = 'flex-end'
        break;
    }
    return ret
  }
}

export enum UeocOrient {
  HORIZONTAL = 'horizontal',
  VERTICAL = 'vertical'
}
