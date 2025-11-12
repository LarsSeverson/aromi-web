import type { FragranceCollectionItemPaginationInput } from '@/generated/graphql'
import { useQuery } from '@apollo/client/react'
import { FRAGRANCE_COLLECTION_ITEMS_QUERY } from '../graphql/queries'
import { flattenConnections, validatePagination } from '@/utils/pagination'
import { noRes } from '@/utils/error'
import { hasNextPage, isStatusLoadingMore, wrapQuery } from '@/utils/util'
import { useMemo } from 'react'

export const useFragranceCollectionItems = (collectionId: string, input?: FragranceCollectionItemPaginationInput) => {
  const {
    data, loading: isLoading, error, networkStatus,
    fetchMore
  } = useQuery(FRAGRANCE_COLLECTION_ITEMS_QUERY, { variables: { collectionId, input } })

  const loadMore = () => {
    const endCursor = validatePagination(data?.fragranceCollection?.items?.pageInfo, networkStatus)

    if (endCursor == null) return noRes

    const variables = {
      collectionId,
      input: {
        ...(input ?? {}),
        after: endCursor
      }
    }

    return wrapQuery(
      fetchMore({ variables })
    )
      .map(data => flattenConnections(data.fragranceCollection.items))
  }

  const items = useMemo(
    () => flattenConnections(data?.fragranceCollection?.items ?? []),
    [data?.fragranceCollection?.items]
  )

  const isLoadingMore = isStatusLoadingMore(networkStatus)
  const hasMore = hasNextPage(data?.fragranceCollection?.items?.pageInfo)

  return {
    items,

    isLoading,
    isLoadingMore,
    hasMore,

    error,

    loadMore
  }
}