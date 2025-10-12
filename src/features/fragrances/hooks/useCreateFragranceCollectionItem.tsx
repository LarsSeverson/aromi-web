import { useMyContext } from '@/features/users'
import { useMutation } from '@apollo/client/react'
import { CREATE_FRAGRANCE_COLLECTION_ITEM_MUTATION } from '../graphql/mutations'
import type { AllFragranceCollectionItemFragment, CreateFragranceCollectionItemInput } from '@/generated/graphql'
import { wrapQuery } from '@/utils/util'
import { ALL_FRAGRANCE_COLLECTION_ITEM_FRAGMENT } from '../graphql/fragments'

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

          cache.modify({
            id: cache.identify({
              __typename: 'FragranceCollection',
              id: collectionId
            }),
            fields: {
              items: (existing = { edges: [] }, { readField }) => {
                const typedRefs = existing as AllFragranceCollectionItemFragment[]

                const alreadyExists = typedRefs.some(ref => readField('id', ref) === newItem.id)
                if (alreadyExists) return typedRefs

                const newRef = cache.writeFragment({
                  data: newItem,
                  fragment: ALL_FRAGRANCE_COLLECTION_ITEM_FRAGMENT,
                  fragmentName: 'AllFragranceCollectionItem'
                })

                return [newRef, ...typedRefs]
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
