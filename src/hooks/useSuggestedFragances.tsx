import { useCallback, useMemo } from 'react'
import { NetworkStatus, useQuery } from '@apollo/client'
import { graphql } from '../generated'
import { type SuggestedFragrancesQuery, type SuggestedFragrancesQueryVariables } from '../generated/graphql'
import { flattenConnection, type FlattenType, type PaginatedQueryHookReturn } from '../common/util-types'

const FRAGRANCES_LIMIT = 20

const SUGGESTED_FRAGRANCES_QUERY = graphql(/* GraphQL */ `
  query SuggestedFragrances(
    $input: PaginationInput = { 
      first: 20
      sort: {
        direction: ASCENDING
      }
    }
    $imagesInput: PaginationInput = { 
      first: 1
    }
  ) {
    fragrances(input: $input) {
      edges {
        node {
          id
          brand
          name
          votes {
            voteScore
            likesCount
            dislikesCount
            myVote
          }
          images(input: $imagesInput) {
            edges {
              node {
                id
                src
                bg
              }
            }
          }
        }
      }
      pageInfo {
        hasPreviousPage
        hasNextPage
        startCursor
        endCursor
      }
    }
  } 
`)

export type FlattendedSuggestedFragrancesData = FlattenType<SuggestedFragrancesQuery>
export type SuggestedFragrancesFragrance = FlattendedSuggestedFragrancesData['fragrances'][number]
export type SuggestedFragrancesReturn = FlattendedSuggestedFragrancesData['fragrances']

const useSuggestedFragrances = (): PaginatedQueryHookReturn<SuggestedFragrancesReturn> => {
  const variables = useMemo<SuggestedFragrancesQueryVariables>(() => ({
    input: {
      first: FRAGRANCES_LIMIT,
      sort: {
        direction: 'ASCENDING'
      }
    }
  }), [])

  const { data, loading, error, networkStatus, fetchMore, refetch } = useQuery(SUGGESTED_FRAGRANCES_QUERY, {
    variables,
    notifyOnNetworkStatusChange: true
  })

  const getMore = useCallback(() => {
    if (data == null) return
    if (networkStatus === NetworkStatus.fetchMore) return

    const { hasNextPage, endCursor } = data.fragrances.pageInfo

    if (!hasNextPage || (endCursor == null)) return

    const newVariables: SuggestedFragrancesQueryVariables = {
      input: {
        first: FRAGRANCES_LIMIT,
        after: endCursor,
        sort: {
          direction: 'ASCENDING'
        }
      },
      imagesInput: {
        first: 1
      }
    }

    void fetchMore({ variables: newVariables })
  }, [data, networkStatus, fetchMore])

  const refresh = useCallback(() => {
    void refetch(variables)
  }, [variables, refetch])

  const fragrances = useMemo<SuggestedFragrancesReturn>(() => {
    return flattenConnection(data?.fragrances).map(fragrance => ({
      ...fragrance,
      images: flattenConnection(fragrance.images)
    }))
  },
  [data?.fragrances])

  return {
    data: fragrances,
    pageInfo: data?.fragrances.pageInfo,
    loadingMore: networkStatus === NetworkStatus.fetchMore,

    error,
    loading,

    getMore,
    refresh
  }
}

export default useSuggestedFragrances
