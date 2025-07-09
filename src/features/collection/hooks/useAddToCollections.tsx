import { ResultAsync } from 'neverthrow'
import { useCreateCollectionItem } from './useCreateCollectionItem'
import { type ApolloError } from '@apollo/client'

export const useAddToCollections = () => {
  const { createCollectionItem } = useCreateCollectionItem()

  const addToCollections = (
    collectionIds: number[],
    fragranceId: number
  ) => {
    return ResultAsync
      .combine(
        collectionIds
          .map(collectionId => ResultAsync
            .fromPromise(
              createCollectionItem({
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
    addToCollections
  }
}
