import React from 'react'
import { usePostComments } from './usePostComments'
import type { NestedPostComment } from '../types'

export const flattenCommentTree = <T extends { children?: T[] }>(root: T[]) => {
  const items: T[] = []

  const walk = (nodes: T[]) => {
    nodes.forEach(node => {
      items.push(node)

      const children = node.children ?? []

      if (children.length > 0) {
        walk(children)
      }
    })
  }

  walk(root)

  return items
}

export const useVirtualComments = (postId: string) => {
  const {
    comments: rootComments
  } = usePostComments(postId)

  const virtualItems = React.useMemo(
    () => flattenCommentTree<NestedPostComment>(rootComments),
    [rootComments]
  )

  return {
    virtualItems
  }
}