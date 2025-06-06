import { useQuery } from '@apollo/client'
import { graphql } from '../generated'
import { type UserReviewsQueryVariables, type UserReviewsQuery } from '../generated/graphql'
import { flattenConnection, type FlattenType, INVALID_ID, type PaginatedQueryHookReturn } from '../common/util-types'
import { useCallback, useMemo } from 'react'

const REVIEWS_LIMIT = 20

const USER_REVIEWS_QUERY = graphql(/* GraphQL */`
  query UserReviews(
    $userId: Int!
    $reviewsInput: PaginationInput = {
      first: 20 
    }
    $imagesInput: PaginationInput = {
      first: 1
    }
  ) {
    user(id: $userId) {
      id
      reviews(input: $reviewsInput) {
        edges {
          node {
            id
            rating
            text
            votes {
              voteScore
              likesCount
              dislikesCount
              myVote
            }
            fragrance {
              id
              brand
              name
              images(input: $imagesInput) {
                edges {
                  node {
                    id
                    src
                  }
                }
              }
            }
            audit {
              createdAt
              updatedAt
              deletedAt
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
  }
`)

export type FlattenedUserReviews = FlattenType<NonNullable<UserReviewsQuery['user']>>['reviews']

const useUserReviews = (userId: number, limit: number = REVIEWS_LIMIT): PaginatedQueryHookReturn<FlattenedUserReviews> => {
  const variables = useMemo<UserReviewsQueryVariables>(() => ({
    userId,
    reviewsInput: {
      first: limit
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
        ...variables.reviewsInput,
        after: endCursor
      }
    }

    void fetchMore({ variables: newVariables })
  }, [data, variables, fetchMore])

  const refresh = useCallback(() => {
    void refetch(variables)
  }, [variables, refetch])

  const reviews = useMemo<FlattenedUserReviews>(() =>
    flattenConnection(data?.user?.reviews).map(review => ({
      ...review,
      fragrance: {
        ...review.fragrance,
        images: flattenConnection(review.fragrance.images)
      }
    })),
  [data?.user?.reviews])

  return {
    data: reviews,
    pageInfo: data?.user?.reviews.pageInfo,
    loading,
    error,

    getMore,
    refresh
  }
}

export default useUserReviews
