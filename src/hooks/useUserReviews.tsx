import { useQuery } from '@apollo/client'
import { graphql } from '../generated'
import { type UserReviewsQueryVariables, type UserReviewsQuery } from '../generated/graphql'
import { flattenConnection, type FlattenType, INVALID_ID, type PaginatedQueryHookReturn } from '../common/util-types'
import { useCallback, useMemo } from 'react'

const REVIEWS_LIMIT = 20

const USER_REVIEWS_QUERY = graphql(/* GraphQL */`
  query UserReviews(
    $userId: Int!
    $reviewsInput: QueryInput = {
      pagination: {
        first: 20 
      }
    }
  ) {
    user(id: $userId) {
      id
      reviews(input: $reviewsInput) {
        pageInfo {
          hasPreviousPage
          hasNextPage
          startCursor
          endCursor
        }
        edges {
          node {
            id
            author
            rating
            review
            votes
            dCreated
            dModified
          }
        }
      }
    }
  }
`)

export type FlattenedUserReviews = FlattenType<NonNullable<UserReviewsQuery['user']>>['reviews']

const useUserReviews = (userId: number, limit: number = REVIEWS_LIMIT): PaginatedQueryHookReturn<FlattenedUserReviews> => {
  const variables = useMemo<UserReviewsQueryVariables>(() => ({
    userId,
    reviewsInput: {
      pagination: {
        first: limit
      }
    }
  }), [userId, limit])

  const { data, loading, error, fetchMore, refetch } = useQuery(USER_REVIEWS_QUERY, {
    variables,
    skip: userId === INVALID_ID
  })

  const getMore = useCallback(() => {
    if (data?.user == null) return

    const pageInfo = data.user.reviews.pageInfo
    const { hasNextPage, endCursor } = pageInfo

    if (!hasNextPage || (endCursor == null)) return

    const newVariables: UserReviewsQueryVariables = {
      ...variables,
      reviewsInput: {
        pagination: {
          ...variables.reviewsInput?.pagination,
          after: endCursor
        }
      }
    }

    void fetchMore({
      variables: newVariables,
      updateQuery: (prev, { fetchMoreResult }) => {
        const c1 = prev.user
        const c2 = fetchMoreResult.user

        if (c1 == null) return fetchMoreResult
        if (c2 == null) return prev

        return {
          user: {
            ...c1,
            reviews: {
              edges: c1.reviews.edges.concat(c2.reviews.edges),
              pageInfo: c2.reviews.pageInfo
            }
          }
        }
      }
    })
  }, [data, variables, fetchMore])

  const refresh = useCallback(() => {
    void refetch(variables)
  }, [variables, refetch])

  const reviews = useMemo<FlattenedUserReviews>(() =>
    flattenConnection(data?.user?.reviews),
  [data?.user?.reviews])

  return {
    data: reviews,
    pageInfo: data?.user?.reviews.pageInfo,
    error,
    loading,

    getMore,
    refresh
  }
}

export default useUserReviews
