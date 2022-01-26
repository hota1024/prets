import { LocatedError } from '@/pel/errors/LocatedError'
import { Token } from '@/pel/tokenizer/tokens'

/**
 * UnexpectedTokenError class.
 */
export class UnexpectedTokenError extends LocatedError {
  name = 'UnexpectedTokenError'

  constructor(
    public readonly token: Token,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public readonly expects?: (new (...args: any[]) => Token)[]
  ) {
    super(token.span)

    if (expects) {
      this.message = `unexpected token ${
        token.constructor.name
      }, expect ${expects.map((t) => t.name).join(', ')}`
    } else {
      this.message = `unexpected token ${token.constructor.name}`
    }
  }
}
