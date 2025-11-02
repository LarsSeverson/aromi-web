import type { SearchInput } from '@/generated/graphql'
import { useQuery } from '@apollo/client/react'
import { SEARCH_ACCORDS_QUERY } from '../graphql/queries'
import { flattenConnections, validateSearchPagination } from '@/utils/pagination'
import { noRes } from '@/utils/error'
import { hasNextPage, isStatusLoadingMore, wrapQuery } from '@/utils/util'
import { useMemo } from 'react'

export const useSearchAccords = (input?: SearchInput) => {
  const {
    data, previousData, loading: isLoading, error, networkStatus,
    fetchMore, refetch
  } = useQuery(SEARCH_ACCORDS_QUERY, { variables: { input } })

  const loadMore = () => {
    const endOffset = validateSearchPagination(data?.searchAccords.pageInfo, networkStatus)

    if (endOffset == null) return noRes

    const variables = {
      input: {
        ...(input ?? {}),
        pagination: {
          ...(input?.pagination ?? {}),
          after: endOffset
        }
      }
    }

    return wrapQuery(fetchMore({ variables })).map(data => data.searchAccords)
  }

  const refresh = (input?: SearchInput) => {
    return wrapQuery(refetch({ input })).map(data => data.searchAccords)
  }

  const accords = useMemo(
    () => flattenConnections(data?.searchAccords ?? previousData?.searchAccords ?? []),
    [data?.searchAccords, previousData?.searchAccords]
  )

  const isLoadingMore = isStatusLoadingMore(networkStatus)
  const hasMore = hasNextPage(data?.searchAccords.pageInfo)

  return {
    accords,

    isLoading,
    isLoadingMore,
    hasMore,

    error,

    loadMore,
    refresh
  }
}