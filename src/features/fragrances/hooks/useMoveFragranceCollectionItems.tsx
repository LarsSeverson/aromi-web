import { useMutation } from '@apollo/client/react'
import { MOVE_FRAGRANCE_COLLECTION_ITEMS_MUTATION } from '../graphql/mutations'
import type { MoveFragranceCollectionItemsInput, MoveFragranceCollectionItemsMutation } from '@/generated/graphql'
import { type Nullable, wrapQuery } from '@/utils/util'
import type { ApolloCache, Reference } from '@apollo/client'
import type { NodeWithEdges } from '@/utils/pagination'
import { ALL_FRAGRANCE_COLLECTION_ITEM_FRAGMENT } from '../graphql/fragments'

export const useMoveFragranceCollectionItems = () => {
  const [moveItemsInner] = useMutation(MOVE_FRAGRANCE_COLLECTION_ITEMS_MUTATION)

  const handleUpdateCache = (
    cache: ApolloCache,
    data: Nullable<MoveFragranceCollectionItemsMutation>,
    input: MoveFragranceCollectionItemsInput
  ) => {
    const { insertBefore } = input
    const updatedItems = data?.moveFragranceCollectionItems

    if (updatedItems == null) return

    const movedIds = new Set(updatedItems.map(item => item.id))
    const updatedItemsRefs = updatedItems.map(item =>
      cache.writeFragment({
        fragment: ALL_FRAGRANCE_COLLECTION_ITEM_FRAGMENT,
        fragmentName: 'AllFragranceCollectionItem',
        data: item,
        broadcast: false
      })
    )

    const cachedCollectionId = cache.identify({ __typename: 'FragranceCollection', id: input.collectionId })

    cache.modify({
      id: cachedCollectionId,
      fields: {
        items: (existing = { edges: [] }, { readField }) => {
          const fragments = existing as NodeWithEdges<Reference>

          const base = fragments.edges.filter(ref => !movedIds.has(readField('id', ref.node) ?? ''))

          const foundIndex = insertBefore == null
            ? -1
            : base.findIndex(ref => readField('id', ref.node) === insertBefore)

          const insertIndex = foundIndex === -1 ? base.length : foundIndex

          const newEdges = [
            ...base.slice(0, insertIndex),
            ...updatedItemsRefs.map(item => ({
              __typename: 'FragranceCollectionItemEdge',
              node: item,
              cursor: ''
            })),
            ...base.slice(insertIndex)
          ]

          return {
            ...fragments,
            edges: newEdges
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
