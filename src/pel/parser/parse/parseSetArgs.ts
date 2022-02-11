import { Comma, LeftParen, RightParen, Token } from '@/pel/tokenizer/tokens'
import { Walker } from '@/pel/Walker'
import { UnexpectedTokenError } from '../errors/UnexpectedTokenError'
import { ArgDefNode } from '../nodes/ArgDefNode'
import { Node } from '../nodes/Node'
import { SetArgsNode } from '../nodes/SetArgs'
import { parseArgDef } from './parseArgDef'

/**
 * parse set arguments.
 *
 * @param walker walker.
 */
export const parseSetArgs = (walker: Walker<Token>): Node => {
  const leftParen = walker.current()

  if (!(leftParen instanceof LeftParen)) {
    throw new UnexpectedTokenError(leftParen)
  }

  walker.next()

  const argDefs: ArgDefNode[] = []
  let span = leftParen.span.clone()

  // eslint-disable-next-line no-constant-condition
  while (true) {
    const token = walker.current()

    if (token instanceof RightParen) {
      span = span.merge(token.span)
      break
    }

    const argDef = parseArgDef(walker)
    argDefs.push(argDef)

    span = span.merge(argDef.span)

    if (
      !(walker.current() instanceof RightParen) &&
      !(walker.current() instanceof Comma)
    ) {
      throw new UnexpectedTokenError(walker.current(), [Comma])
    }

    if (walker.current() instanceof Comma) {
      walker.next()
    }
  }

  return new SetArgsNode(argDefs, span)
}
