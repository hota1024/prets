import { Span } from '@/pel/Span'
import {
  Colon,
  Comma,
  LeftBracket,
  LeftParen,
  RightBracket,
  RightParen,
} from '../tokens'
import { Rule } from './Rule'

const symbolMap = new Map([
  ['(', LeftParen],
  [')', RightParen],
  ['[', LeftBracket],
  [']', RightBracket],
  [',', Comma],
  [':', Colon],
])

/**
 * tokenize symbols.
 */
export const symbols: Rule = (source, pos) => {
  const attention = source.slice(pos)
  const symbol = attention[0]

  const Token = symbolMap.get(symbol)

  if (!Token) {
    return [pos, []]
  }

  const span = new Span(pos, pos + 1)
  const token = new Token(span)

  return [pos + 1, [token]]
}
