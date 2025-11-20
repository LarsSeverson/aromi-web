import type { SearchInput } from '@/generated/graphql'
import { useQuery } from '@apollo/client/react'
import { SEARCH_USERS_QUERY } from '../graphql/queries'
import { flattenConnections, validateSearchPagination } from '@/utils/pagination'
import { noRes } from '@/utils/error'
import { hasNextPage, isStatusLoadingMore, wrapQuery } from '@/utils/util'
import { useMemo } from 'react'

export const useSearchUsers = (input?: SearchInput) => {
  const {
    data, previousData, loading: isLoading, error, networkStatus,
    fetchMore, refetch
  } = useQuery(SEARCH_USERS_QUERY, { variables: { input } })

  const loadMore = () => {
    const endOffset = validateSearchPagination(data?.searchUsers.pageInfo, networkStatus)
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

    return wrapQuery(fetchMore({ variables })).map(data => data.searchUsers)
  }

  const refresh = (input?: SearchInput) => {
    return wrapQuery(refetch({ input })).map(data => data.searchUsers)
  }

  const users = useMemo(
    () => flattenConnections(data?.searchUsers ?? previousData?.searchUsers ?? []),
    [data?.searchUsers, previousData?.searchUsers]
  )

  const isLoadingMore = isStatusLoadingMore(networkStatus)
  const hasMore = hasNextPage(data?.searchUsers.pageInfo)
  const hasNoResults = users.length === 0 && !isLoading

  return {
    users,

    isLoading,
    isLoadingMore,
    hasMore,
    hasNoResults,

    error,

    loadMore,
    refresh
  }
}