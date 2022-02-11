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
 * XYArray type.
 *
 * @pretsType XYArray
 * @pretsTypeNormalize ['$[0]', '$[1]']
 * @pretsTypeCheck (Array.isArray($) && $.length === 2 &&typeof $[0] === 'number' && typeof $[1] === 'number')
 */
export type XYArray = [number, number]

/**
 * @pretsSet Point
 * @pretsSetArgs (point: Point)
 */

/**
 * @pretsSet XY
 * @pretsSetArgs (x: number, y: number)
 */

/**
 * @pretsSet XYArray
 * @pretsSetArgs (point: XYArray)
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
