import type { SearchInput } from '@/generated/graphql'
import { useQuery } from '@apollo/client/react'
import { SEARCH_BRANDS_QUERY } from '../graphql/queries'
import { flattenConnections, validateSearchPagination } from '@/utils/pagination'
import { noRes } from '@/utils/error'
import { hasNextPage, isStatusLoadingMore, wrapQuery } from '@/utils/util'
import { useMemo } from 'react'

export const useSearchBrands = (input?: SearchInput) => {
  const {
    data, previousData, loading: isLoading, error, networkStatus,
    fetchMore, refetch
  } = useQuery(SEARCH_BRANDS_QUERY, { variables: { input } })

  const loadMore = () => {
    const endOffset = validateSearchPagination(data?.searchBrands.pageInfo, networkStatus)
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

    return wrapQuery(fetchMore({ variables })).map(data => flattenConnections(data.searchBrands))
  }

  const refresh = (input?: SearchInput) => {
    return wrapQuery(refetch({ input })).map(data => data.searchBrands)
  }

  const brands = useMemo(
    () => flattenConnections(data?.searchBrands ?? previousData?.searchBrands ?? []),
    [data?.searchBrands, previousData?.searchBrands]
  )

  const isLoadingMore = isStatusLoadingMore(networkStatus)
  const hasMore = hasNextPage(data?.searchBrands.pageInfo)
  const hasNoResults = brands.length === 0 && !isLoading

  return {
    brands,

    isLoading,
    isLoadingMore,
    hasMore,
    hasNoResults,

    error,

    loadMore,
    refresh
  }
}