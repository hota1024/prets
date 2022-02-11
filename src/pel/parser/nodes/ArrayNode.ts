import { Span } from '@/pel/Span'
import { Node } from './Node'

/**
 * ArrayItemNode type.
 */
export type ArrayItemNode = Node

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
