import { Span } from '@/pel/Span'
import { Ident } from '@/pel/tokenizer/tokens'
import { Node } from './Node'

/**
 * ArgDefNode class.
 */
export class ArgDefNode extends Node {
  constructor(
    public readonly name: Ident,
    public readonly type: Ident,
    span: Span
  ) {
    super(span)
  }
}
