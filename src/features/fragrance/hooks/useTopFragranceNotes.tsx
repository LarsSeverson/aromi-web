import { flatten, validatePagination } from '@/common/pagination'
import { noRes } from '@/common/util-types'
import { type TopFragranceNotesQueryVariables, type VotePaginationInput } from '@/generated/graphql'
import { TOP_FRAGRANCE_NOTES_QUERY } from '@/graphql/queries/FragranceQueries'
import { type ApolloError, NetworkStatus, useQuery } from '@apollo/client'
import { ResultAsync } from 'neverthrow'

export const useTopFragranceNotes = (
  fragranceId: number,
  input?: VotePaginationInput
) => {
  const {
    data, loading, error, networkStatus,
    refetch, fetchMore
  } = useQuery(TOP_FRAGRANCE_NOTES_QUERY, {
    variables: { fragranceId, input },
    notifyOnNetworkStatusChange: true
  })

  const loadMore = () => {
    const endCursor = validatePagination(
      data?.fragrance?.notes.top.pageInfo,
      networkStatus
    )

    if (endCursor == null) return noRes

    const newVariables: TopFragranceNotesQueryVariables = {
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
      .map(result => result.data.fragrance?.notes.top)
  }

  const notes = flatten(data?.fragrance?.notes.top ?? [])
  const hasMore = data?.fragrance?.notes.top.pageInfo.hasNextPage ?? false

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
