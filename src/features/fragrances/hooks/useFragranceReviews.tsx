import type { FragranceReviewPaginationInput } from '@/generated/graphql'
import { FRAGRANCE_REVIEWS_QUERY } from '../graphql/queries'
import { useQuery } from '@apollo/client/react'
import { useMemo } from 'react'
import { flattenConnections, validatePagination } from '@/utils/pagination'
import { noRes } from '@/utils/error'
import { hasNextPage, isStatusLoadingMore, wrapQuery } from '@/utils/util'

export const useFragranceReviews = (fragranceId: string, input?: FragranceReviewPaginationInput) => {
  const {
    data, loading: isLoading, error, networkStatus,
    fetchMore
  } = useQuery(FRAGRANCE_REVIEWS_QUERY, { variables: { fragranceId, input } })

  const loadMore = () => {
    const endCursor = validatePagination(data?.fragrance.reviews.pageInfo, networkStatus)

    if (endCursor == null) return noRes

    const variables = {
      fragranceId,
      input: {
        ...(input ?? {}),
        after: endCursor
      }
    }

    return wrapQuery(fetchMore({ variables })).map(data => flattenConnections(data.fragrance.reviews))
  }

  const reviews = useMemo(
    () => flattenConnections(data?.fragrance.reviews ?? []),
    [data?.fragrance.reviews]
  )

  const isLoadingMore = isStatusLoadingMore(networkStatus)
  const hasMore = hasNextPage(data?.fragrance.reviews.pageInfo)

  return {
    reviews,

    isLoading,
    isLoadingMore,
    hasMore,

    error,

    loadMore
  }
}