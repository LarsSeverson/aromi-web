import type { FragrancePaginationInput } from '@/generated/graphql'
import { useQuery } from '@apollo/client/react'
import { flattenAll, validatePagination } from '@/utils/pagination'
import { noRes } from '@/utils/error'
import { hasNextPage, isStatusLoadingMore, wrapQuery } from '@/utils/util'
import { useMemo } from 'react'
import { BRAND_FRAGRANCES_QUERY } from '../graphql/queries'

export const useBrandFragrances = (id: string, input?: FragrancePaginationInput) => {
  const {
    data, loading: isLoading, error, networkStatus,
    fetchMore, refetch
  } = useQuery(BRAND_FRAGRANCES_QUERY, { variables: { id, input } })

  const loadMore = () => {
    const endCursor = validatePagination(data?.brand?.fragrances.pageInfo, networkStatus)

    if (endCursor == null) return noRes

    const variables = {
      id,
      input: {
        ...(input ?? {}),
        after: endCursor
      }
    }

    return wrapQuery(fetchMore({ variables })).map(data => flattenAll(data.brand?.fragrances))
  }

  const refresh = () => {
    return wrapQuery(refetch()).map(data => data.brand?.fragrances)
  }

  const fragrances = useMemo(
    () => flattenAll(data?.brand?.fragrances ?? []),
    [data?.brand?.fragrances]
  )

  const isLoadingMore = isStatusLoadingMore(networkStatus)
  const hasMore = hasNextPage(data?.brand?.fragrances.pageInfo)

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