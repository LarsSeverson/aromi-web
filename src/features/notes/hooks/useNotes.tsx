import type { NotePaginationInput } from '@/generated/graphql'
import { useQuery } from '@apollo/client/react'
import { NOTES_QUERY } from '../graphql/queries'
import { flattenConnections, validatePagination } from '@/utils/pagination'
import { hasNextPage, isStatusLoadingMore, noRes, wrapQuery } from '@/utils/util'
import { useMemo } from 'react'

export const useNotes = (input?: NotePaginationInput) => {
  const {
    data, loading: isLoading, error, networkStatus,
    fetchMore
  } = useQuery(NOTES_QUERY, { variables: { input } })

  const loadMore = () => {
    const endCursor = validatePagination(data?.notes.pageInfo, networkStatus)

    if (endCursor == null) return noRes

    const variables = {
      input: {
        ...(input ?? {}),
        after: endCursor
      }
    }

    return wrapQuery(fetchMore({ variables })).map(data => flattenConnections(data.notes))
  }

  const notes = useMemo(
    () => flattenConnections(data?.notes ?? []),
    [data?.notes]
  )

  const isLoadingMore = isStatusLoadingMore(networkStatus)
  const hasMore = hasNextPage(data?.notes.pageInfo)

  return {
    notes,

    isLoading,
    isLoadingMore,
    hasMore,

    error,

    loadMore
  }
}
