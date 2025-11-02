import { useQuery } from '@apollo/client/react'
import { MY_FRAGRANCE_TRAITS_QUERY } from '../graphql/queries'

export const useMyFragranceTraits = (fragranceId: string) => {
  const { data, loading: isLoading, error } = useQuery(MY_FRAGRANCE_TRAITS_QUERY, { variables: { fragranceId } })

  const myTraits = data?.fragrance?.myTraits ?? []

  return {
    myTraits,
    isLoading,
    error
  }
}