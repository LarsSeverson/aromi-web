import { useCallback, useMemo } from 'react'
import { NetworkStatus, useQuery } from '@apollo/client'
import { type PaginationInput } from '../generated/graphql'
import { SUGGESTED_FRAGRANCES_QUERY } from '@/graphql/queries/FragranceQueries'
import { flatten } from '@/common/pagination'

const useSuggestedFragrances = (
  input?: PaginationInput
) => {
  const {
    data, loading, error, networkStatus,
    fetchMore, refetch
  } = useQuery(SUGGESTED_FRAGRANCES_QUERY, {
    variables: { input },
    notifyOnNetworkStatusChange: true
  })

  const loadMore = useCallback(() => {
    if (data == null) return
    if (networkStatus === NetworkStatus.fetchMore) return

    const { hasNextPage, endCursor } = data.fragrances.pageInfo

    if (!hasNextPage || (endCursor == null)) return

    const variables = {
      input: { after: endCursor }
    }

    void fetchMore({ variables })
  }, [data, networkStatus, fetchMore])

  const fragrances = useMemo(() => flatten(data?.fragrances ?? []), [data])

  return {
    data: fragrances,
    loading,
    loadingMore: networkStatus === NetworkStatus.fetchMore,
    error,

    loadMore,
    refetch
  }
}

export default useSuggestedFragrances
