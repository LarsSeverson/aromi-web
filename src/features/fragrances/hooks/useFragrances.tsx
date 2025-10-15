import type { FragrancePaginationInput } from '@/generated/graphql'

import { useQuery } from '@apollo/client/react'
import { FRAGRANCES_QUERY } from '../graphql/queries'
import { useMemo } from 'react'
import { flattenConnections, validatePagination } from '@/utils/pagination'
import { noRes } from '@/utils/error'
import { hasNextPage, isStatusLoadingMore, wrapQuery } from '@/utils/util'

export const useFragrances = (input?: FragrancePaginationInput) => {
  const {
    data, loading: isLoading, error, networkStatus,
    fetchMore
  } = useQuery(FRAGRANCES_QUERY, { variables: { input } })

  const loadMore = () => {
    const endCursor = validatePagination(data?.fragrances.pageInfo, networkStatus)

    if (endCursor == null) return noRes

    const variables = {
      input: {
        ...(input ?? {}),
        after: endCursor
      }
    }

    return wrapQuery(fetchMore({ variables })).map(data => flattenConnections(data.fragrances))
  }

  const fragrances = useMemo(
    () => flattenConnections(data?.fragrances ?? []),
    [data?.fragrances]
  )

  const isLoadingMore = isStatusLoadingMore(networkStatus)
  const hasMore = hasNextPage(data?.fragrances.pageInfo)

  return {
    fragrances,

    isLoading,
    isLoadingMore,
    hasMore,

    error,

    loadMore
  }
}