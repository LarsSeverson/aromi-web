import type { BrandPaginationInput } from '@/generated/graphql'
import { useQuery } from '@apollo/client/react'
import { BRANDS_QUERY } from '../graphql/queries'
import { flatten, validatePagination } from '@/utils/pagination'
import { noRes } from '@/utils/error'
import { hasNextPage, isStatusLoadingMore, wrapQuery } from '@/utils/util'
import { useMemo } from 'react'

export const useBrands = (input?: BrandPaginationInput) => {
  const {
    data, loading: isLoading, error, networkStatus,
    fetchMore
  } = useQuery(BRANDS_QUERY, { variables: { input } })

  const loadMore = () => {
    const endCursor = validatePagination(data?.brands.pageInfo, networkStatus)

    if (endCursor == null) return noRes

    const variables = {
      input: {
        ...(input ?? {}),
        after: endCursor
      }
    }

    return wrapQuery(fetchMore({ variables })).map(data => flatten(data.brands))
  }

  const brands = useMemo(
    () => flatten(data?.brands ?? []),
    [data?.brands]
  )

  const isLoadingMore = isStatusLoadingMore(networkStatus)
  const hasMore = hasNextPage(data?.brands.pageInfo)

  return {
    brands,

    isLoading,
    isLoadingMore,
    hasMore,

    error,

    loadMore
  }
}