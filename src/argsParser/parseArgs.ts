import { Arg, ArgList, TypeOption } from './nodes'
import { Token } from './tokens'

type State = {
  tokens: Token[]
  current: () => Token
  next: () => Token
  peek: () => Token
}

const createState = (tokens: Token[]) => {
  let i = -1

  return {
    tokens,
    current() {
      return tokens[i]
    },
    next() {
      i++
      return tokens[i]
    },
    peek() {
      return tokens[i + 1]
    },
  }
}

/**
 * parse tokens.
 *
 * @param tokens tokens array.
 */
export const parse = (tokens: Token[]): ArgList => {
  const state = createState(tokens)

  return parseArgList(state)
}

const parseArgList = (state: State): ArgList => {
  if (state.peek().kind !== 'LeftBracket') {
    throw new Error(
      `[prets: syntax error] [ is required(got ${state.peek().kind})`
    )
  }
  state.next()

  const args: Arg[] = []

  // eslint-disable-next-line no-constant-condition
  while (true) {
    if (state.peek().kind === 'RightBracket') {
      break
    }

    const arg = parseArg(state)
    args.push(arg)

    if (state.peek().kind !== 'Comma') {
      break
    }

    state.next()
  }

  if (
    typeof state.peek() !== 'undefined' &&
    state.peek().kind !== 'RightBracket'
  ) {
    throw new Error(
      `[prets: syntax error] ] or , is required(got ${state.peek().kind})`
    )
  }

  return {
    kind: 'ArgList',
    args,
  }
}

const parseArg = (state: State): Arg => {
  const type = state.peek()
  if (type.kind !== 'Ident') {
    throw new Error(`[prets: syntax error] type is not Ident(got ${type.kind})`)
  }
  state.next()

  let optional = false
  if (state.peek().kind === 'Question') {
    state.next()
    optional = true
  }

  const options: TypeOption[] = []
  if (state.peek().kind === 'LeftParen') {
    state.next()
    // eslint-disable-next-line no-constant-condition
    while (true) {
      const name = state.peek()
      if (name.kind !== 'Ident') {
        break
      }
      state.next()

      if (state.peek().kind !== 'Colon') {
        throw new Error('[prets: syntax error] : is required.')
      }
      state.next()

      const value = state.peek()
      if (value.kind !== 'Ident') {
        throw new Error('[prets: syntax error] value is not Ident')
      }
      state.next()

      options.push({
        kind: 'TypeOption',
        name,
        value,
      })

      if (state.peek().kind !== 'Comma') {
        break
      }
      state.next()
    }

    if (state.peek().kind !== 'RightParen') {
      throw new Error(
        `[prets: syntax error] ) is required(got ${state.peek().kind})`
      )
    }
  }

  state.next()

  return {
    kind: 'Arg',
    type,
    options,
    optional,
  }
}
