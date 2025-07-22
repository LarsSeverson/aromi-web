import { type ApolloError, NetworkStatus, useQuery } from '@apollo/client'
import { useMemo } from 'react'
import { FRAGRANCE_ACCORDS_QUERY } from '@/graphql/queries/FragranceQueries'
import { flatten, validatePagination } from '@/common/pagination'
import { type FragranceAccordsQueryVariables, type VotePaginationInput } from '@/generated/graphql'
import { ResultAsync } from 'neverthrow'
import { noRes } from '@/common/util-types'

const useFragranceAccords = (
  fragranceId: number,
  input?: VotePaginationInput
) => {
  const {
    data, loading, error, networkStatus,
    refetch, fetchMore
  } = useQuery(FRAGRANCE_ACCORDS_QUERY, {
    variables: { fragranceId, input },
    notifyOnNetworkStatusChange: true
  })

  const loadMore = () => {
    const endCursor = validatePagination(
      data?.fragrance?.accords.pageInfo,
      networkStatus
    )

    if (endCursor == null) return noRes

    const newVariables: FragranceAccordsQueryVariables = {
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
      .map(result => result.data.fragrance?.accords)
  }

  const accords = useMemo(() => flatten(data?.fragrance?.accords ?? []), [data?.fragrance?.accords])
  const hasMore = useMemo(() => data?.fragrance?.accords.pageInfo.hasNextPage ?? false, [data?.fragrance?.accords.pageInfo.hasNextPage])

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

export default useFragranceAccords
