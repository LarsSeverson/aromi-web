import { flatten, validatePagination } from '@/common/pagination'
import { noRes } from '@/common/util-types'
import { type MiddleFragranceNotesQueryVariables, type VotePaginationInput } from '@/generated/graphql'
import { BASE_FRAGRANCE_NOTES_QUERY } from '@/graphql/queries/FragranceQueries'
import { type ApolloError, NetworkStatus, useQuery } from '@apollo/client'
import { ResultAsync } from 'neverthrow'

export const useBaseFragranceNotes = (
  fragranceId: number,
  input?: VotePaginationInput
) => {
  const {
    data, loading, error, networkStatus,
    refetch, fetchMore
  } = useQuery(BASE_FRAGRANCE_NOTES_QUERY, {
    variables: { fragranceId, input },
    notifyOnNetworkStatusChange: true
  })

  const loadMore = () => {
    const endCursor = validatePagination(
      data?.fragrance?.notes.base.pageInfo,
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
      .map(result => result.data.fragrance?.notes.base)
  }

  const notes = flatten(data?.fragrance?.notes.base ?? [])
  const hasMore = data?.fragrance?.notes.base.pageInfo.hasNextPage ?? false

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
