import { Span } from '@/pel/Span'
import { Token } from './Token'

/**
 * Ident token class.
 */
export class Ident extends Token {
  /**
   * Ident constructor.
   *
   * @param ident identifier string.
   * @param span span.
   */
  constructor(public readonly ident: string, span: Span) {
    super(span)
  }
}
