import { useQuery } from '@apollo/client'
import { graphql } from '../generated'
import { type UserLikesQueryVariables, type UserLikesQuery } from '../generated/graphql'
import { flattenConnection, type FlattenType, INVALID_ID, type PaginatedQueryHookReturn } from '../common/util-types'
import { useCallback, useMemo } from 'react'

const LIKES_LIMIT = 20

const USER_LIKES_QUERY = graphql(/* GraphQL */`
  query UserLikes(
    $userId: Int!
    $likesInput: PaginationInput = {
      first: 20
    }
    $imagesInput: PaginationInput = {
      first: 1
    }
  ) {
    user(id: $userId) {
      id
      likes(input: $likesInput) {
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
  }
`)

export type FlattenedUserLikes = FlattenType<NonNullable<UserLikesQuery['user']>>['likes']
export type UserLikesFragrance = FlattenedUserLikes[number]

const useUserLikes = (userId: number, limit: number = LIKES_LIMIT): PaginatedQueryHookReturn<FlattenedUserLikes> => {
  const variables = useMemo<UserLikesQueryVariables>(() => ({
    userId,
    likesInput: {
      first: limit
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
        ...variables.likesInput,
        after: endCursor
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
