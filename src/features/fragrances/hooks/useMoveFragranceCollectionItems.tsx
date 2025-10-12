import { useMutation } from '@apollo/client/react'
import { MOVE_FRAGRANCE_COLLECTION_ITEMS_MUTATION } from '../graphql/mutations'
import type { MoveFragranceCollectionItemsInput } from '@/generated/graphql'
import { wrapQuery } from '@/utils/util'

export const useMoveFragranceCollectionItems = () => {
  const [moveItemsInner] = useMutation(MOVE_FRAGRANCE_COLLECTION_ITEMS_MUTATION)

  const moveItems = (input: MoveFragranceCollectionItemsInput) => {
    return wrapQuery(
      moveItemsInner({
        variables: { input },
        update (cache, { data }) {
          const movedItems = data?.moveFragranceCollectionItems
          const collectionId = input.collectionId

          if (movedItems == null) return

          cache.modify({
            id: cache.identify({ __typename: 'FragranceCollection', id: collectionId }),
            fields: {
              items: () => movedItems
            }
          })
        }
      })
    )
  }

  return {
    moveItems
  }
}
