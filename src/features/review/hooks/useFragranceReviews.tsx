import { flatten, validatePagination } from '@/common/pagination'
import { noRes } from '@/common/util-types'
import { type VotePaginationInput } from '@/generated/graphql'
import { FRAGRANCE_REVIEWS_QUERY } from '../graphql/queries'
import { type ApolloError, NetworkStatus, useQuery } from '@apollo/client'
import { ResultAsync } from 'neverthrow'
import { useMemo } from 'react'

const useFragranceReviews = (
  fragranceId: number,
  input?: VotePaginationInput
) => {
  const {
    data, loading, error, networkStatus,
    refetch, fetchMore
  } = useQuery(FRAGRANCE_REVIEWS_QUERY, {
    variables: { fragranceId, input },
    notifyOnNetworkStatusChange: true
  })

  const loadMore = () => {
    const endCursor = validatePagination(
      data?.fragrance?.reviews.pageInfo,
      networkStatus
    )

    if (endCursor == null) return noRes

    const variables = {
      fragranceId,
      input: { after: endCursor }
    }

    return ResultAsync
      .fromPromise(
        fetchMore({ variables }),
        error => error as ApolloError
      )
      .map(result => result.data.fragrance?.reviews)
  }

  const reviews = useMemo(
    () => flatten(data?.fragrance?.reviews ?? []),
    [data?.fragrance?.reviews])

  return {
    data: reviews,
    loading,
    loadingMore: networkStatus === NetworkStatus.fetchMore,
    error,

    refetch,
    loadMore
  }
}

export default useFragranceReviews
