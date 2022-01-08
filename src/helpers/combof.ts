const product = <T>(a: T[], b: T[]) => {
  const result = []

  for (const ai of a) {
    for (const bi of b) {
      result.push([ai, bi])
    }
  }

  return result
}

/**
 * returns combination of given the array.
 */
export const combof = <T>([a, ...suc]: T[][]): T[][] => {
  if (typeof a === 'undefined') {
    return []
  }

  const [b, ...s] = suc

  if (typeof b === 'undefined') {
    return a.map((v) => [v])
  }

  const r = product(a, b)
  const result: T[][] = []

  for (const i of r) {
    const ii = i.slice(0, -1)
    const il = i[i.length - 1]

    result.push(...combof([[il], ...s]).map((v) => [...ii, ...v]))
  }

  return result
}
