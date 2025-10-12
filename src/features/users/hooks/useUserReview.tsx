import { useQuery } from '@apollo/client/react'
import { USER_REVIEW_QUERY } from '../graphql/queries'

export const useUserReview = (id: string, reviewId: string) => {
  const { data, loading: isLoading, error } = useQuery(USER_REVIEW_QUERY, { variables: { userId: id, reviewId } })

  const review = data?.user.review

  return {
    review,
    isLoading,
    error
  }
}