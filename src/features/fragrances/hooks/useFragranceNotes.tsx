import type { FragranceNotePaginationInput } from '@/generated/graphql'
import { FRAGRANCE_NOTES_QUERY } from '../graphql/queries'
import { useQuery } from '@apollo/client/react'
import { useMemo } from 'react'
import { flattenAll, validatePagination } from '@/utils/pagination'
import { noRes } from '@/utils/error'
import { hasNextPage, isStatusLoadingMore, wrapQuery } from '@/utils/util'

export const useFragranceNotes = (fragranceId: string, input?: FragranceNotePaginationInput) => {
  const {
    data, loading: isLoading, error, networkStatus,
    fetchMore
  } = useQuery(FRAGRANCE_NOTES_QUERY, { variables: { fragranceId, input } })

  const loadMore = () => {
    const endCursor = validatePagination(data?.fragrance.notes.pageInfo, networkStatus)

    if (endCursor == null) return noRes

    const variables = {
      fragranceId,
      input: {
        ...(input ?? {}),
        after: endCursor
      }
    }

    return wrapQuery(fetchMore({ variables })).map(data => flattenAll(data.fragrance.notes))
  }

  const notes = useMemo(
    () => flattenAll(data?.fragrance.notes ?? []),
    [data?.fragrance.notes]
  )

  const isLoadingMore = isStatusLoadingMore(networkStatus)
  const hasMore = hasNextPage(data?.fragrance.notes.pageInfo)

  return {
    notes,

    isLoading,
    isLoadingMore,
    hasMore,

    error,

    loadMore
  }
}