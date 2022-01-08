import { PretsTypeNormalizer } from '@/types/PretsTypeNormalizer'
import { SourceFile, FunctionDeclaration, VariableStatement } from 'ts-morph'

/**
 * returns prets type normalizers.
 *
 * @param file source file.
 */
export const getPretsTypeNormalizers = (
  file: SourceFile
): PretsTypeNormalizer[] => {
  const pretsTypeNormalizers: PretsTypeNormalizer[] = []
  const fns = [...file.getVariableStatements(), ...file.getFunctions()]

  for (const fn of fns) {
    const attributes = fn.getJsDocs()

    for (const attribute of attributes) {
      const tags = attribute.getTags()

      for (const tag of tags) {
        if (tag.getTagName() === 'pretsTypeNormalizerOf') {
          const normalizerOf = tag.getCommentText()

          if (!normalizerOf) {
            throw new Error(
              '[prets] `@pretsTypeCheckerOf` attribute is required.'
            )
          }

          let name = ''

          if (fn instanceof FunctionDeclaration) {
            name = fn.getName() ?? ''
          } else if (fn instanceof VariableStatement) {
            name = fn.getDeclarations()[0].getName()
          }

          if (name === '') {
            throw new Error(
              '[prets] type-normalizer function name is required.'
            )
          }

          pretsTypeNormalizers.push({
            name,
            normalizerOf,
            path: file.getFilePath(),
          })
        }
      }
    }
  }

  return pretsTypeNormalizers
}
