import { ResultAsync } from 'neverthrow'
import { useDeleteCollectionItem } from './useDeleteCollectionItem'
import { type ApolloError } from '@apollo/client'

export const useDeleteFromCollections = () => {
  const { deleteCollectionItem } = useDeleteCollectionItem()

  const deleteFromCollections = (
    collectionIds: number[],
    fragranceId: number
  ) => {
    return ResultAsync
      .combine(
        collectionIds
          .map(collectionId => ResultAsync
            .fromPromise(
              deleteCollectionItem({
                variables: {
                  input:
                    {
                      collectionId,
                      fragranceId
                    }
                }
              }),
              error => error as ApolloError
            )
          )
      )
  }

  return {
    deleteFromCollections
  }
}
