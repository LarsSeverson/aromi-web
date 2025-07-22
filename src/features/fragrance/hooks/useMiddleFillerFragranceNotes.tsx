import { flatten, validatePagination } from '@/common/pagination'
import { noRes } from '@/common/util-types'
import { type PaginationInput, type MiddleFillerFragranceNotesQueryVariables } from '@/generated/graphql'
import { MIDDLE_FILLER_FRAGRANCE_NOTES_QUERY } from '@/graphql/queries/FragranceQueries'
import { type ApolloError, NetworkStatus, useQuery } from '@apollo/client'
import { ResultAsync } from 'neverthrow'
import { useMemo } from 'react'

export const useMiddleFillerFragranceNotes = (
  fragranceId: number,
  input?: PaginationInput
) => {
  const {
    data, loading, error, networkStatus,
    refetch, fetchMore
  } = useQuery(MIDDLE_FILLER_FRAGRANCE_NOTES_QUERY, {
    variables: { fragranceId, input },
    notifyOnNetworkStatusChange: true
  })

  const loadMore = () => {
    const endCursor = validatePagination(
      data?.fragrance?.notes.fillerMiddle.pageInfo,
      networkStatus
    )

    if (endCursor == null) return noRes

    const newVariables: MiddleFillerFragranceNotesQueryVariables = {
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
      .map(result => result.data.fragrance?.notes.fillerMiddle)
  }

  const notes = useMemo(() => flatten(data?.fragrance?.notes.fillerMiddle ?? []), [data?.fragrance?.notes.fillerMiddle])
  const hasMore = useMemo(() => data?.fragrance?.notes.fillerMiddle.pageInfo.hasNextPage ?? false, [data?.fragrance?.notes.fillerMiddle.pageInfo.hasNextPage])

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
