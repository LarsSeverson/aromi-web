import { NetworkStatus, useQuery } from '@apollo/client'
import { useCallback, useMemo } from 'react'
import { graphql } from '../generated'
import { type FragranceReviewsQueryVariables, type FragranceReviewsQuery } from '../generated/graphql'
import { flattenConnection, INVALID_ID, type FlattenType, type PaginatedQueryHookReturn } from '../common/util-types'

const REVIEWS_LIMIT = 20

const FRAGRANCE_REVIEWS_QUERY = graphql(/* GraphQL */ `
  query FragranceReviews(
    $fragranceId: Int!
    $reviewsInput: QueryInput = {
      pagination: {
        first: 20
        sort: {
          by: votes
        }
      }
    }
  ) {
    fragrance(id: $fragranceId) {
      id
      reviews(input: $reviewsInput) {
        edges {
          node {
            id
            rating
            review
            votes
            dCreated
            dModified
            dDeleted
            author 
            myVote
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
  }
`)

export type FlattenedFragranceReviewsReturn = FlattenType<NonNullable<FragranceReviewsQuery['fragrance']>['reviews']>

const useFragranceReviews = (fragranceId: number): PaginatedQueryHookReturn<FlattenedFragranceReviewsReturn> => {
  const variables = useMemo<FragranceReviewsQueryVariables>(() => ({
    fragranceId,
    reviewsInput: {
      pagination: {
        first: REVIEWS_LIMIT
      }
    }
  }), [fragranceId])

  const { data, loading, error, networkStatus, refetch, fetchMore } = useQuery(FRAGRANCE_REVIEWS_QUERY, {
    variables,
    notifyOnNetworkStatusChange: true,
    skip: fragranceId === INVALID_ID
  })

  const getMore = useCallback(() => {
    if (data?.fragrance == null) return

    const pageInfo = data.fragrance.reviews.pageInfo
    const { hasNextPage, endCursor } = pageInfo

    if (!hasNextPage || (endCursor == null)) return

    const newVariables: FragranceReviewsQueryVariables = {
      ...variables,
      reviewsInput: {
        pagination: {
          ...variables.reviewsInput?.pagination,
          after: endCursor
        }
      }
    }

    void fetchMore({ variables: newVariables })
  }, [data, variables, fetchMore])

  const refresh = useCallback(() => {
    void refetch(variables)
  }, [variables, refetch])

  const reviews = useMemo<FlattenedFragranceReviewsReturn>(() =>
    flattenConnection(data?.fragrance?.reviews),
  [data?.fragrance?.reviews])

  return {
    data: reviews,
    pageInfo: data?.fragrance?.reviews.pageInfo,
    loading,
    loadingMore: networkStatus === NetworkStatus.fetchMore,
    error,

    refresh,
    getMore
  }
}

export default useFragranceReviews
