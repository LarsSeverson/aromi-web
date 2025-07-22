import { flatten, validatePagination } from '@/common/pagination'
import { noRes } from '@/common/util-types'
import { type MiddleFragranceNotesQueryVariables, type VotePaginationInput } from '@/generated/graphql'
import { MIDDLE_FRAGRANCE_NOTES_QUERY } from '@/graphql/queries/FragranceQueries'
import { type ApolloError, NetworkStatus, useQuery } from '@apollo/client'
import { ResultAsync } from 'neverthrow'

export const useMiddleFragranceNotes = (
  fragranceId: number,
  input?: VotePaginationInput
) => {
  const {
    data, loading, error, networkStatus,
    refetch, fetchMore
  } = useQuery(MIDDLE_FRAGRANCE_NOTES_QUERY, {
    variables: { fragranceId, input },
    notifyOnNetworkStatusChange: true
  })

  const loadMore = () => {
    const endCursor = validatePagination(
      data?.fragrance?.notes.middle.pageInfo,
      networkStatus
    )

    if (endCursor == null) return noRes

    const newVariables: MiddleFragranceNotesQueryVariables = {
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
      .map(result => result.data.fragrance?.notes.middle)
  }

  const notes = flatten(data?.fragrance?.notes.middle ?? [])
  const hasMore = data?.fragrance?.notes.middle.pageInfo.hasNextPage ?? false

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
