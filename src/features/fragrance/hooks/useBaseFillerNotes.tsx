import { flatten, validatePagination } from '@/common/pagination'
import { noRes } from '@/common/util-types'
import { type PaginationInput, type BaseFillerFragranceNotesQueryVariables } from '@/generated/graphql'
import { BASE_FILLER_FRAGRANCE_NOTES_QUERY } from '@/features/fragrance/graphql/queries'
import { type ApolloError, NetworkStatus, useQuery } from '@apollo/client'
import { ResultAsync } from 'neverthrow'
import { useMemo } from 'react'

export const useBaseFillerFragranceNotes = (
  fragranceId: number,
  input?: PaginationInput
) => {
  const {
    data, loading, error, networkStatus,
    refetch, fetchMore
  } = useQuery(BASE_FILLER_FRAGRANCE_NOTES_QUERY, {
    variables: { fragranceId, input },
    notifyOnNetworkStatusChange: true
  })

  const loadMore = () => {
    const endCursor = validatePagination(
      data?.fragrance?.notes.fillerBase.pageInfo,
      networkStatus
    )

    if (endCursor == null) return noRes

    const newVariables: BaseFillerFragranceNotesQueryVariables = {
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
      .map(result => result.data.fragrance?.notes.fillerBase)
  }

  const notes = useMemo(() => flatten(data?.fragrance?.notes.fillerBase ?? []), [data?.fragrance?.notes.fillerBase])
  const hasMore = useMemo(() => data?.fragrance?.notes.fillerBase.pageInfo.hasNextPage ?? false, [data?.fragrance?.notes.fillerBase.pageInfo.hasNextPage])

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
