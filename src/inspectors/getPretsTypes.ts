import { PretsType } from '@/types/PretsType'
import { SourceFile } from 'ts-morph'

/**
 * returns prets types.
 *
 * @param file source file.
 */
export const getPretsTypes = (file: SourceFile): PretsType[] => {
  const pretsTypes: PretsType[] = []
  const types = file.getTypeAliases()

  for (const type of types) {
    const attributes = type.getJsDocs()

    for (const attribute of attributes) {
      const tags = attribute.getTags()

      for (const tag of tags) {
        if (tag.getTagName() === 'pretsType') {
          pretsTypes.push({
            name: tag.getCommentText() ?? type.getName(),
            path: file.getFilePath(),
          })
        }
      }
    }
  }

  return pretsTypes
}
