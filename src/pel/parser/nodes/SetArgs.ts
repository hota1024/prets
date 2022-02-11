import { Span } from '@/pel/Span'
import { ArgDefNode } from './ArgDefNode'
import { Node } from './Node'

/**
 * SetArgsNode class.
 */
export class SetArgsNode extends Node {
  constructor(public readonly args: ArgDefNode[], span: Span) {
    super(span)
  }
}
