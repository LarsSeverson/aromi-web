import { errAsync, okAsync, ResultAsync } from 'neverthrow'
import { useCreateFragranceCollection } from './useCreateFragranceCollection'
import { useCreateFragranceCollectionItem } from './useCreateFragranceCollectionItem'
import { ApolloError } from '@apollo/client'

export interface CreateFragranceCollectionWithItemVariables {
  name: string
  fragranceId: number
}

export const useCreateFragranceCollectionWithItem = () => {
  const { createFragranceCollection } = useCreateFragranceCollection()
  const { createFragranceCollectionItem } = useCreateFragranceCollectionItem()

  const createFragranceCollectionWithItem = (variables: CreateFragranceCollectionWithItemVariables) => {
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
