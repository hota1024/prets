import {
  ClassDeclaration,
  InterfaceDeclaration,
  TypeAliasDeclaration,
} from 'ts-morph'
import { PretsToken } from './PretsToken'

/**
 * PretsType type.
 */
export type PretsType = PretsToken & {
  /**
   * type name.
   */
  name: string

  /**
   * inline normalizer.
   *
   * @example
   * ['$.x', '$.y']
   */
  inlineNormalizer: string[]

  /**
   * inline type checker.
   *
   * @example
   * (typeof $.x === 'number' && typeof $.y === 'number')
   */
  inlineChecker: string

  /**
   * type declaration node.
   */
  declaration: TypeAliasDeclaration | InterfaceDeclaration | ClassDeclaration
}
