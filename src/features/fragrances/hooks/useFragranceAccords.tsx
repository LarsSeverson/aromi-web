import type { FragranceAccordPaginationInput } from '@/generated/graphql'
import { FRAGRANCE_ACCORDS_QUERY } from '../graphql/queries'
import { useQuery } from '@apollo/client/react'
import { useMemo } from 'react'
import { flattenAll, validatePagination } from '@/utils/pagination'
import { noRes } from '@/utils/error'
import { hasNextPage, isStatusLoadingMore, wrapQuery } from '@/utils/util'

export const useFragranceAccords = (fragranceId: string, input?: FragranceAccordPaginationInput) => {
  const {
    data, loading: isLoading, error, networkStatus,
    fetchMore
  } = useQuery(FRAGRANCE_ACCORDS_QUERY, { variables: { fragranceId, input } })

  const loadMore = () => {
    const endCursor = validatePagination(data?.fragrance.accords.pageInfo, networkStatus)

    if (endCursor == null) return noRes

    const variables = {
      fragranceId,
      input: {
        ...(input ?? {}),
        after: endCursor
      }
    }

    return wrapQuery(fetchMore({ variables })).map(data => flattenAll(data.fragrance.accords))
  }

  const accords = useMemo(
    () => flattenAll(data?.fragrance.accords ?? []),
    [data?.fragrance.accords]
  )

  const isLoadingMore = isStatusLoadingMore(networkStatus)
  const hasMore = hasNextPage(data?.fragrance.accords.pageInfo)

  return {
    accords,

    isLoading,
    isLoadingMore,
    hasMore,

    error,

    loadMore
  }
}