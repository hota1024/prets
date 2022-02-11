import { Span } from '@/pel/Span'
import { Ident } from '../tokens'
import { Rule } from './Rule'

const IDENT_REGEXP = /^([a-z][a-z0-9]*)/i

/**
 * tokenize identifier.
 */
export const ident: Rule = (source, pos) => {
  const attention = source.slice(pos)

  const matches = attention.match(IDENT_REGEXP)

  if (matches) {
    const ident = matches[0]
    const span = new Span(pos, pos + ident.length)
    const token = new Ident(ident, span)

    return [span.end, [token]]
  }

  return [pos, []]
}
