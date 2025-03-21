import { useQuery } from '@apollo/client'
import { useCallback } from 'react'
import { graphql } from '../generated'
import { INVALID_ID, type QueryHookReturn } from '../common/util-types'
import { type FragranceInfoQuery } from '../generated/graphql'

const FRAGRANCE_INFO_QUERY = graphql(/* GraphQL */ `
  query FragranceInfo(
    $fragranceId: Int!
  ) {
    fragrance(id: $fragranceId) {
      id
      brand
      name
      rating
      reviewsCount

      votes {
        id
        likes
        dislikes
        myVote
      }
    }
  }
`)

export type FlattenedFragranceInfoQuery = NonNullable<FragranceInfoQuery['fragrance']>
export type FragranceInfo = Pick<FlattenedFragranceInfoQuery, 'id' | 'brand' | 'name' | 'rating' | 'reviewsCount' | 'votes'>

const EMPTY_FRAGRANCE: FragranceInfo = {
  id: -1,
  brand: 'unknown brand name',
  name: 'unknown name',
  rating: 0,
  reviewsCount: 0,
  votes: {
    __typename: undefined,
    id: 0,
    likes: 0,
    dislikes: 0,
    myVote: undefined
  }
}

const useFragranceInfo = (fragranceId: number): QueryHookReturn<FragranceInfo> => {
  const { data, loading, error, refetch } = useQuery(FRAGRANCE_INFO_QUERY, {
    variables: { fragranceId },
    skip: fragranceId === INVALID_ID
  })

  const refresh = useCallback(() => {
    void refetch()
  }, [refetch])

  const fragranceInfo = data?.fragrance ?? EMPTY_FRAGRANCE

  return {
    data: fragranceInfo,
    loading,
    error,

    refresh
  }
}

export default useFragranceInfo
