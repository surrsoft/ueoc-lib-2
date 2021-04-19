export class UeocFourSize {
  vTopPx: number = 0
  vRightPx: number = 0
  vBottomPx: number = 0
  vLeftPx: number = 0

  all(sizePx: number): this {
    this.vTopPx = sizePx
    this.vRightPx = sizePx
    this.vBottomPx = sizePx
    this.vLeftPx = sizePx
    return this
  }

  four(topPx: number, rightPx: number, bottomPx: number, leftPx: number): this {
    this.vTopPx = topPx
    this.vRightPx = rightPx
    this.vBottomPx = bottomPx
    this.vLeftPx = leftPx
    return this
  }

  t(px: number): this {
    this.vTopPx = px;
    return this
  }

  r(px: number): this {
    this.vRightPx = px;
    return this
  }

  b(px: number): this {
    this.vBottomPx = px;
    return this
  }

  l(px: number): this {
    this.vLeftPx = px;
    return this
  }
}
