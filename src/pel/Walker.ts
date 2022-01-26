/**
 * Walker class.
 */
export class Walker<T> {
  /**
   * current index.
   */
  private index = 0

  /**
   * items.
   */
  public readonly items: T[] = []

  /**
   * Walker constructor.
   *
   * @param items items.
   */
  constructor(items: T[]) {
    this.items = items
  }

  /**
   * returns current item.
   */
  current(): T {
    return this.items[this.index]
  }

  /**
   * move to next item and returns item.
   */
  next(): T | undefined {
    this.index++

    return this.current()
  }

  /**
   * returns next item.
   */
  peek(): T | undefined {
    return this.items[this.index + 1]
  }

  /**
   * returns whether walking was finished.
   */
  finished(): boolean {
    return this.index > this.items.length
  }

  /**
   * returns whether current item is last.
   */
  isLast(): boolean {
    return this.index === this.items.length - 1
  }
}
