import { flatten } from '@/common/pagination'
import { type VotePaginationInput } from '@/generated/graphql'
import { FRAGRANCE_REVIEWS_QUERY } from '@/graphql/queries/FragranceQueries'
import { NetworkStatus, useQuery } from '@apollo/client'
import { useCallback, useMemo } from 'react'

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

  const loadMore = useCallback(() => {
    if (data?.fragrance == null) return
    if (networkStatus === NetworkStatus.fetchMore) return

    const pageInfo = data.fragrance.reviews.pageInfo
    const { hasNextPage, endCursor } = pageInfo

    if (!hasNextPage || (endCursor == null)) return

    const variables = {
      fragranceId,
      input: { after: endCursor }
    }

    void fetchMore({ variables })
  }, [fragranceId, data, networkStatus, fetchMore])

  const reviews = useMemo(() => flatten(data?.fragrance?.reviews ?? []), [data?.fragrance?.reviews])

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
