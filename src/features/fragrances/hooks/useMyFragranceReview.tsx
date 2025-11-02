import { useQuery } from '@apollo/client/react'
import { MY_FRAGRANCE_REVIEW_QUERY } from '../graphql/queries'

export const useMyFragranceReview = (fragranceId: string) => {
  const { data, loading: isLoading, error } = useQuery(MY_FRAGRANCE_REVIEW_QUERY, { variables: { fragranceId } })

  const myReview = data?.fragrance.myReview

  return {
    myReview,
    isLoading,
    error
  }
}