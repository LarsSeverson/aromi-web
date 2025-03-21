import { NetworkStatus, useQuery } from '@apollo/client'
import { useCallback, useMemo } from 'react'
import { graphql } from '../generated'
import { type FragranceAccordsQueryVariables, type FragranceAccordsQuery, SortBy } from '../generated/graphql'
import { flattenConnection, INVALID_ID, type FlattenType, type PaginatedQueryHookReturn } from '../common/util-types'

const ACCORDS_LIMIT = 18

const FRAGRANCE_ACCORDS_QUERY = graphql(/* GraphQL */ `
  query FragranceAccords(
    $fragranceId: Int!
    $accordsInput: AccordsInput = {
      pagination: {
        first: 18 
        sort: {
          by: votes
        }
      }
      fill: false
    }
  ) {
    fragrance(id: $fragranceId) {
      id
      accords(input: $accordsInput) {
        edges {
          node {
            id
            accordId
            name
            color
            votes
            myVote
          }
        }
        pageInfo {
          hasNextPage
          hasPreviousPage
          startCursor
          endCursor
        }
      }
    }
  }
`)

export type FlattenedFragranceAccordsQuery = FlattenType<NonNullable<FragranceAccordsQuery['fragrance']>>
export type FragranceAccordsQueryReturn = FlattenedFragranceAccordsQuery['accords']

const useFragranceAccords = (fragranceId: number, limit: number = ACCORDS_LIMIT, fill: boolean = false): PaginatedQueryHookReturn<FragranceAccordsQueryReturn> => {
  const variables = useMemo<FragranceAccordsQueryVariables>(() => ({
    fragranceId,
    accordsInput: {
      pagination: {
        first: limit,
        sort: { by: SortBy.Votes }
      },
      fill
    }
  }), [fill, fragranceId, limit])

  const { data, loading, error, networkStatus, refetch, fetchMore } = useQuery(FRAGRANCE_ACCORDS_QUERY, {
    variables,
    notifyOnNetworkStatusChange: true,
    skip: fragranceId === INVALID_ID
  })

  const getMore = useCallback(() => {
    if (data?.fragrance == null) return

    const pageInfo = data.fragrance.accords.pageInfo
    const { hasNextPage, endCursor } = pageInfo

    if (!hasNextPage || (endCursor == null)) return

    const newVariables: FragranceAccordsQueryVariables = {
      ...variables,
      accordsInput: {
        pagination: {
          ...variables.accordsInput?.pagination,
          after: endCursor
        }
      }
    }

    void fetchMore({ variables: newVariables })
  }, [data, variables, fetchMore])

  const refresh = useCallback(() => {
    void refetch(variables)
  }, [variables, refetch])

  const accords = useMemo<FragranceAccordsQueryReturn>(() =>
    flattenConnection(data?.fragrance?.accords),
  [data?.fragrance?.accords])

  return {
    data: accords,
    pageInfo: data?.fragrance?.accords.pageInfo,
    loading,
    loadingMore: networkStatus === NetworkStatus.fetchMore,
    error,

    refresh,
    getMore
  }
}

export default useFragranceAccords
