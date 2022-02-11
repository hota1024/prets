import { tokenize } from '@/pel/tokenizer'
import {
  Comma,
  Ident,
  LeftBracket,
  RightBracket,
  Str,
  Token,
} from '@/pel/tokenizer/tokens'
import { Walker } from '@/pel/Walker'
import { UnexpectedTokenError } from '../errors/UnexpectedTokenError'
import { UnterminatedArrayLiteralError } from '../errors/UnterminatedArrayLiteralError'
import { ArrayItemNode, ArrayNode } from '../nodes/ArrayNode'
import { IdentNode } from '../nodes/IdentNode'
import { Node } from '../nodes/Node'
import { StrNode } from '../nodes/StrNode'

/**
 * parse array node.
 *
 * @param walker walker.
 */
export const parseArray = (
  walker: Walker<Token>,
  itemParser: (walker: Walker<Token>) => Node
): Node => {
  const leftBracket = walker.current()

  if (!(leftBracket instanceof LeftBracket)) {
    throw new UnexpectedTokenError(leftBracket)
  }

  walker.next()

  const items: ArrayItemNode[] = []
  let span = leftBracket.span.clone()

  // eslint-disable-next-line no-constant-condition
  while (true) {
    const token = walker.current()

    if (token instanceof RightBracket) {
      break
    }

    const itemNode = itemParser(walker)
    items.push(itemNode)

    if (walker.isLast()) {
      throw new UnterminatedArrayLiteralError(span)
    }

    span = span.merge(token.span)
    walker.next()

    if (
      !(walker.current() instanceof RightBracket) &&
      !(walker.current() instanceof Comma)
    ) {
      throw new UnexpectedTokenError(walker.current(), [Comma])
    }

    if (walker.current() instanceof Comma) {
      walker.next()
    }
  }

  return new ArrayNode(items, span)
}

const tokens = tokenize('[ident, ident, indent]')
const walker = new Walker(tokens)
console.log(
  parseArray(walker, (walker) => {
    const ident = walker.current()
    if (!(ident instanceof Ident)) {
      throw new UnexpectedTokenError(ident, [Ident])
    }
    walker.next()

    return new IdentNode(ident.ident, ident.span)
  })
)
