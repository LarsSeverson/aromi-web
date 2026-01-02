import type { PostPaginationInput } from '@/generated/graphql'
import { useQuery } from '@apollo/client/react'
import { POSTS_QUERY } from '../graphql/queries'
import { noRes } from '@/utils/error'
import { flattenConnections, validatePagination } from '@/utils/pagination'
import { hasNextPage, isStatusLoadingMore, wrapQuery } from '@/utils/util'
import { useMemo } from 'react'

export const usePosts = (input?: PostPaginationInput) => {
  const {
    data, loading: isLoading, error, networkStatus,
    fetchMore
  } = useQuery(POSTS_QUERY, { variables: { input } })

  const loadMore = () => {
    const endCursor = validatePagination(data?.posts.pageInfo, networkStatus)

    if (endCursor == null) return noRes

    const variables = {
      input: {
        ...(input ?? {}),
        after: endCursor
      }
    }

    return wrapQuery(fetchMore({ variables })).map(data => flattenConnections(data.posts))
  }

  const posts = useMemo(
    () => flattenConnections(data?.posts ?? []),
    [data?.posts]
  )

  const isLoadingMore = isStatusLoadingMore(networkStatus)
  const hasMore = hasNextPage(data?.posts.pageInfo)

  return {
    posts,

    isLoading,
    isLoadingMore,
    hasMore,

    error,

    loadMore
  }
}