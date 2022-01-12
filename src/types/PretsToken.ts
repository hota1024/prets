import { SourceFile } from 'ts-morph'

/**
 * PretsToken type.
 */
export type PretsToken = {
  /**
   * file with this token.
   */
  file: SourceFile
}
