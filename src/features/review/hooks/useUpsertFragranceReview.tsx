import { type UpsertFragranceReviewInput, type UpsertFragranceReviewMutation } from '@/generated/graphql'
import { UPSERT_FRAGRANCE_REVIEW_MUTATION } from '../graphql/mutations'
import { type ApolloCache, type ApolloError, type FetchResult, useMutation } from '@apollo/client'
import { ResultAsync } from 'neverthrow'
import { MY_REVIEW_CACHE_FRAGMENT } from '../graphql/fragments'

export const useUpsertFragranceReview = () => {
  const [
    upsertFragranceReviewInner,
    { data, loading, error }
  ] = useMutation(UPSERT_FRAGRANCE_REVIEW_MUTATION)

  const handleUpdateCache = (
    cache: ApolloCache<unknown>,
    result: FetchResult<UpsertFragranceReviewMutation>,
    fragranceId: number
  ) => {
    const incoming = result.data?.upsertFragranceReview
    if (incoming == null) return

    const newReviewId = cache.identify(incoming)
    if (newReviewId == null) return

    cache.writeFragment({
      id: cache.identify(
        {
          __typename: 'Fragrance', id: fragranceId
        }
      ),
      fragment: MY_REVIEW_CACHE_FRAGMENT,
      data: {
        id: fragranceId,
        myReview: {
          __typename: 'FragranceReview',
          id: incoming.id
        }
      }
    })
  }

  const upsertFragranceReview = (input: UpsertFragranceReviewInput) => {
    return ResultAsync
      .fromPromise(
        upsertFragranceReviewInner({
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

    upsertFragranceReview
  }
}
