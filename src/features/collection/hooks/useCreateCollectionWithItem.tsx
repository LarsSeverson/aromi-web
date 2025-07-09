import { errAsync, okAsync, ResultAsync } from 'neverthrow'
import { useCreateCollection } from './useCreateCollection'
import { useCreateCollectionItem } from './useCreateCollectionItem'
import { ApolloError } from '@apollo/client'

export interface CreateCollectionWithItemVariables {
  name: string
  fragranceId: number
}

export const useCreateCollectionWithItem = () => {
  const { createFragranceCollection } = useCreateCollection()
  const { createCollectionItem: createFragranceCollectionItem } = useCreateCollectionItem()

  const createFragranceCollectionWithItem = (variables: CreateCollectionWithItemVariables) => {
    return ResultAsync
      .fromPromise(
        createFragranceCollection(
          {
            variables: {
              input: {
                name: variables.name
              }
            }
          }
        ),
        error => error as ApolloError
      )
      .andThen(({ data }) => {
        if (data == null) {
          return errAsync(
            new ApolloError(
              {
                errorMessage: 'Something went wrong while creating your collection. Please try again.'
              }
            )
          )
        }

        return okAsync(data)
      })
      .andThen((data) => ResultAsync
        .fromPromise(
          createFragranceCollectionItem(
            {
              variables: {
                input: {
                  collectionId: data.createFragranceCollection.id,
                  fragranceId: variables.fragranceId
                }
              }
            }
          ),
          error => error as ApolloError
        )
      )
  }

  return {
    createFragranceCollectionWithItem
  }
}
