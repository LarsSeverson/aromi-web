import type { PostPaginationInput } from '@/generated/graphql'
import { useQuery } from '@apollo/client/react'
import { USER_POSTS_QUERY } from '../graphql/queries'
import { flattenConnections, validatePagination } from '@/utils/pagination'
import { noRes } from '@/utils/error'
import { hasNextPage, isStatusLoadingMore, wrapQuery } from '@/utils/util'
import { useMemo } from 'react'

export const useUserPosts = (userId: string, input?: PostPaginationInput) => {
  const {
    data, loading, error, fetchMore, networkStatus
  } = useQuery(USER_POSTS_QUERY, {
    variables: { input, userId }
  })

  const loadMore = () => {
    const endCursor = validatePagination(data?.user.posts.pageInfo, networkStatus)

    if (endCursor == null) return noRes

    const variables = {
      userId,
      input: {
        ...(input ?? {}),
        after: endCursor
      }
    }

    return wrapQuery(fetchMore({ variables })).map(data => flattenConnections(data.user.posts))
  }

  const posts = useMemo(
    () => flattenConnections(data?.user.posts ?? []),
    [data?.user.posts]
  )

  const isLoadingMore = isStatusLoadingMore(networkStatus)
  const hasMore = hasNextPage(data?.user.posts.pageInfo)

  return {
    posts,

    isLoading: loading,
    isLoadingMore,
    hasMore,

    error,

    loadMore
  }
}