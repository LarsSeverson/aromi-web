import { useMutation } from '@apollo/client/react'
import { ADD_FRAGRANCE_TO_COLLECTIONS_MUTATION } from '../graphql/mutations'
import type { AddFragranceToCollectionsInput, AddFragranceToCollectionsMutation } from '@/generated/graphql'
import { wrapQuery } from '@/utils/util'
import type { ApolloCache } from '@apollo/client'
import { FRAGRANCE_COLLECTION_ITEM_WITH_COLLECTION_FRAGMENT, HAS_FRAGRANCE_FIELD_FRAGMENT } from '../graphql/fragments'

export const useAddFragranceToCollections = () => {
  const [addFragranceInner] = useMutation(ADD_FRAGRANCE_TO_COLLECTIONS_MUTATION)

  const handleUpdateCache = (
    cache: ApolloCache,
    data: AddFragranceToCollectionsMutation | null | undefined
  ) => {
    const newItems = data?.addFragranceToCollections
    if (newItems == null) return

    newItems.forEach(newItem => {
      const collectionId = newItem.collection.id
      const fragranceId = newItem.fragrance.id
      const cachedCollectionId = cache.identify({ __typename: 'FragranceCollection', id: collectionId })

      cache.writeFragment({
        id: cachedCollectionId,
        fragment: HAS_FRAGRANCE_FIELD_FRAGMENT,
        fragmentName: 'HasFragranceField',
        data: { hasFragrance: true, id: collectionId },
        variables: { fragranceId },
        broadcast: false
      })

      const newItemRef = cache.writeFragment({
        fragment: FRAGRANCE_COLLECTION_ITEM_WITH_COLLECTION_FRAGMENT,
        fragmentName: 'FragranceCollectionItemWithCollection',
        data: newItem,
        broadcast: false
      })

      cache.modify({
        id: cachedCollectionId,
        fields: {
          items: (existing = [], { readField }) => {
            const fragments = existing as Array<typeof newItem>

            const alreadyExists = fragments.some(ref => readField('id', ref) === newItem.id)
            if (alreadyExists) return fragments

            return [newItemRef, ...fragments]
          },
          previewItems: (existing = [], { readField }) => {
            const fragments = existing as Array<typeof newItem>

            const alreadyExists = fragments.some(ref => readField('id', ref) === newItem.id)
            if (alreadyExists) return fragments

            return [newItemRef, ...fragments].slice(0, 4)
          }
        }
      })
    })
  }

  const addFragrance = (input: AddFragranceToCollectionsInput) => {
    return wrapQuery(
      addFragranceInner({
        variables: { input, fragranceId: input.fragranceId },
        update: (cache, { data }) => { handleUpdateCache(cache, data) }
      })
    )
  }

  return { addFragrance }
}