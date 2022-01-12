import { Span } from '@/pel/Span'
import { UnterminatedStrError } from '../errors/UnterminatedStrError'
import { Str } from '../tokens'
import { Rule } from './Rule'

const quotes = [`'`, `"`]

/**
 * tokenize string.
 */
export const str: Rule = (source: string, pos: number) => {
  const attention = source.slice(pos)
  const quote = attention[0]

  if (!quotes.includes(quote)) {
    return [pos, []]
  }

  const start = pos

  pos += 1
  while (source[pos] !== quote) {
    if (pos > source.length) {
      throw new UnterminatedStrError(new Span(start, pos - 1))
    }

    pos += 1
  }

  const str = source.slice(start + 1, pos)
  const span = new Span(start, pos)
  const token = new Str(str, span)

  return [pos + 1, [token]]
}
