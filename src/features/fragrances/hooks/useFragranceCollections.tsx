import type { FragranceCollectionPaginationInput } from '@/generated/graphql'
import { useQuery } from '@apollo/client/react'
import { FRAGRANCE_COLLECTIONS_QUERY } from '../graphql/queries'
import { useMemo } from 'react'
import { flattenConnections, validatePagination } from '@/utils/pagination'
import { noRes } from '@/utils/error'
import { hasNextPage, isStatusLoadingMore, wrapQuery } from '@/utils/util'

export const useFragranceCollections = (input?: FragranceCollectionPaginationInput) => {
  const {
    data, loading: isLoading, error, networkStatus,
    fetchMore
  } = useQuery(FRAGRANCE_COLLECTIONS_QUERY, { variables: { input } })

  const loadMore = () => {
    const endCursor = validatePagination(data?.fragranceCollections.pageInfo, networkStatus)

    if (endCursor == null) return noRes

    const variables = {
      input: {
        ...(input ?? {}),
        after: endCursor
      }
    }

    return wrapQuery(fetchMore({ variables })).map(data => flattenConnections(data.fragranceCollections))
  }

  const collections = useMemo(
    () => flattenConnections(data?.fragranceCollections ?? []),
    [data?.fragranceCollections]
  )

  const isLoadingMore = isStatusLoadingMore(networkStatus)
  const hasMore = hasNextPage(data?.fragranceCollections.pageInfo)

  return {
    collections,

    isLoading,
    isLoadingMore,
    hasMore,

    error,

    loadMore
  }
}