import { useMutation } from '@apollo/client/react'
import { CREATE_FRAGRANCE_COLLECTION_ITEM_MUTATION } from '../graphql/mutations'
import type { AllFragranceCollectionItemFragment, CreateFragranceCollectionItemInput } from '@/generated/graphql'
import { wrapQuery } from '@/utils/util'
import { ALL_FRAGRANCE_COLLECTION_ITEM_FRAGMENT, HAS_FRAGRANCE_FIELD_FRAGMENT } from '../graphql/fragments'
import type { NodeWithEdges } from '@/utils/pagination'
import type { Reference } from '@apollo/client'

export const useCreateFragranceCollectionItem = () => {
  const [createItemInner] = useMutation(CREATE_FRAGRANCE_COLLECTION_ITEM_MUTATION)

  const createItem = (input: CreateFragranceCollectionItemInput) => {
    return wrapQuery(
      createItemInner({
        variables: { input, fragranceId: input.fragranceId },
        update (cache, { data }) {
          const newItem = data?.createFragranceCollectionItem
          if (newItem == null) return

          const collectionId = input.collectionId
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
            fragment: ALL_FRAGRANCE_COLLECTION_ITEM_FRAGMENT,
            fragmentName: 'AllFragranceCollectionItem',
            data: newItem,
            broadcast: false
          })

          cache.modify({
            id: cachedCollectionId,
            fields: {
              items: (existing = { edges: [] }) => {
                const fragments = existing as NodeWithEdges<Reference>

                const newEdge = {
                  __typename: 'FragranceCollectionItemEdge',
                  node: newItemRef,
                  cursor: ''
                }

                const oldEdges = fragments.edges

                return {
                  ...fragments,
                  edges: [newEdge, ...oldEdges]
                }
              },
              previewItems: (existing = [], { readField }) => {
                const fragments = existing as AllFragranceCollectionItemFragment[]

                const alreadyExists = fragments.some(ref => readField('id', ref) === newItem.id)
                if (alreadyExists) return fragments

                return [newItemRef, ...fragments].slice(0, 4)
              }
            }
          })
        }
      })
    )
  }

  return {
    createItem
  }
}
