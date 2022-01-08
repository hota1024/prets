export type Point = {
  x: number
  y: number
}

/**
 * @pretsFn [Point(point: start, x: sx, y: sy), Point(point: end, x: ex, y: ey)]
 */
const $rect = (x: number, y: number, width: number, height: number) => {
  return {
    x,
    y,
    width,
    height,
  }
}

function test(x: number, x: number): void
function test(...args: any[]) {}
