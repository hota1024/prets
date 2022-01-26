import { Span } from '@/pel/Span'
import { Node } from './Node'

/**
 * IdentNode class.
 */
export class IdentNode extends Node {
  /**
   * IdentNode constructor.
   *
   * @param ident identifier string.
   * @param span span.
   */
  constructor(public readonly ident: string, span: Span) {
    super(span)
  }
}
