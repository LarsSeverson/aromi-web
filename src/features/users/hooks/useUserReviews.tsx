import type { FragranceReviewPaginationInput } from '@/generated/graphql'
import { useQuery } from '@apollo/client/react'
import { USER_REVIEWS_QUERY } from '../graphql/queries'
import { flattenConnections, validatePagination } from '@/utils/pagination'
import { noRes } from '@/utils/error'
import { hasNextPage, isStatusLoadingMore, wrapQuery } from '@/utils/util'
import { useMemo } from 'react'

export const useUserReviews = (userId: string, input?: FragranceReviewPaginationInput) => {
  const {
    data, loading: isLoading, error, networkStatus,
    fetchMore
  } = useQuery(USER_REVIEWS_QUERY, { variables: { userId, input } })

  const loadMore = () => {
    const endCursor = validatePagination(data?.user.reviews.pageInfo, networkStatus)

    if (endCursor == null) return noRes

    const variables = {
      userId,
      input: {
        ...(input ?? {}),
        after: endCursor
      }
    }

    return wrapQuery(fetchMore({ variables })).map(data => flattenConnections(data.user.reviews))
  }

  const reviews = useMemo(
    () => flattenConnections(data?.user.reviews ?? []),
    [data?.user.reviews]
  )

  const isLoadingMore = isStatusLoadingMore(networkStatus)
  const hasMore = hasNextPage(data?.user.reviews.pageInfo)

  return {
    reviews,

    isLoading,
    isLoadingMore,
    hasMore,

    error,

    loadMore
  }
}