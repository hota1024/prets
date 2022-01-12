import { JSDoc } from 'ts-morph'
import { PretsToken } from './PretsToken'
import { PretsType } from './PretsType'

/**
 * PretsSetArg type.
 */
export type PretsSetArg = {
  /**
   * argument name alias.
   */
  name: string

  /**
   * argument type.
   */
  type: PretsType
}

/**
 * PretsSet type.
 */
export type PretsSet = PretsToken & {
  /**
   * set name.
   */
  name: string

  /**
   * set arguments.
   * @example
   * (point: Point)
   * (x: number, y: number)
   * (xy: [number, number])
   */
  args: PretsSetArg[]

  /**
   * JSDoc node.
   */
  jsdoc: JSDoc
}
