import { useQuery } from '@apollo/client'
import { useCallback, useMemo } from 'react'
import { graphql } from '../generated'
import { type QueryHookReturn } from '@/common/util-types'
import { type FragranceReview, type User } from '@/generated/graphql'

const MY_REVIEW_QUERY = graphql(/* GraphQL */ `
  query MyReview($fragranceId: Int!) {
    fragrance(id: $fragranceId) {
      id
      myReview {
        id
        rating
        review
        votes
        dCreated
        dModified
        myVote
        user {
          id
          username
        }
      }
    }
  }
`)

type MyReviewUser = Pick<User, 'username' | 'id'>
export type UseMyReviewReturn = Pick<FragranceReview,
'id' | 'rating' | 'review' | 'votes' | 'dCreated' | 'dModified' | 'myVote'> & { user: MyReviewUser } | null | undefined

export const useMyReview = (fragranceId: number): QueryHookReturn<UseMyReviewReturn> => {
  const variables = useMemo(() => ({ fragranceId }), [fragranceId])
  const { data, loading, error, refetch } = useQuery(MY_REVIEW_QUERY, { variables })

  const refresh = useCallback(() => {
    void refetch(variables)
  }, [refetch, variables])

  return {
    data: data?.fragrance?.myReview,
    loading,
    error,
    refresh
  }
}
