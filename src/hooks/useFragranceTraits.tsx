import { useQuery } from '@apollo/client'
import { useCallback, useMemo } from 'react'
import { graphql } from '../generated'
import { type FragranceTraitsQuery, type FragranceTraitsQueryVariables } from '../generated/graphql'
import { INVALID_ID, type QueryHookReturn } from '../common/util-types'

const FRAGRANCE_TRAITS_QUERY = graphql(/* GraphQL */ `
  query FragranceTraits($fragranceId: Int!) {
    fragrance(id: $fragranceId) {
      id
      traits {
        type 
        voteScore
        myVote
      }
    }
  }
`)

export type FragranceTraitsQueryTraits = NonNullable<FragranceTraitsQuery['fragrance']>['traits']

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

  return {
    data: data?.fragrance?.traits ?? [],
    loading,
    error,

    refresh
  }
}

export default useFragranceTraits
