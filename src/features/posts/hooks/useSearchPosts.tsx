import type { SearchInput } from '@/generated/graphql'

import { useQuery } from '@apollo/client/react'
import { SEARCH_POSTS_QUERY } from '../graphql/queries'
import { flattenConnections, validateSearchPagination } from '@/utils/pagination'
import { noRes } from '@/utils/error'
import { hasNextPage, isStatusLoadingMore, wrapQuery } from '@/utils/util'
import { useMemo } from 'react'

export const useSearchPosts = (input?: SearchInput) => {
  const {
    data, previousData, loading: isLoading, error, networkStatus,
    fetchMore, refetch
  } = useQuery(SEARCH_POSTS_QUERY, { variables: { input } })

  const loadMore = () => {
    const endOffset = validateSearchPagination(data?.searchPosts.pageInfo, networkStatus)
    if (endOffset == null) return noRes

    const variables = {
      input: {
        ...input,
        pagination: {
          ...(input?.pagination ?? {}),
          after: endOffset
        }
      }
    }

    return wrapQuery(fetchMore({ variables })).map(data => data.searchPosts)
  }

  const refresh = (input?: SearchInput) => {
    return wrapQuery(refetch({ input })).map(data => data.searchPosts)
  }

  const posts = useMemo(
    () => flattenConnections(data?.searchPosts ?? previousData?.searchPosts ?? []),
    [data?.searchPosts, previousData?.searchPosts]
  )

  const isLoadingMore = isStatusLoadingMore(networkStatus)
  const hasMore = hasNextPage(data?.searchPosts.pageInfo)
  const hasNoResults = posts.length === 0 && !isLoading

  return {
    posts,

    isLoading,
    isLoadingMore,
    hasMore,
    hasNoResults,

    error,

    loadMore,
    refresh
  }
}