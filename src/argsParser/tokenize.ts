import { Token } from './tokens'

/**
 * tokenize arg code.
 *
 * @param code code string.
 */
export const tokenize = (code: string): Token[] => {
  const tokens: Token[] = []

  let store = ''
  let i = 0

  const ident = () => {
    if (store) {
      tokens.push({
        kind: 'Ident',
        ident: store,
      })
      store = ''
    }
  }

  // eslint-disable-next-line no-constant-condition
  while (true) {
    const char = code[i]

    if (char === '[') {
      ident()
      tokens.push({ kind: 'LeftBracket' })
    } else if (char === ']') {
      ident()
      tokens.push({ kind: 'RightBracket' })
    } else if (char === '(') {
      ident()
      tokens.push({ kind: 'LeftParen' })
    } else if (char === ')') {
      ident()
      tokens.push({ kind: 'RightParen' })
    } else if (char === ':') {
      ident()
      tokens.push({ kind: 'Colon' })
    } else if (char === ',') {
      ident()
      tokens.push({ kind: 'Comma' })
    } else if (char === '?') {
      ident()
      tokens.push({ kind: 'Question' })
    } else if (char === ' ') {
      ident()
    } else {
      store += char
    }

    i++

    if (i >= code.length) {
      ident()
      break
    }
  }

  return tokens
}
