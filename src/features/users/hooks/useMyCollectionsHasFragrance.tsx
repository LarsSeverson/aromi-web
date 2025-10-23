import type { FragranceCollectionPaginationInput } from '@/generated/graphql'
import { MY_COLLECTIONS_HAS_FRAGRANCE_QUERY } from '../graphql/queries'
import { useQuery } from '@apollo/client/react'
import { hasNextPage, isStatusLoadingMore, wrapQuery } from '@/utils/util'
import { useMemo } from 'react'
import { flattenConnections } from '@/utils/pagination'

export const useMyCollectionsHasFragrance = (fragranceId: string, input?: FragranceCollectionPaginationInput) => {
  const {
    data, loading: isLoading, error, networkStatus,
    fetchMore
  } = useQuery(MY_COLLECTIONS_HAS_FRAGRANCE_QUERY, { variables: { fragranceId, input } })

  const loadMore = () => {
    const endCursor = data?.me.collections.pageInfo.endCursor

    if (endCursor == null) return

    const variables = {
      fragranceId,
      input: {
        ...(input ?? {}),
        after: endCursor
      }
    }

    return wrapQuery(fetchMore({ variables })).map(data => data.me.collections)
  }

  const collections = useMemo(
    () => flattenConnections(data?.me.collections ?? []),
    [data?.me.collections]
  )

  const isLoadingMore = isStatusLoadingMore(networkStatus)
  const hasMore = hasNextPage(data?.me.collections.pageInfo)

  return {
    collections,

    isLoading,
    isLoadingMore,
    hasMore,

    error,

    loadMore
  }
}