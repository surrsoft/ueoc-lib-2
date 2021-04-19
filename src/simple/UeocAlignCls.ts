import { UeocAlign } from '../utils';

export class UeocAlignCls {
  vHorizontaly: UeocAlign = UeocAlign.START
  vVerticaly: UeocAlign = UeocAlign.START

  h(align: UeocAlign): this {
    this.vHorizontaly = align
    return this
  }

  v(align: UeocAlign): this {
    this.vVerticaly = align
    return this
  }
}
