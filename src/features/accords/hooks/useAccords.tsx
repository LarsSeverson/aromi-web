import type { AccordPaginationInput } from '@/generated/graphql'
import { useQuery } from '@apollo/client/react'
import { ACCORDS_QUERY } from '../graphql/queries'
import { flattenConnections, validatePagination } from '@/utils/pagination'
import { hasNextPage, isStatusLoadingMore, noRes, wrapQuery } from '@/utils/util'
import { useMemo } from 'react'

export const useAccords = (input?: AccordPaginationInput) => {
  const {
    data, loading: isLoading, error, networkStatus,
    fetchMore
  } = useQuery(ACCORDS_QUERY, { variables: { input } })

  const loadMore = () => {
    const endCursor = validatePagination(data?.accords.pageInfo, networkStatus)

    if (endCursor == null) return noRes

    const variables = {
      input: {
        ...(input ?? {}),
        after: endCursor
      }
    }

    return wrapQuery(fetchMore({ variables })).map(data => flattenConnections(data.accords))
  }

  const accords = useMemo(
    () => flattenConnections(data?.accords ?? []),
    [data?.accords]
  )

  const isLoadingMore = isStatusLoadingMore(networkStatus)
  const hasMore = hasNextPage(data?.accords.pageInfo)

  return {
    accords,

    isLoading,
    isLoadingMore,
    hasMore,

    error,

    loadMore
  }
}
