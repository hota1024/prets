import { FunctionDeclaration, SourceFile, VariableStatement } from 'ts-morph'
import { PretsTypeChecker } from '../types/PretsTypeChecker'

/**
 * returns prets type checkers.
 *
 * @param file source file.
 */
export const getPretsTypeCheckers = (file: SourceFile): PretsTypeChecker[] => {
  const pretsTypeChecker: PretsTypeChecker[] = []
  const fns = [...file.getVariableStatements(), ...file.getFunctions()]

  for (const fn of fns) {
    const attributes = fn.getJsDocs()

    for (const attribute of attributes) {
      const tags = attribute.getTags()

      for (const tag of tags) {
        if (tag.getTagName() === 'pretsTypeCheckerOf') {
          const checkerOf = tag.getCommentText()

          if (!checkerOf) {
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
            throw new Error('[prets] type-checker function name is required.')
          }

          pretsTypeChecker.push({
            name,
            checkerOf,
            path: file.getFilePath(),
          })
        }
      }
    }
  }

  return pretsTypeChecker
}
