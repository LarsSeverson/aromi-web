import { type ApolloError, NetworkStatus, useQuery } from '@apollo/client'
import { FRAGRANCE_NOTES_QUERY } from '@/graphql/queries/FragranceQueries'
import { flatten, validatePagination } from '@/common/pagination'
import { type FragranceNotesQueryVariables, type VotePaginationInput } from '@/generated/graphql'
import { noRes } from '@/common/util-types'
import { ResultAsync } from 'neverthrow'

const useFragranceNotes = (
  fragranceId: number,
  topInput?: VotePaginationInput,
  middleInput?: VotePaginationInput,
  baseInput?: VotePaginationInput
) => {
  const {
    data, loading, error, networkStatus,
    refetch, fetchMore
  } = useQuery(FRAGRANCE_NOTES_QUERY, {
    variables: { fragranceId, topInput, middleInput, baseInput },
    notifyOnNetworkStatusChange: true
  })

  const loadMoreTop = () => {
    const endCursor = validatePagination(
      data?.fragrance?.notes.top.pageInfo,
      networkStatus
    )

    if (endCursor == null) return noRes

    const newVariables: FragranceNotesQueryVariables = {
      fragranceId,
      topInput: {
        ...(topInput ?? {}),
        after: endCursor
      },
      ...(middleInput ?? {}),
      ...(baseInput ?? {})
    }

    return ResultAsync
      .fromPromise(
        fetchMore({ variables: newVariables }),
        error => error as ApolloError
      )
      .map(result => result.data.fragrance?.notes.top)
  }

  const loadMoreMiddle = () => {
    const endCursor = validatePagination(
      data?.fragrance?.notes.middle.pageInfo,
      networkStatus
    )

    if (endCursor == null) return noRes

    const newVariables: FragranceNotesQueryVariables = {
      fragranceId,
      ...(topInput ?? {}),
      middleInput: {
        ...(middleInput ?? {}),
        after: endCursor
      },
      ...(baseInput ?? {})
    }

    return ResultAsync
      .fromPromise(
        fetchMore({ variables: newVariables }),
        error => error as ApolloError
      )
      .map(result => result.data.fragrance?.notes.middle)
  }
  const loadMoreBase = () => {
    const endCursor = validatePagination(
      data?.fragrance?.notes.base.pageInfo,
      networkStatus
    )

    if (endCursor == null) return noRes

    const newVariables: FragranceNotesQueryVariables = {
      fragranceId,
      ...(topInput ?? {}),
      ...(middleInput ?? {}),
      baseInput: {
        ...(baseInput ?? {}),
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

  const top = flatten(data?.fragrance?.notes.top ?? [])
  const middle = flatten(data?.fragrance?.notes.middle ?? [])
  const base = flatten(data?.fragrance?.notes.base ?? [])

  return {
    top,
    middle,
    base,

    loading,
    loadingMore: networkStatus === NetworkStatus.fetchMore,
    error,

    loadMoreTop,
    loadMoreMiddle,
    loadMoreBase,

    refetch
  }
}

export default useFragranceNotes
