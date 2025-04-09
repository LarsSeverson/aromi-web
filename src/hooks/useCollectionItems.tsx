import { useQuery } from '@apollo/client'
import { graphql } from '../generated'
import { flattenConnection, type FlattenType, INVALID_ID, type PaginatedQueryHookReturn } from '../common/util-types'
import { useCallback, useMemo } from 'react'
import { type CollectionItemsQuery, type CollectionItemsQueryVariables } from '@/generated/graphql'

const ITEMS_LIMIT = 20

export const COLLECTION_ITEMS_QUERY = graphql(/* GraphQL */`
  query CollectionItems(
    $collectionId: Int!
    $itemsInput: QueryInput = {
      pagination: {
        first: 20
        sort: {
          by: added
          direction: desc
        }
      }
    }
    $imagesInput: QueryInput = {
      pagination: {
        first: 1
      }
    }
  ) {
    collection(id: $collectionId) {
      id
      items(input: $itemsInput) {
        pageInfo {
          hasPreviousPage
          hasNextPage
          startCursor
          endCursor
        }
        edges {
          node {
            id
            dCreated
            dModified
            fragrance {
              id
              brand
              name
              votes {
                id
                dislikes
                likes
                myVote
              }
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
    }
  }
`)

export type FlattenedCollectionItems = FlattenType<NonNullable<CollectionItemsQuery['collection']>['items']>

const useUserCollections = (collectionId: number, limit: number = ITEMS_LIMIT): PaginatedQueryHookReturn<FlattenedCollectionItems> => {
  const variables = useMemo<CollectionItemsQueryVariables>(() => ({
    collectionId,
    itemsInput: {
      pagination: {
        first: limit
      }
    }
  }), [collectionId, limit])

  const { data, loading, error, fetchMore, refetch } = useQuery(COLLECTION_ITEMS_QUERY, { variables, skip: collectionId === INVALID_ID })

  const getMore = useCallback(() => {
    if (data?.collection == null) return

    const pageInfo = data.collection?.items.pageInfo
    const { hasNextPage, endCursor } = pageInfo

    if (!hasNextPage || (endCursor == null)) return

    const newVariables: CollectionItemsQueryVariables = {
      ...variables,
      itemsInput: {
        pagination: {
          ...variables.itemsInput?.pagination,
          after: endCursor
        }
      }
    }

    void fetchMore({ variables: newVariables })
  }, [data, variables, fetchMore])

  const refresh = useCallback(() => {
    void refetch(variables)
  }, [variables, refetch])

  const collections = useMemo<FlattenedCollectionItems>(() =>
    flattenConnection(data?.collection?.items).map(item => ({
      ...item,
      fragrance: {
        ...item.fragrance,
        images: flattenConnection(item.fragrance.images)
      }
    })),
  [data?.collection])

  return {
    data: collections,
    pageInfo: data?.collection?.items.pageInfo,
    loading,
    error,

    getMore,
    refresh
  }
}

export default useUserCollections
