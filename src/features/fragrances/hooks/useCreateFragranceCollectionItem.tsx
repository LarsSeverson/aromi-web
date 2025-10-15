import { useMyContext } from '@/features/users'
import { useMutation } from '@apollo/client/react'
import { CREATE_FRAGRANCE_COLLECTION_ITEM_MUTATION } from '../graphql/mutations'
import type { AllFragranceCollectionItemFragment, CreateFragranceCollectionItemInput } from '@/generated/graphql'
import { wrapQuery } from '@/utils/util'
import { ALL_FRAGRANCE_COLLECTION_FRAGMENT, ALL_FRAGRANCE_COLLECTION_ITEM_FRAGMENT } from '../graphql/fragments'

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

          const cacheId = cache.identify({
            __typename: 'FragranceCollection',
            id: collectionId
          })

          console.log('Before:', cache.readFragment({
            id: cacheId,
            fragment: ALL_FRAGRANCE_COLLECTION_FRAGMENT,
            fragmentName: 'AllFragranceCollection'
          }))

          cache.modify({
            id: cache.identify({
              __typename: 'FragranceCollection',
              id: collectionId
            }),
            fields: {
              // items: (existing = [], { readField }) => {
              //   const fragments = existing as AllFragranceCollectionItemFragment[]

              //   const alreadyExists = fragments.some(ref => readField('id', ref) === newItem.id)
              //   if (alreadyExists) return fragments

              //   const newFragment = cache.writeFragment({
              //     data: newItem,
              //     fragment: ALL_FRAGRANCE_COLLECTION_ITEM_FRAGMENT,
              //     fragmentName: 'AllFragranceCollectionItem'
              //   })

              //   return [newFragment, ...fragments]
              // },
              previewItems: (existing = [], { readField }) => {
                const fragments = existing as AllFragranceCollectionItemFragment[]

                const alreadyExists = fragments.some(ref => readField('id', ref) === newItem.id)
                if (alreadyExists) return fragments

                const newFragment = cache.writeFragment({
                  data: newItem,
                  fragment: ALL_FRAGRANCE_COLLECTION_ITEM_FRAGMENT,
                  fragmentName: 'AllFragranceCollectionItem'
                })

                return [newFragment, ...fragments]
              },
              hasFragrance: () => true
            }
          })

          console.log('After:', cache.readFragment({
            id: cacheId,
            fragment: ALL_FRAGRANCE_COLLECTION_FRAGMENT,
            fragmentName: 'AllFragranceCollection'
          }))
        }
      })
    ).map(data => data.createFragranceCollectionItem)
  }

  return {
    createItem
  }
}
