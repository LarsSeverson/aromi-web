import { useMutation } from '@apollo/client/react'
import { REMOVE_FRAGRANCE_FROM_COLLECTIONS_MUTATION } from '../graphql/mutations'
import type { ApolloCache, Reference } from '@apollo/client'
import type { RemoveFragranceFromCollectionsInput, RemoveFragranceFromCollectionsMutation } from '@/generated/graphql'
import { type Nullable, wrapQuery } from '@/utils/util'
import { HAS_FRAGRANCE_FIELD_FRAGMENT } from '../graphql/fragments'
import type { NodeWithEdges } from '@/utils/pagination'

export const useRemoveFragranceFromCollections = () => {
  const [removeFragranceInner] = useMutation(REMOVE_FRAGRANCE_FROM_COLLECTIONS_MUTATION)

  const handleUpdateCache = (
    cache: ApolloCache,
    data: Nullable<RemoveFragranceFromCollectionsMutation>
  ) => {
    const removedItems = data?.removeFragranceFromCollections
    if (removedItems == null) return

    removedItems.forEach(removedItem => {
      const collectionId = removedItem.collection.id
      const fragranceId = removedItem.fragrance.id
      const cachedCollectionId = cache.identify({ __typename: 'FragranceCollection', id: collectionId })

      cache.writeFragment({
        id: cachedCollectionId,
        fragment: HAS_FRAGRANCE_FIELD_FRAGMENT,
        fragmentName: 'HasFragranceField',
        data: { hasFragrance: false, id: collectionId },
        variables: { fragranceId },
        broadcast: false
      })

      cache.modify({
        id: cachedCollectionId,
        fields: {
          items: (existing = { edges: [] }, { readField }) => {
            const fragments = existing as NodeWithEdges<Reference>
            const newEdges = fragments.edges.filter(ref => readField('id', ref.node) !== removedItem.id)

            return {
              ...fragments,
              edges: newEdges
            }
          },

          previewItems: (existing = [], { readField }) => {
            const fragments = existing as Array<typeof removedItem>
            return fragments.filter(ref => readField('id', ref) !== removedItem.id)
          },

          info: (existing = { itemCount: 0 }) => {
            const typed = existing as { itemCount: number }

            return {
              ...typed,
              itemCount: Math.max(0, typed.itemCount - 1)
            }
          }
        }
      })
    })
  }

  const removeFragrance = (input: RemoveFragranceFromCollectionsInput) => {
    return wrapQuery(
      removeFragranceInner({
        variables: { input, fragranceId: input.fragranceId },
        update: (cache, { data }) => { handleUpdateCache(cache, data) }
      })
    )
  }

  return { removeFragrance }
}