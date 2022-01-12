import { Span } from '@/pel/Span'
import { LocatedError } from './LocatedError'

/**
 * UnterminatedStrError class.
 */
export class UnterminatedStrError extends LocatedError {
  name = 'UnterminatedStrError'

  message = 'unterminated string'

  /**
   * UnterminatedStrError constructor.
   *
   * @param span span.
   */
  constructor(span: Span) {
    super(span)
  }
}
