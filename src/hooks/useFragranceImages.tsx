import { NetworkStatus, useQuery } from '@apollo/client'
import { useCallback, useMemo } from 'react'
import { graphql } from '../generated'
import { flattenConnection, INVALID_ID, type PaginatedQueryHookReturn, type FlattenType } from '../common/util-types'
import { type FragranceImagesQueryVariables, type FragranceImagesQuery } from '../generated/graphql'

const IMAGES_LIMIT = 5

const FRAGRANCE_IMAGES_QUERY = graphql(/* GraphQL */ `
  query FragranceImages(
    $fragranceId: Int!
    $imagesInput: QueryInput = {
      pagination: {
        first: 5 
      }
    }
  ) {
    fragrance(id: $fragranceId) {
      id
      images(input: $imagesInput) {
        edges {
          node {
            id
            url
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

export type FlattenedFragranceQuery = FlattenType<NonNullable<FragranceImagesQuery['fragrance']>>
export type FlattenedFragranceQueryImages = FlattenType<FlattenedFragranceQuery['images']>

const useFragranceImages = (fragranceId: number, limit: number = IMAGES_LIMIT): PaginatedQueryHookReturn<FlattenedFragranceQueryImages> => {
  const variables = useMemo<FragranceImagesQueryVariables>(() => ({
    fragranceId,
    imagesInput: {
      pagination: {
        first: limit
      }
    }
  }), [fragranceId, limit])

  const { data, loading, error, networkStatus, refetch, fetchMore } = useQuery(FRAGRANCE_IMAGES_QUERY, {
    variables,
    notifyOnNetworkStatusChange: true,
    skip: fragranceId === INVALID_ID
  })

  const getMore = useCallback(() => {
    if (data?.fragrance == null) return

    const pageInfo = data.fragrance.images.pageInfo
    const { hasNextPage, endCursor } = pageInfo

    if (!hasNextPage || (endCursor == null)) return

    const newVariables: FragranceImagesQueryVariables = {
      ...variables,
      imagesInput: {
        pagination: {
          ...variables.imagesInput?.pagination,
          after: endCursor
        }
      }
    }

    void fetchMore({ variables: newVariables })
  }, [data?.fragrance, fetchMore, variables])

  const refresh = useCallback(() => {
    void refetch()
  }, [refetch])

  const images = useMemo<FlattenedFragranceQuery['images']>(() =>
    flattenConnection(data?.fragrance?.images),
  [data?.fragrance?.images])

  return {
    data: images,
    pageInfo: data?.fragrance?.images.pageInfo,
    loading,
    loadingMore: networkStatus === NetworkStatus.fetchMore,
    error,

    refresh,
    getMore
  }
}

export default useFragranceImages
