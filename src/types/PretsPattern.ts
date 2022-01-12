import { JSDoc } from 'ts-morph'
import { PretsSet } from './PretsSet'
import { PretsToken } from './PretsToken'

/**
 * PretsPattern type.
 */
export type PretsPattern = PretsToken & {
  /**
   * pattern name.
   */
  name: string

  /**
   * pattern sets.
   *
   * @example
   * [Point, XY, XYArray]
   */
  sets: PretsSet[]

  /**
   * jsdoc node.
   */
  jsdoc: JSDoc
}
