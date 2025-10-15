import type { FragranceCollectionPaginationInput } from '@/generated/graphql'
import { useQuery } from '@apollo/client/react'
import { MY_COLLECTIONS_QUERY } from '../graphql/queries'
import { flattenConnections, validatePagination } from '@/utils/pagination'
import { noRes } from '@/utils/error'
import { hasNextPage, isStatusLoadingMore, wrapQuery } from '@/utils/util'
import { useMemo } from 'react'

export const useMyCollections = (input?: FragranceCollectionPaginationInput) => {
  const {
    data, loading: isLoading, error, networkStatus,
    fetchMore
  } = useQuery(MY_COLLECTIONS_QUERY, { variables: { input } })

  const loadMore = () => {
    const endCursor = validatePagination(data?.me.collections.pageInfo, networkStatus)

    if (endCursor == null) return noRes

    const variables = {
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