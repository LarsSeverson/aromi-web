import { useMyContext } from '@/features/users'
import { useMutation } from '@apollo/client/react'
import { DELETE_FRAGRANCE_COLLECTION_ITEM_MUTATION } from '../graphql/mutations'
import type { AllFragranceCollectionItemFragment, DeleteFragranceCollectionItemInput } from '@/generated/graphql'
import { wrapQuery } from '@/utils/util'

export const useDeleteFragranceCollectionItem = () => {
  const { me } = useMyContext()

  const [deleteItemInner] = useMutation(DELETE_FRAGRANCE_COLLECTION_ITEM_MUTATION)

  const deleteItem = (input: DeleteFragranceCollectionItemInput) => {
    return wrapQuery(
      deleteItemInner({
        variables: { input, fragranceId: input.fragranceId },
        update (cache, { data }) {
          const deletedItem = data?.deleteFragranceCollectionItem

          if (deletedItem == null) return
          if (me == null) return

          const deletedItemId = deletedItem.id
          const collectionId = input.collectionId

          cache.modify({
            id: cache.identify({ __typename: 'FragranceCollection', id: collectionId }),
            fields: {
              items: (existing = { edges: [] }, { readField }) => {
                const typedRefs = existing as AllFragranceCollectionItemFragment[]
                return typedRefs.filter(ref => readField('id', ref) !== deletedItemId)
              },
              hasFragrance: () => deletedItem.collection.hasFragrance
            }
          })
        }
      })
    ).map(data => data.deleteFragranceCollectionItem)
  }

  return {
    deleteItem
  }
}
