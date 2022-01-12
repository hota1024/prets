import { Span } from '@/pel/Span'
import { Token } from './Token'

/**
 * String-literal token class.
 */
export class Str extends Token {
  /**
   * Str constructor.
   *
   * @param str string.
   * @param span span.
   */
  constructor(public readonly str: string, span: Span) {
    super(span)
  }
}
