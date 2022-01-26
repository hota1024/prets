import { Span } from '@/pel/Span'
import { Node } from './Node'

/**
 * StrNode class.
 */
export class StrNode extends Node {
  /**
   * StrNode constructor.
   *
   * @param str string.
   * @param span span.
   */
  constructor(public readonly str: string, span: Span) {
    super(span)
  }
}
