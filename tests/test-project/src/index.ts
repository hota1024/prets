/**
 * Point type.
 *
 * @pretsType Point
 * @pretsTypeNormalize ['$.x', '$.y']
 * @pretsTypeCheck (typeof $.x === 'number' && typeof $.y === 'number')
 */
export type Point = {
  x: number
  y: number
}

/**
 * @pretsSet Point
 * @pretsSetTypes (point: Point)
 */

/**
 * @pretsSet XY
 * @pretsSetTypes (x: number, y: number)
 */

/**
 * @pretsSet XYArray
 * @pretsSetTypes (point: [number, number])
 */

/**
 * @pretsPattern Pointable
 * @pretsPatternSets [Point, XY, XYArray]
 */

class Drawer {
  /**
   * @pretsMethod line
   * @pretsMethodArg [point: start, x: sx, y: sy]: Pointable
   * @pretsMethodArg [point: end, x: ex, y: ey]: Pointable
   */
  private $line(sx: number, sy: number, ex: number, ey: number) {
    // ...
  }
}
