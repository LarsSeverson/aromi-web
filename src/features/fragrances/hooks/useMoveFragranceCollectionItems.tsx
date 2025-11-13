import { useMutation } from '@apollo/client/react'
import { MOVE_FRAGRANCE_COLLECTION_ITEMS_MUTATION } from '../graphql/mutations'
import type { MoveFragranceCollectionItemsInput, MoveFragranceCollectionItemsMutation } from '@/generated/graphql'
import { type Nullable, wrapQuery } from '@/utils/util'
import type { ApolloCache, Reference } from '@apollo/client'
import type { NodeWithEdges } from '@/utils/pagination'

export const useMoveFragranceCollectionItems = () => {
  const [moveItemsInner] = useMutation(MOVE_FRAGRANCE_COLLECTION_ITEMS_MUTATION)

  const handleUpdateCache = (
    cache: ApolloCache,
    data: Nullable<MoveFragranceCollectionItemsMutation>,
    input: MoveFragranceCollectionItemsInput
  ) => {
    const { insertBefore = null } = input
    const updatedItems = data?.moveFragranceCollectionItems

    if (updatedItems == null) return

    const movedIds = updatedItems.map(item => item.id)
    const cachedCollectionId = cache.identify({ __typename: 'FragranceCollection', id: input.collectionId })

    cache.modify({
      id: cachedCollectionId,
      fields: {
        items: (existing = { edges: [] }, { readField }) => {
          const fragments = existing as NodeWithEdges<Reference>

          const remainingEdges = fragments.edges.filter(ref => {
            const id = readField('id', ref.node)
            return id != null && !movedIds.includes(id as string)
          })

          const newEdges = updatedItems.map(item => {
            return {
              __typename: 'FragranceCollectionItemEdge',
              node: item,
              cursor: ''
            }
          })

          const insertIndex = insertBefore == null
            ? -1
            : remainingEdges.findIndex(ref => readField('id', ref.node) === insertBefore)

          if (insertIndex === -1) {
            return {
              ...fragments,
              edges: [...remainingEdges, ...newEdges]
            }
          }

          return {
            ...fragments,
            edges: [
              ...remainingEdges.slice(0, insertIndex),
              ...newEdges,
              ...remainingEdges.slice(insertIndex)
            ]
          }
        }
      }
    })
  }

  const moveItems = (input: MoveFragranceCollectionItemsInput) => {
    return wrapQuery(
      moveItemsInner({
        variables: { input },
        update: (cache, { data }) => { handleUpdateCache(cache, data, input) }
      })
    )
  }

  return {
    moveItems
  }
}
