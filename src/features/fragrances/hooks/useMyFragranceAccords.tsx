import { useQuery } from '@apollo/client/react'
import { MY_FRAGRANCE_ACCORDS_QUERY } from '../graphql/queries'

export const useMyFragranceAccords = (fragranceId: string) => {
  const { data, loading: isLoading, error } = useQuery(MY_FRAGRANCE_ACCORDS_QUERY, { variables: { fragranceId } })

  const myAccords = data?.fragrance?.myAccords ?? []

  return {
    accords: myAccords,
    isLoading,
    error
  }
}