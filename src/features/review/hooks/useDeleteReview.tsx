import { type ApolloCache, type ApolloError, type FetchResult, useMutation } from '@apollo/client'
import { DELETE_FRAGRANCE_REVIEW_MUTATION } from '../graphql/mutations'
import { type DeleteFragranceReviewMutation, type DeleteFragranceReviewInput } from '@/generated/graphql'
import { ResultAsync } from 'neverthrow'
import { MY_REVIEW_CACHE_FRAGMENT } from '../graphql/fragments'

export const useDeleteReview = () => {
  const [
    deleteReviewInner,
    { data, loading, error }
  ] = useMutation(DELETE_FRAGRANCE_REVIEW_MUTATION)

  const handleUpdateCache = (
    cache: ApolloCache<unknown>,
    result: FetchResult<DeleteFragranceReviewMutation>
  ) => {
    const deleted = result.data?.deleteFragranceReview
    const fragranceId = deleted?.fragrance.id

    if (fragranceId == null) return

    cache.writeFragment({
      id: cache.identify(
        {
          __typename: 'Fragrance',
          id: fragranceId
        }
      ),
      fragment: MY_REVIEW_CACHE_FRAGMENT,
      data: {
        id: fragranceId,
        myReview: null
      }
    })
  }

  const deleteReview = (input: DeleteFragranceReviewInput) => {
    return ResultAsync
      .fromPromise(
        deleteReviewInner({
          variables: { input },
          update: handleUpdateCache
        }),
        error => error as ApolloError
      )
  }

  return {
    data,
    loading,
    error,

    deleteReview
  }
}
