export type LineStyle =
  "dashed"
  | "dotted"
  | "double"
  | "groove"
  | "hidden"
  | "inset"
  | "none"
  | "outset"
  | "ridge"
  | "solid";

export class UeocBorder {
  vThPx: number = 0
  vStyle: LineStyle = 'solid'
  vColor: string = '#000000'
  vRadius: number = 0

  th(borderThPx: number): this {
    this.vThPx = borderThPx
    return this
  }

  style(borderStyle: LineStyle): this {
    this.vStyle = borderStyle
    return this
  }

  color(color: string): this {
    this.vColor = color
    return this
  }

  radius(raduis: number): this {
    this.vRadius = raduis
    return this
  }

}
