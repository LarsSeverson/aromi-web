import type { UserFollowPaginationInput } from '@/generated/graphql'
import { useQuery } from '@apollo/client/react'
import { USER_FOLLOWING_QUERY } from '../graphql/queries'
import { flattenConnections, validatePagination } from '@/utils/pagination'
import { noRes } from '@/utils/error'
import { hasNextPage, isStatusLoadingMore, wrapQuery } from '@/utils/util'
import { useMemo } from 'react'

export const useUserFollowing = (
  userId: string,
  input?: UserFollowPaginationInput
) => {
  const {
    data, loading: isLoading, error, networkStatus,
    fetchMore
  } = useQuery(USER_FOLLOWING_QUERY, { variables: { userId, input } })

  const loadMore = () => {
    const endCursor = validatePagination(data?.user.following.pageInfo, networkStatus)

    if (endCursor == null) return noRes

    const variables = {
      userId,
      input: {
        ...(input ?? {}),
        after: endCursor
      }
    }

    return wrapQuery(fetchMore({ variables })).map(data => flattenConnections(data.user.following))
  }

  const following = useMemo(
    () => flattenConnections(data?.user.following ?? []),
    [data?.user.following]
  )

  const isLoadingMore = isStatusLoadingMore(networkStatus)
  const hasMore = hasNextPage(data?.user.following.pageInfo)

  return {
    following,

    isLoading,
    isLoadingMore,
    hasMore,

    error,

    loadMore
  }
}