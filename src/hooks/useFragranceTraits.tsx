import { useQuery } from '@apollo/client'
import { useCallback, useMemo } from 'react'
import { graphql } from '../generated'
import { FragranceTraitType, type FragranceTraitsQuery, type FragranceTraitsQueryVariables } from '../generated/graphql'
import { INVALID_ID, type QueryHookReturn } from '../common/util-types'

const FRAGRANCE_TRAITS_QUERY = graphql(/* GraphQL */ `
  query FragranceTraits($fragranceId: Int!) {
    fragrance(id: $fragranceId) {
      id
      traits {
        gender {
          id
          trait
          value
          myVote
        }
        longevity {
          id
          trait
          value
          myVote
        }
        sillage {
          id
          trait
          value
          myVote
        }
        complexity {
          id
          trait
          value
          myVote
        }
        balance {
          id
          trait
          value
          myVote
        }
        allure {
          id
          trait
          value
          myVote
        }
      }
    }
  }
`)

export type FragranceTraitsQueryTraits = NonNullable<FragranceTraitsQuery['fragrance']>['traits']

const EMPTY_TRAITS: FragranceTraitsQueryTraits = {
  gender: { id: 0, trait: FragranceTraitType.Gender, value: 50, myVote: null },
  longevity: { id: 0, trait: FragranceTraitType.Longevity, value: 50, myVote: null },
  sillage: { id: 0, trait: FragranceTraitType.Sillage, value: 50, myVote: null },
  complexity: { id: 0, trait: FragranceTraitType.Complexity, value: 50, myVote: null },
  balance: { id: 0, trait: FragranceTraitType.Balance, value: 50, myVote: null },
  allure: { id: 0, trait: FragranceTraitType.Allure, value: 50, myVote: null }
}

const useFragranceTraits = (fragranceId: number): QueryHookReturn<FragranceTraitsQueryTraits> => {
  const variables = useMemo<FragranceTraitsQueryVariables>(() => ({
    fragranceId
  }), [fragranceId])

  const { data, loading, error, refetch } = useQuery(FRAGRANCE_TRAITS_QUERY, {
    variables,
    skip: fragranceId === INVALID_ID
  })

  const refresh = useCallback(() => {
    void refetch(variables)
  }, [variables, refetch])

  const traits: FragranceTraitsQueryTraits = data?.fragrance?.traits ?? EMPTY_TRAITS

  return {
    data: traits,
    loading,
    error,

    refresh
  }
}

export default useFragranceTraits
