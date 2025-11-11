import type { FragrancePaginationInput } from '@/generated/graphql'
import { useQuery } from '@apollo/client/react'
import { USER_LIKES_QUERY } from '../graphql/queries'
import { flattenConnections, validatePagination } from '@/utils/pagination'
import { noRes } from '@/utils/error'
import { hasNextPage, isStatusLoadingMore, wrapQuery } from '@/utils/util'
import { useMemo } from 'react'

export const useUserLikes = (userId: string, input?: FragrancePaginationInput) => {
  const {
    data, loading: isLoading, error, networkStatus,
    fetchMore
  } = useQuery(USER_LIKES_QUERY, { variables: { userId, input } })

  const loadMore = () => {
    const endCursor = validatePagination(data?.user.likes.pageInfo, networkStatus)

    if (endCursor == null) return noRes

    const variables = {
      userId,
      input: {
        ...(input ?? {}),
        after: endCursor
      }
    }

    return wrapQuery(fetchMore({ variables })).map(data => flattenConnections(data.user.likes))
  }

  const likes = useMemo(
    () => flattenConnections(data?.user.likes ?? []),
    [data?.user.likes]
  )

  const isLoadingMore = isStatusLoadingMore(networkStatus)
  const hasMore = hasNextPage(data?.user.likes.pageInfo)

  return {
    likes,

    isLoading,
    isLoadingMore,
    hasMore,

    error,

    loadMore
  }
}