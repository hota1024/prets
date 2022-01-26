/**
 * Span class.
 */
export class Span {
  /**
   * Span constructor.
   *
   * @param start start number.
   * @param end end number.
   */
  constructor(public readonly start: number, public readonly end: number) {}

  /**
   * merge two spans and returns merged new Span instance.
   *
   * @param span span.
   */
  merge(span: Span): Span {
    return new Span(
      Math.min(this.start, span.start),
      Math.max(this.end, span.end)
    )
  }

  /**
   * clone this span.
   */
  clone(): Span {
    return new Span(this.start, this.end)
  }
}
