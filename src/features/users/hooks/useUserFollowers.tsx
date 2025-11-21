import type { UserFollowPaginationInput } from '@/generated/graphql'
import { useQuery } from '@apollo/client/react'
import { USER_FOLLOWERS_QUERY } from '../graphql/queries'
import { flattenConnections, validatePagination } from '@/utils/pagination'
import { noRes } from '@/utils/error'
import { hasNextPage, isStatusLoadingMore, wrapQuery } from '@/utils/util'
import { useMemo } from 'react'

export const useUserFollowers = (
  userId: string,
  input?: UserFollowPaginationInput
) => {
  const {
    data, loading: isLoading, error, networkStatus,
    fetchMore
  } = useQuery(USER_FOLLOWERS_QUERY, { variables: { userId, input } })

  const loadMore = () => {
    const endCursor = validatePagination(data?.user.followers.pageInfo, networkStatus)

    if (endCursor == null) return noRes

    const variables = {
      userId,
      input: {
        ...(input ?? {}),
        after: endCursor
      }
    }

    return wrapQuery(fetchMore({ variables })).map(data => flattenConnections(data.user.followers))
  }

  const followers = useMemo(
    () => flattenConnections(data?.user.followers ?? []),
    [data?.user.followers]
  )

  const isLoadingMore = isStatusLoadingMore(networkStatus)
  const hasMore = hasNextPage(data?.user.followers.pageInfo)

  return {
    followers,

    isLoading,
    isLoadingMore,
    hasMore,

    error,

    loadMore
  }
}