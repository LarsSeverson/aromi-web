import { useQuery } from '@apollo/client'
import { graphql } from '../generated'
import { type UserCollectionsQuery, type UserCollectionsQueryVariables } from '../generated/graphql'
import { nodes, type FlattenType, INVALID_ID, type PaginatedQueryHookReturn } from '../common/util-types'
import { useCallback, useMemo } from 'react'

const COLLECTIONS_LIMIT = 20

export const USER_COLLECTIONS_QUERY = graphql(/* GraphQL */`
  query UserCollections(
    $userId: Int!
    $collectionsInput: PaginationInput = {
      first: 20
    }
    $collectionItemsInput: PaginationInput = {
      first: 4
    }
    $imagesInput: PaginationInput = {
      first: 1
    }
  ) {
    user(id: $userId) {
      id
      collections(input: $collectionsInput) {
        edges {
          node {
            id
            name
            user {
              id
              username
            }
            items(input: $collectionItemsInput) {
              edges {
                node {
                  id
                  fragrance {
                    id
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

export type FlattenedUserCollections = FlattenType<NonNullable<UserCollectionsQuery['user']>>['collections']

const useUserCollections = (userId: number, limit: number = COLLECTIONS_LIMIT): PaginatedQueryHookReturn<FlattenedUserCollections> => {
  const variables = useMemo<UserCollectionsQueryVariables>(() => ({
    userId,
    collectionsInput: {
      first: limit
    }
  }), [userId, limit])

  const { data, loading, error, fetchMore, refetch } = useQuery(USER_COLLECTIONS_QUERY, { variables, skip: userId === INVALID_ID })

  const getMore = useCallback(() => {
    if (data?.user == null) return

    const pageInfo = data.user.collections.pageInfo
    const { hasNextPage, endCursor } = pageInfo

    if (!hasNextPage || (endCursor == null)) return

    const newVariables: UserCollectionsQueryVariables = {
      ...variables,
      collectionsInput: {
        ...variables.collectionsInput,
        after: endCursor
      }
    }

    void fetchMore({ variables: newVariables })
  }, [data, variables, fetchMore])

  const refresh = useCallback(() => {
    void refetch(variables)
  }, [variables, refetch])

  const collections = useMemo<FlattenedUserCollections>(() =>
    nodes(data?.user?.collections).map(collection => ({
      ...collection,
      items: nodes(collection.items).map(item => ({
        ...item,
        fragrance: {
          ...item.fragrance,
          images: nodes(item.fragrance.images)
        }
      }))
    })),
  [data?.user?.collections])

  return {
    data: collections,
    pageInfo: data?.user?.collections.pageInfo,
    loading,
    error,

    getMore,
    refresh
  }
}

export default useUserCollections
