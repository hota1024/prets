import { Span } from '@/pel/Span'

/**
 * Token class.
 */
export class Token {
  /**
   * Token constructor.
   *
   * @param span span.
   */
  constructor(public readonly span: Span) {}
}
