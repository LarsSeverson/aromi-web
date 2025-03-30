import { useQuery } from '@apollo/client'
import { graphql } from '../generated'
import { type UserLikesQueryVariables, type UserLikesQuery } from '../generated/graphql'
import { flattenConnection, type FlattenType, INVALID_ID, type PaginatedQueryHookReturn } from '../common/util-types'
import { useCallback, useMemo } from 'react'

const LIKES_LIMIT = 20

const USER_LIKES_QUERY = graphql(/* GraphQL */`
  query UserLikes(
    $userId: Int!
    $likesInput: QueryInput = {
      pagination: {
        first: 20
      }
    }
    $imagesInput: QueryInput = {
      pagination: {
        first: 1
      }
    }
  ) {
    user(id: $userId) {
      id
      likes(input: $likesInput) {
        pageInfo {
          hasPreviousPage
          hasNextPage
          startCursor
          endCursor
        }
        edges {
          node {
            id
            brand
            name
            images(input: $imagesInput) {
              edges {
                node {
                  id
                  url
                }
              }
            }
            votes {
              id
              likes
              dislikes
              myVote
            }
          }
        }
      }
    }
  }
`)

export type FlattenedUserLikes = FlattenType<NonNullable<UserLikesQuery['user']>>['likes']
export type UserLikesFragrance = FlattenedUserLikes[number]

const useUserLikes = (userId: number, limit: number = LIKES_LIMIT): PaginatedQueryHookReturn<FlattenedUserLikes> => {
  const variables = useMemo<UserLikesQueryVariables>(() => ({
    userId,
    likesInput: {
      pagination: {
        first: limit
      }
    }
  }), [userId, limit])

  const { data, loading, error, fetchMore, refetch } = useQuery(USER_LIKES_QUERY, {
    variables,
    skip: userId === INVALID_ID
  })

  const getMore = useCallback(() => {
    if (data?.user == null) return

    const pageInfo = data.user.likes.pageInfo
    const { hasNextPage, endCursor } = pageInfo

    if (!hasNextPage || (endCursor == null)) return

    const newVariables: UserLikesQueryVariables = {
      ...variables,
      likesInput: {
        pagination: {
          ...variables.likesInput?.pagination,
          after: endCursor
        }
      }
    }

    void fetchMore({ variables: newVariables })
  }, [data, variables, fetchMore])

  const refresh = useCallback(() => {
    void refetch(variables)
  }, [variables, refetch])

  const likes = useMemo<FlattenedUserLikes>(() =>
    flattenConnection(data?.user?.likes).map(like =>
      ({
        ...like,
        images: flattenConnection(like.images)
      })
    ),
  [data?.user?.likes])

  return {
    data: likes,
    pageInfo: data?.user?.likes.pageInfo,
    error,
    loading,

    getMore,
    refresh
  }
}

export default useUserLikes
