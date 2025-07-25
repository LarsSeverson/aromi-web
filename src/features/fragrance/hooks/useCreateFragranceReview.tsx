import { type CreateFragranceReviewMutation, type CreateFragranceReviewInput } from '@/generated/graphql'
import { CREATE_FRAGRANCE_REVIEW_MUTATION } from '@/graphql/mutations/FragranceMutations'
import { type ApolloCache, type ApolloError, type FetchResult, gql, makeReference, useMutation } from '@apollo/client'
import { ResultAsync } from 'neverthrow'

export const useCreateFragranceReview = () => {
  const [
    createFragranceReviewInner,
    { data, loading, error }
  ] = useMutation(CREATE_FRAGRANCE_REVIEW_MUTATION)

  const handleUpdateCache = (
    cache: ApolloCache<unknown>,
    result: FetchResult<CreateFragranceReviewMutation>,
    fragranceId: number
  ) => {
    const incoming = result.data?.createFragranceReview
    if (incoming == null) return

    const newReviewId = cache.identify(incoming)
    if (newReviewId == null) return

    cache.writeFragment({
      id: cache.identify(
        {
          __typename: 'Fragrance', id: fragranceId
        }
      ),
      fragment: gql`
        fragment WriteMyReview on Fragrance {
          myReview
        }
      `,
      data: {
        id: fragranceId,
        myReview: makeReference(newReviewId)
      }
    })
  }

  const createFragranceReview = (input: CreateFragranceReviewInput) => {
    return ResultAsync
      .fromPromise(
        createFragranceReviewInner({
          variables: { input },
          update: (cache, result) => {
            handleUpdateCache(cache, result, input.fragranceId)
          }
        }),
        error => error as ApolloError
      )
  }

  return {
    data,
    loading,
    error,

    createFragranceReview
  }
}
