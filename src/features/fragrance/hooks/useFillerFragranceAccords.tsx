import { flatten } from '@/common/pagination'
import { noRes } from '@/common/util-types'
import { type FillerFragranceAccordsQueryVariables, type PaginationInput } from '@/generated/graphql'
import { FILLER_FRAGRANCE_ACCORDS_QUERY } from '@/graphql/queries/FragranceQueries'
import { type ApolloError, NetworkStatus, useQuery } from '@apollo/client'
import { ResultAsync } from 'neverthrow'
import { useMemo } from 'react'

export const useFillerFragranceAccords = (
  fragranceId: number,
  input?: PaginationInput
) => {
  const {
    data, loading, error, networkStatus,
    refetch, fetchMore
  } = useQuery(FILLER_FRAGRANCE_ACCORDS_QUERY, {
    variables: { fragranceId, input },
    notifyOnNetworkStatusChange: true
  })

  const loadMore = () => {
    if (data?.fragrance == null) return noRes
    if (networkStatus === NetworkStatus.fetchMore) return noRes

    const { hasNextPage, endCursor } = data.fragrance.fillerAccords.pageInfo

    if (!hasNextPage || (endCursor == null)) return noRes

    const newVariables: FillerFragranceAccordsQueryVariables = {
      fragranceId,
      input: {
        ...(input ?? {}),
        after: endCursor
      }
    }

    return ResultAsync
      .fromPromise(
        fetchMore({ variables: newVariables }),
        error => error as ApolloError
      )
      .map(result => result.data)
  }

  const accords = useMemo(() => flatten(data?.fragrance?.fillerAccords ?? []), [data?.fragrance?.fillerAccords])
  const hasMore = useMemo(() => data?.fragrance?.fillerAccords.pageInfo.hasNextPage ?? false, [data?.fragrance?.fillerAccords.pageInfo])

  return {
    data: accords,
    loading,
    loadingMore: networkStatus === NetworkStatus.fetchMore,
    hasMore,
    error,

    loadMore,
    refetch
  }
}
