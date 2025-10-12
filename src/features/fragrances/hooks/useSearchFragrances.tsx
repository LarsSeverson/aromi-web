import type { SearchInput } from '@/generated/graphql'

import { useQuery } from '@apollo/client/react'
import { SEARCH_FRAGRANCES_QUERY } from '../graphql/queries'
import { flattenAll, validateSearchPagination } from '@/utils/pagination'
import { noRes } from '@/utils/error'
import { hasNextPage, isStatusLoadingMore, wrapQuery } from '@/utils/util'
import { useMemo } from 'react'

export const useSearchFragrances = (input?: SearchInput) => {
  const {
    data, previousData, loading: isLoading, error, networkStatus,
    fetchMore, refetch
  } = useQuery(SEARCH_FRAGRANCES_QUERY, { variables: { input } })

  const loadMore = () => {
    const endOffset = validateSearchPagination(data?.searchFragrances.pageInfo, networkStatus)
    if (endOffset == null) return noRes

    const variables = {
      input: {
        ...input,
        after: endOffset
      }
    }

    return wrapQuery(fetchMore({ variables })).map(data => data.searchFragrances)
  }

  const refresh = (input?: SearchInput) => {
    return wrapQuery(refetch({ input })).map(data => data.searchFragrances)
  }

  const fragrances = useMemo(
    () => flattenAll(data?.searchFragrances ?? previousData?.searchFragrances ?? []),
    [data?.searchFragrances, previousData?.searchFragrances]
  )

  const isLoadingMore = isStatusLoadingMore(networkStatus)
  const hasMore = hasNextPage(data?.searchFragrances.pageInfo)

  return {
    fragrances,

    isLoading,
    isLoadingMore,
    hasMore,

    error,

    loadMore,
    refresh
  }
}