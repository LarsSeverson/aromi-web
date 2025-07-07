import { MY_FRAGRANCE_REVIEW_QUERY } from '@/graphql/queries/FragranceQueries'
import { useQuery } from '@apollo/client'

export const useMyReview = (
  fragranceId: number
) => {
  const {
    data, loading, error,
    refetch
  } = useQuery(MY_FRAGRANCE_REVIEW_QUERY, {
    variables: { fragranceId }
  })

  const myReview = data?.fragrance?.myReview

  return {
    data: myReview,
    loading,
    error,

    refetch
  }
}
