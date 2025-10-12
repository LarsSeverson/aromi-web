import { FRAGRANCE_TRAITS_QUERY } from '../graphql/queries'
import { useQuery } from '@apollo/client/react'

export const useFragranceTraits = (fragranceId: string) => {
  const { data, loading, error } = useQuery(FRAGRANCE_TRAITS_QUERY, { variables: { fragranceId } })

  const traits = data?.fragrance.traits ?? []

  return {
    traits,
    isLoading: loading,
    error
  }
}
