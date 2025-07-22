import { flatten, validatePagination } from '@/common/pagination'
import { noRes } from '@/common/util-types'
import { type TopFillerFragranceNotesQueryVariables, type PaginationInput } from '@/generated/graphql'
import { TOP_FILLER_FRAGRANCE_NOTES_QUERY } from '@/graphql/queries/FragranceQueries'
import { type ApolloError, NetworkStatus, useQuery } from '@apollo/client'
import { ResultAsync } from 'neverthrow'
import { useMemo } from 'react'

export const useTopFillerFragranceNotes = (
  fragranceId: number,
  input?: PaginationInput
) => {
  const {
    data, loading, error, networkStatus,
    refetch, fetchMore
  } = useQuery(TOP_FILLER_FRAGRANCE_NOTES_QUERY, {
    variables: { fragranceId, input },
    notifyOnNetworkStatusChange: true
  })

  const loadMore = () => {
    const endCursor = validatePagination(
      data?.fragrance?.notes.fillerTop.pageInfo,
      networkStatus
    )

    if (endCursor == null) return noRes

    const newVariables: TopFillerFragranceNotesQueryVariables = {
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
      .map(result => result.data.fragrance?.notes.fillerTop)
  }

  const notes = useMemo(() => flatten(data?.fragrance?.notes.fillerTop ?? []), [data?.fragrance?.notes.fillerTop])
  const hasMore = useMemo(() => data?.fragrance?.notes.fillerTop.pageInfo.hasNextPage ?? false, [data?.fragrance?.notes.fillerTop.pageInfo.hasNextPage])

  return {
    data: notes,
    error,

    loading,
    loadingMore: networkStatus === NetworkStatus.fetchMore,
    hasMore,

    loadMore,
    refetch
  }
}
