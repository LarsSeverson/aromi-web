import { flatten } from '@/common/pagination'
import { type PaginationInput } from '@/generated/graphql'
import { USER_REVIEWS_QUERY } from '@/graphql/queries/UserQueries'
import { NetworkStatus, useQuery } from '@apollo/client'
import { useCallback, useMemo } from 'react'

const useUserReviews = (
  userId: number,
  input?: PaginationInput
) => {
  const {
    data, loading, error, networkStatus,
    fetchMore, refetch
  } = useQuery(USER_REVIEWS_QUERY, {
    variables: { userId, input },
    notifyOnNetworkStatusChange: true
  })

  const loadMore = useCallback(() => {
    if (data?.user == null) return
    if (networkStatus === NetworkStatus.fetchMore) return

    const { hasNextPage, endCursor } = data.user.reviews.pageInfo

    if (!hasNextPage || (endCursor == null)) return

    const variables = {
      userId,
      input: {
        after: endCursor
      }
    }

    void fetchMore({ variables })
  }, [userId, data, networkStatus, fetchMore])

  const reviews = useMemo(() => flatten(data?.user?.reviews ?? []), [data?.user?.reviews])

  return {
    data: reviews,
    loading,
    loadingMore: networkStatus === NetworkStatus.fetchMore,
    error,

    loadMore,
    refetch
  }
}

export default useUserReviews
