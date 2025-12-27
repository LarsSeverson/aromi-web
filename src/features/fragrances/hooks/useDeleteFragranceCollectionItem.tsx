import { useMutation } from '@apollo/client/react'
import { DELETE_FRAGRANCE_COLLECTION_ITEM_MUTATION } from '../graphql/mutations'
import type { AllFragranceCollectionItemFragment, DeleteFragranceCollectionItemInput } from '@/generated/graphql'
import { wrapQuery } from '@/utils/util'
import type { Reference } from '@apollo/client'
import type { NodeWithEdges } from '@/utils/pagination'
import { HAS_FRAGRANCE_FIELD_FRAGMENT } from '../graphql/fragments'

export const useDeleteFragranceCollectionItem = () => {
  const [deleteItemInner] = useMutation(DELETE_FRAGRANCE_COLLECTION_ITEM_MUTATION)

  const deleteItem = (input: DeleteFragranceCollectionItemInput) => {
    return wrapQuery(
      deleteItemInner({
        variables: { input },
        update (cache, { data }) {
          const deletedItem = data?.deleteFragranceCollectionItem
          if (deletedItem == null) return

          const collectionId = input.collectionId
          const cachedCollectionId = cache.identify({ __typename: 'FragranceCollection', id: collectionId })

          cache.writeFragment({
            id: cachedCollectionId,
            fragment: HAS_FRAGRANCE_FIELD_FRAGMENT,
            fragmentName: 'HasFragranceField',
            data: { hasFragrance: false, id: collectionId },
            variables: { fragranceId: deletedItem.fragrance.id },
            broadcast: false
          })

          cache.modify({
            id: cachedCollectionId,
            fields: {
              items: (existing = { edges: [] }, { readField }) => {
                const fragments = existing as NodeWithEdges<Reference>
                const newEdges = fragments.edges.filter(ref => readField('id', ref.node) !== deletedItem.id)

                return {
                  ...fragments,
                  edges: newEdges
                }
              },

              previewItems: (existing = [], { readField }) => {
                const fragments = existing as AllFragranceCollectionItemFragment[]
                return fragments.filter(ref => readField('id', ref) !== deletedItem.id)
              },

              info: (existing = {}) => {
                const info = existing as { itemCount: number }
                return {
                  ...info,
                  itemCount: info.itemCount - 1
                }
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
