import { Ident } from './tokens'

/**
 * ASTNode type.
 */
export type ASTNode<K> = {
  /**
   * kind.
   */
  kind: K
}

/**
 * TypeOption node.
 */
export type TypeOption = ASTNode<'TypeOption'> & {
  /**
   * option name.
   */
  name: Ident

  /**
   * option value.
   */
  value: Ident
}

/**
 * Arg node.
 */
export type Arg = ASTNode<'Arg'> & {
  /**
   * arg type.
   */
  type: Ident

  /**
   * arg options.
   */
  options: TypeOption[]

  /**
   * is optional.
   */
  optional: boolean
}

/**
 * ArgList node.
 */
export type ArgList = ASTNode<'ArgList'> & {
  /**
   * args.
   */
  args: Arg[]
}
