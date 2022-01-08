type Point = {
  x: number
  y: number
}

interface Drawer {
  /**
   * draw a line.
   *
   * @pretsFn [Point(point: start, x: sx, y: sy), Point(point: end, x: ex, y: ey)]
   */
  line(sx: number, sy: number, ex: number, ey: number): void
}
