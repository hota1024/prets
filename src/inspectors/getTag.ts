import { JSDocableNode } from 'ts-morph'

/**
 * returns js doc tag of the given node by tag name.
 * @param name tag name.
 */
export const getTagByName = (
  name: string,
  node: JSDocableNode
): string | null => {
  const docs = node.getJsDocs()

  for (const doc of docs) {
    for (const tag of doc.getTags()) {
      if (tag.getTagName() === name) {
        return tag.getCommentText() ?? ''
      }
    }
  }

  return null
}

/**
 * returns js doc tags of the given node by tag name.
 *
 * @param name tag name.
 * @param node node.
 */
export const getTagsByName = (name: string, node: JSDocableNode): string[] => {
  const docs = node.getJsDocs()
  const tags: string[] = []

  for (const doc of docs) {
    for (const tag of doc.getTags()) {
      if (tag.getTagName() === name) {
        tags.push(tag.getCommentText() ?? '')
      }
    }
  }

  return tags
}
