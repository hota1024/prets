import { Colon, Ident, Token } from '@/pel/tokenizer/tokens'
import { Walker } from '@/pel/Walker'
import { UnexpectedTokenError } from '../errors/UnexpectedTokenError'
import { ArgDefNode } from '../nodes/ArgDefNode'

/**
 * parse argument definition.
 *
 * @param walker walker.
 */
export const parseArgDef = (walker: Walker<Token>): ArgDefNode => {
  const name = walker.current()

  if (!(name instanceof Ident)) {
    throw new UnexpectedTokenError(name, [Ident])
  }
  walker.next()

  const colon = walker.current()

  if (!(colon instanceof Colon)) {
    throw new UnexpectedTokenError(colon, [Colon])
  }
  walker.next()

  const type = walker.current()

  if (!(type instanceof Ident)) {
    throw new UnexpectedTokenError(type, [Ident])
  }
  walker.next()

  return new ArgDefNode(name, type, name.span.merge(type.span))
}
