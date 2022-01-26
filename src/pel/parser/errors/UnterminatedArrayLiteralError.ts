import { Span } from '@/pel/Span'
import { LocatedError } from '../../errors/LocatedError'

/**
 * UnterminatedArrayLiteralError class.
 */
export class UnterminatedArrayLiteralError extends LocatedError {
  name = 'UnterminatedArrayLiteralError'

  message = 'cunterminated array literal'

  /**
   * UnterminatedArrayLiteralError constructor.
   *
   * @param span span.
   */
  constructor(span: Span) {
    super(span)
  }
}
