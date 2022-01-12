/**
 * UnexpectedCharError class.
 */
export class UnexpectedCharError extends Error {
  name = 'UnexpectedCharError'

  constructor(public readonly pos: number, public readonly char: string) {
    super(`unexpected character at ${pos}: '${char}'`)
  }
}
