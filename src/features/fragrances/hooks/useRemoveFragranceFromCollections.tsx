import { useMutation } from '@apollo/client/react'
import { REMOVE_FRAGRANCE_FROM_COLLECTIONS_MUTATION } from '../graphql/mutations'
import type { ApolloCache } from '@apollo/client'
import type { RemoveFragranceFromCollectionsInput, RemoveFragranceFromCollectionsMutation } from '@/generated/graphql'
import { wrapQuery } from '@/utils/util'
import { HAS_FRAGRANCE_FIELD_FRAGMENT } from '../graphql/fragments'

export const useRemoveFragranceFromCollections = () => {
  const [removeFragranceInner] = useMutation(REMOVE_FRAGRANCE_FROM_COLLECTIONS_MUTATION)

  const handleUpdateCache = (
    cache: ApolloCache,
    data: RemoveFragranceFromCollectionsMutation | null | undefined
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
          items: (existing = [], { readField }) => {
            const fragments = existing as Array<typeof removedItem>
            return fragments.filter(ref => readField('id', ref) !== removedItem.id)
          },
          previewItems: (existing = [], { readField }) => {
            const fragments = existing as Array<typeof removedItem>
            return fragments.filter(ref => readField('id', ref) !== removedItem.id)
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