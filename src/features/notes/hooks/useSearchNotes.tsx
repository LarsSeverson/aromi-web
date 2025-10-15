import type { SearchInput } from '@/generated/graphql'
import { useQuery } from '@apollo/client/react'
import { SEARCH_NOTES_QUERY } from '../graphql/queries'
import { flattenConnections, validateSearchPagination } from '@/utils/pagination'
import { noRes } from '@/utils/error'
import { hasNextPage, isStatusLoadingMore, wrapQuery } from '@/utils/util'
import { useMemo } from 'react'

export const useSearchNotes = (input?: SearchInput) => {
  const {
    data, loading: isLoading, error, networkStatus,
    fetchMore, refetch
  } = useQuery(SEARCH_NOTES_QUERY, { variables: { input } })

  const loadMore = () => {
    const endOffset = validateSearchPagination(data?.searchNotes.pageInfo, networkStatus)

    if (endOffset == null) return noRes

    const variables = {
      input: {
        ...(input ?? {}),
        offset: endOffset
      }
    }

    return wrapQuery(fetchMore({ variables })).map(data => data.searchNotes)
  }

  const refresh = () => {
    return wrapQuery(refetch()).map(data => data.searchNotes)
  }

  const notes = useMemo(
    () => flattenConnections(data?.searchNotes ?? []),
    [data?.searchNotes]
  )

  const isLoadingMore = isStatusLoadingMore(networkStatus)
  const hasMore = hasNextPage(data?.searchNotes.pageInfo)

  return {
    notes,

    isLoading,
    isLoadingMore,
    hasMore,

    error,

    loadMore,
    refresh
  }
}