import chalk from 'chalk'
import { Span } from '../Span'
import { UnexpectedCharError } from './errors/UnexpectedCharError'
import { UnterminatedStrError } from './errors/UnterminatedStrError'
import { ident } from './rules/ident'
import { Rule } from './rules/Rule'
import { str } from './rules/str'
import { symbols } from './rules/symbols'
import { Ident, Str, Token } from './tokens'
import { End } from './tokens/End'

/**
 * tokenize source code.
 *
 * @param source source code.
 */
export const tokenize = (source: string): Token[] => {
  const tokens: Token[] = []

  let pos = 0

  const applyRule = (rule: Rule): void => {
    const [next, newTokens] = rule(source, pos)

    pos = next
    tokens.push(...newTokens)
  }

  while (pos < source.length) {
    const initialPos = pos

    applyRule(ident)
    applyRule(str)
    applyRule(symbols)

    for (; source[pos] === ' '; pos++) {
      // do nothing
    }

    if (initialPos === pos) {
      throw new UnexpectedCharError(pos, source[pos])
    }
  }

  tokens.push(new End(new Span(source.length, source.length)))

  return tokens
}

/**
 * tokenize source code and if catching error, show rich error message.
 * @param source source code.
 */
export const tokenizeWithError = (source: string): Token[] => {
  let tokens: Token[] = []

  try {
    tokens = tokenize(source)
  } catch (e) {
    if (e instanceof UnexpectedCharError) {
      console.log(source)
      console.log(
        ' '.repeat(e.pos) +
          '└─ ' +
          `unexpected character at ${e.pos}: '${e.char}'`
      )
    } else if (e instanceof UnterminatedStrError) {
      console.log(source)
      let selector = ' '.repeat(e.span.start)
      selector += '└'
      selector += '─'.repeat(Math.max(e.span.end - e.span.start - 2, 0))
      selector += `┴─ ${e.message}`
      console.log(selector)
    } else {
      throw e
    }
  }

  return tokens
}

/**
 * returns painted tokens string.
 *
 * @param source soruce code.
 * @param tokens tokens.
 */
export const paintTokens = (source: string, tokens: Token[]): string => {
  let result = ''

  for (const token of tokens) {
    if (token instanceof Str) {
      result += chalk.red`"${token.str}"`
    } else if (token instanceof Ident) {
      result += chalk.blue(token.ident)
    } else {
      result += chalk.yellow(source.slice(token.span.start, token.span.end))
    }

    result += ' '
  }

  return result
}
