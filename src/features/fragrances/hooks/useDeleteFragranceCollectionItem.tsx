import { useMutation } from '@apollo/client/react'
import { DELETE_FRAGRANCE_COLLECTION_ITEM_MUTATION } from '../graphql/mutations'
import type { AllFragranceCollectionItemFragment, DeleteFragranceCollectionItemInput } from '@/generated/graphql'
import { wrapQuery } from '@/utils/util'
import { HAS_FRAGRANCE_FIELD_FRAGMENT } from '../graphql/fragments'

export const useDeleteFragranceCollectionItem = () => {
  const [deleteItemInner] = useMutation(DELETE_FRAGRANCE_COLLECTION_ITEM_MUTATION)

  const deleteItem = (input: DeleteFragranceCollectionItemInput) => {
    return wrapQuery(
      deleteItemInner({
        variables: { input, fragranceId: input.fragranceId },
        update (cache, { data }) {
          const deletedItem = data?.deleteFragranceCollectionItem
          if (deletedItem == null) return

          const collectionId = input.collectionId
          const fragranceId = deletedItem.fragrance.id
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
                const typedRefs = existing as AllFragranceCollectionItemFragment[]
                return typedRefs.filter(ref => readField('id', ref) !== deletedItem.id)
              },
              previewItems: (existing = { edges: [] }, { readField }) => {
                const typedRefs = existing as AllFragranceCollectionItemFragment[]
                return typedRefs.filter(ref => readField('id', ref) !== deletedItem.id)
              }
            }
          })
        }
      })
    )
  }

  return {
    deleteItem
  }
}
