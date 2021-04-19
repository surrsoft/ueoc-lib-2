export enum UeocSize {
  FILL = 'fill',
  WRAP = 'wrap'
}

export class UeocGeometry {
  vWPx: number = 0
  vHPx: number = 0
  vWS?: UeocSize
  vHS?: UeocSize

  // --- builders

  w(wPxOrConst: number | UeocSize): this {
    if (typeof wPxOrConst === 'number') {
      this.vWPx = wPxOrConst
    } else {
      this.vWS = wPxOrConst
    }
    return this
  }

  h(hPxOrConst: number | UeocSize): this {
    if (typeof hPxOrConst === 'number') {
      this.vHPx = hPxOrConst
    } else {
      this.vHS = hPxOrConst
    }
    return this
  }

}
