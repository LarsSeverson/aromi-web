import { validatePagination, flatten } from '@/common/pagination'
import { noRes } from '@/common/util-types'
import { type FillerFragranceAccordsQueryVariables, type PaginationInput } from '@/generated/graphql'
import { FILLER_FRAGRANCE_ACCORDS_QUERY } from '@/features/fragrance/graphql/queries'
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
    const endCursor = validatePagination(
      data?.fragrance?.fillerAccords.pageInfo,
      networkStatus
    )

    if (endCursor == null) return noRes

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
      .map(result => result.data.fragrance?.fillerAccords)
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
