import { FRAGRANCE_TRAITS_QUERY } from '@/features/fragrance/graphql/queries'
import { useQuery } from '@apollo/client'
import { useMemo } from 'react'
import { type FragranceTraitType } from '@/generated/graphql'
import { type IFragranceTraitSummary } from '../types'

const useFragranceTraits = (
  fragranceId: number
) => {
  const {
    data, loading, error,
    refetch
  } = useQuery(FRAGRANCE_TRAITS_QUERY, {
    variables: { fragranceId }
  })

  const traits = useMemo(() => data?.fragrance?.traits ?? [], [data?.fragrance?.traits])

  const traitMap = useMemo(() => {
    const map = traits
      .reduce(
        (map, trait) => map.set(trait.type, trait),
        new Map<FragranceTraitType, IFragranceTraitSummary>()
      )

    return map
  }, [traits])

  return {
    data: traits,
    map: traitMap,
    error,

    loading,

    refetch
  }
}

export default useFragranceTraits
