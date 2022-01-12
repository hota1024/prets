import { Span } from '@/pel/Span'

/**
 * LocatedError class.
 */
export class LocatedError extends Error {
  /**
   * LocatedError constructor.
   * @param span span.
   */
  constructor(public readonly span: Span) {
    super()
  }
}
