import { useQuery } from '@apollo/client'
import { graphql } from '../generated'
import { type UserCollectionsQuery, type UserCollectionsQueryVariables } from '../generated/graphql'
import { flattenConnection, type FlattenType, INVALID_ID, type PaginatedQueryHookReturn } from '../common/util-types'
import { useCallback, useMemo } from 'react'

const COLLECTIONS_LIMIT = 20

const USER_COLLECTIONS_QUERY = graphql(/* GraphQL */`
  query UserCollections(
    $userId: Int!
    $collectionsInput: QueryInput = {
      pagination: {
        first: 20
      }
    }
    $collectionItemsInput: QueryInput = {
      pagination: {
        first: 4
        sort: {
          by: added
          direction: asc
        }
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
      collections(input: $collectionsInput) {
        pageInfo {
          hasPreviousPage
          hasNextPage
          startCursor
          endCursor
        }
        edges {
          node {
            id
            name
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
                          url
                        }
                      }
                    }
                  }
                }
              }
            }
            user {
              id
              username
            }
          }
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
      pagination: {
        first: limit
      }
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
        pagination: {
          ...variables.collectionsInput?.pagination,
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
            collections: {
              edges: c1.collections.edges.concat(c2.collections.edges),
              pageInfo: c2.collections.pageInfo
            }
          }
        }
      }
    })
  }, [data, variables, fetchMore])

  const refresh = useCallback(() => {
    void refetch(variables)
  }, [variables, refetch])

  const collections = useMemo<FlattenedUserCollections>(() =>
    flattenConnection(data?.user?.collections).map(collection => ({
      ...collection,
      items: flattenConnection(collection.items).map(item => ({
        ...item,
        fragrance: {
          ...item.fragrance,
          images: flattenConnection(item.fragrance.images)
        }
      }))
    })),
  [data?.user?.collections])

  return {
    data: collections,
    pageInfo: data?.user?.collections.pageInfo,
    error,
    loading,

    getMore,
    refresh
  }
}

export default useUserCollections
