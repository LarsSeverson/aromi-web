import { useMyContext } from '@/features/users'
import { useMutation } from '@apollo/client/react'
import { CREATE_FRAGRANCE_COLLECTION_ITEM_MUTATION } from '../graphql/mutations'
import type { AllFragranceCollectionItemFragment, CreateFragranceCollectionItemInput } from '@/generated/graphql'
import { wrapQuery } from '@/utils/util'
import { ALL_FRAGRANCE_COLLECTION_ITEM_FRAGMENT, HAS_FRAGRANCE_FIELD_FRAGMENT } from '../graphql/fragments'

export const useCreateFragranceCollectionItem = () => {
  const { me } = useMyContext()

  const [createItemInner] = useMutation(CREATE_FRAGRANCE_COLLECTION_ITEM_MUTATION)

  const createItem = (input: CreateFragranceCollectionItemInput) => {
    return wrapQuery(
      createItemInner({
        variables: { input },
        update (cache, { data }) {
          const newItem = data?.createFragranceCollectionItem
          const collectionId = input.collectionId

          if (me == null) return
          if (newItem == null) return

          const newItemRef = cache.writeFragment({
            data: newItem,
            broadcast: false,
            fragment: ALL_FRAGRANCE_COLLECTION_ITEM_FRAGMENT,
            fragmentName: 'AllFragranceCollectionItem'
          })

          const cacheId = cache.identify({
            __typename: 'FragranceCollection',
            id: collectionId
          })

          cache.writeFragment({
            id: cacheId,
            fragment: HAS_FRAGRANCE_FIELD_FRAGMENT,
            data: { id: collectionId, hasFragrance: true },
            variables: { fragranceId: input.fragranceId }
          })

          cache.modify({
            id: cacheId,
            fields: {
              items: (existing = [], { readField }) => {
                const fragments = existing as AllFragranceCollectionItemFragment[]

                const alreadyExists = fragments.some(ref => readField('id', ref) === newItem.id)
                if (alreadyExists) return fragments

                return [newItemRef, ...fragments]
              },
              previewItems: (existing = [], { readField }) => {
                const fragments = existing as AllFragranceCollectionItemFragment[]

                const alreadyExists = fragments.some(ref => readField('id', ref) === newItem.id)
                if (alreadyExists) return fragments

                return [newItemRef, ...fragments].slice(0, 4)
              },
              hasFragrance: () => true
            }
          })
        }
      })
    ).map(data => data.createFragranceCollectionItem)
  }

  return {
    createItem
  }
}
