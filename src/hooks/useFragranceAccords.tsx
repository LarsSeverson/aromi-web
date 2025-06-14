import { NetworkStatus, useQuery } from '@apollo/client'
import { useCallback, useMemo } from 'react'
import { FRAGRANCE_ACCORDS_QUERY } from '@/graphql/queries/FragranceQueries'
import { flatten } from '@/common/pagination'
import { type AccordsInput } from '@/generated/graphql'

const useFragranceAccords = (
  fragranceId: number,
  input?: AccordsInput
) => {
  const {
    data, loading, error, networkStatus,
    refetch, fetchMore
  } = useQuery(FRAGRANCE_ACCORDS_QUERY, {
    variables: { fragranceId, input },
    notifyOnNetworkStatusChange: true
  })

  const loadMore = useCallback(() => {
    if (data?.fragrance == null) return
    if (networkStatus === NetworkStatus.fetchMore) return

    const { hasNextPage, endCursor } = data.fragrance.accords.pageInfo

    if (!hasNextPage || (endCursor == null)) return

    const newVariables = {
      fragranceId,
      input: {
        pagination: { after: endCursor }
      }
    }

    void fetchMore({ variables: newVariables })
  }, [fragranceId, data, networkStatus, fetchMore])

  const accords = useMemo(() => flatten(data?.fragrance?.accords ?? []), [data?.fragrance?.accords])

  return {
    data: accords,
    loading,
    loadingMore: networkStatus === NetworkStatus.fetchMore,
    error,

    loadMore,
    refetch
  }
}

export default useFragranceAccords
