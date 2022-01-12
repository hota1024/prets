import { Token } from '../tokens'

/**
 * RuleResult type.
 */
export type RuleResult = [number, Token[]]

/**
 * Rule function type.
 */
export type Rule = (source: string, pos: number) => RuleResult
