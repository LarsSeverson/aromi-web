import type { FragranceCollectionPaginationInput } from '@/generated/graphql'
import { useQuery } from '@apollo/client/react'
import { USER_COLLECTIONS_QUERY } from '../graphql/queries'
import { flattenAll, validatePagination } from '@/utils/pagination'
import { noRes } from '@/utils/error'
import { hasNextPage, isStatusLoadingMore, wrapQuery } from '@/utils/util'
import { useMemo } from 'react'

export const useUserCollections = (userId: string, input?: FragranceCollectionPaginationInput) => {
  const {
    data, loading: isLoading, error, networkStatus,
    fetchMore
  } = useQuery(USER_COLLECTIONS_QUERY, { variables: { userId, input } })

  const loadMore = () => {
    const endCursor = validatePagination(data?.user.collections.pageInfo, networkStatus)

    if (endCursor == null) return noRes

    const variables = {
      userId,
      input: {
        ...(input ?? {}),
        after: endCursor
      }
    }

    return wrapQuery(fetchMore({ variables })).map(data => flattenAll(data.user.collections))
  }

  const collections = useMemo(
    () => flattenAll(data?.user.collections ?? []),
    [data?.user.collections]
  )

  const isLoadingMore = isStatusLoadingMore(networkStatus)
  const hasMore = hasNextPage(data?.user.collections.pageInfo)

  return {
    collections,

    isLoading,
    isLoadingMore,
    hasMore,

    error,

    loadMore
  }
}