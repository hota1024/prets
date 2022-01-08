/**
 * TokenBase type.
 */
export type TokenBase<K> = {
  /**
   * kind.
   */
  kind: K
}

/**
 * LeftBracket token.
 */
export type LeftBracket = TokenBase<'LeftBracket'>

/**
 * RightBracket token.
 */
export type RightBracket = TokenBase<'RightBracket'>

/**
 * LeftParen token.
 */
export type LeftParen = TokenBase<'LeftParen'>

/**
 * RightParen token.
 */
export type RightParen = TokenBase<'RightParen'>

/**
 * Ident token.
 */
export type Ident = TokenBase<'Ident'> & {
  /**
   * identifier string.
   */
  ident: string
}

/**
 * Colon token.
 */
export type Colon = TokenBase<'Colon'>

/**
 * Comma token.
 */
export type Comma = TokenBase<'Comma'>

/**
 * Question token.
 */
export type Question = TokenBase<'Question'>

/**
 * Token type.
 */
export type Token =
  | LeftBracket
  | RightBracket
  | LeftParen
  | RightParen
  | Ident
  | Colon
  | Comma
  | Question
