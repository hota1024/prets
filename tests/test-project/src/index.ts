/**
 * Point type.
 *
 * @pretsType
 * @pretsSubType [number(x), number(y)]
 */
export type Point = {
  x: number
  y: number
}

/**
 * normalize a point.
 *
 * @param point point object.
 * @pretsTypeNormalizerOf Point
 */
export const normalizePoint = (point: Point): [number, number] => {
  return [point.x, point.y]
}

/**
 * returns whether the given object is a point.
 *
 * @param point point object.
 * @pretsTypeCheckerOf Point
 */
export const isPoint = (point: unknown): point is Point => {
  return typeof point['x'] === 'number' && typeof point['y'] === 'number'
}

export interface Drawerable {
  /**
   * draw line.
   *
   * @pretsFn [Point(point: start, x: sx, y: sy), Point(point: end, x: ex, y: ey)]
   */
  line(sx: number, sy: number, ex: number, ey: number): void
}

export class Drawer implements Drawerable {
  line(sx: number, sy: number, ex: number, ey: number): void {
    console.log('rect', { sx, sy, ex, ey })
  }
}
