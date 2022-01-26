import { Span } from '@/pel/Span'
import { IdentNode } from './IdentNode'
import { Node } from './Node'
import { StrNode } from './StrNode'

/**
 * ArrayItemNode type.
 */
export type ArrayItemNode = StrNode | IdentNode

/**
 * ArrayNode class.
 */
export class ArrayNode extends Node {
  /**
   * ArrayNode constructor.
   *
   * @param nodes nodes.
   * @param span span.
   */
  constructor(public readonly nodes: ArrayItemNode[], span: Span) {
    super(span)
  }
}
