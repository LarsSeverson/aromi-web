import { flatten } from '@/common/pagination'
import { type PaginationInput } from '@/generated/graphql'
import { USER_LIKES_QUERY } from '@/graphql/queries/UserQueries'
import { NetworkStatus, useQuery } from '@apollo/client'
import { useCallback, useMemo } from 'react'

const useUserLikes = (
  userId: number,
  input?: PaginationInput
) => {
  const {
    data, loading, error, networkStatus,
    fetchMore, refetch
  } = useQuery(USER_LIKES_QUERY, {
    variables: { userId, input },
    notifyOnNetworkStatusChange: true
  })

  const loadMore = useCallback(() => {
    if (data?.user == null) return
    if (networkStatus === NetworkStatus.fetchMore) return

    const { hasNextPage, endCursor } = data.user.likes.pageInfo

    if (!hasNextPage || (endCursor == null)) return

    const variables = {
      userId,
      input: {
        after: endCursor
      }
    }

    void fetchMore({ variables })
  }, [userId, data?.user, networkStatus, fetchMore])

  const likes = useMemo(() => flatten(data?.user?.likes ?? []), [data?.user?.likes])

  return {
    data: likes,
    error,
    loading,
    loadingMore: networkStatus === NetworkStatus.fetchMore,

    loadMore,
    refetch
  }
}

export default useUserLikes
