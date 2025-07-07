import { FRAGRANCE_TRAITS_QUERY } from '@/graphql/queries/FragranceQueries'
import { useQuery } from '@apollo/client'

const useFragranceTraits = (
  fragranceId: number
) => {
  const {
    data, loading, error,
    refetch
  } = useQuery(FRAGRANCE_TRAITS_QUERY, {
    variables: { fragranceId }
  })

  const traits = data?.fragrance?.traits ?? []

  return {
    data: traits,
    loading,
    error,

    refetch
  }
}

export default useFragranceTraits
