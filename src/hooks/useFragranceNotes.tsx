import { useQuery } from '@apollo/client'
import { useCallback, useMemo } from 'react'
import { graphql } from '../generated'
import { type FragranceNotesQuery, type FragranceNotesQueryVariables } from '../generated/graphql'
import { nodes, INVALID_ID, type QueryHookReturn, type FlattenType } from '../common/util-types'

const NOTES_LIMIT = 12

export interface FlattenedFragranceNotes {
  top: NonNullable<FlattenType<NonNullable<FragranceNotesQuery['fragrance']>>['notes']['top']>
  middle: NonNullable<FlattenType<NonNullable<FragranceNotesQuery['fragrance']>>['notes']['middle']>
  base: NonNullable<FlattenType<NonNullable<FragranceNotesQuery['fragrance']>>['notes']['base']>
}

export interface UseFragranceNotesIncludes {
  includeTop: boolean
  includeMiddle: boolean
  includeBase: boolean
}

const useFragranceNotes = (fragranceId: number, includes?: UseFragranceNotesIncludes): QueryHookReturn<FlattenedFragranceNotes> => {
  const variables = useMemo<FragranceNotesQueryVariables>(() => ({
    fragranceId,
    notesInput: {
      pagination: {
        first: NOTES_LIMIT
      }
    },
    ...includes
  }), [fragranceId, includes])

  const { data, loading, error, refetch } = useQuery(FRAGRANCE_NOTES_QUERY, {
    variables,
    skip: fragranceId === INVALID_ID
  })

  const refresh = useCallback(() => {
    void refetch(variables)
  }, [variables, refetch])

  const notes = useMemo<FlattenedFragranceNotes>(() => ({
    top: nodes(data?.fragrance?.notes.top),
    middle: nodes(data?.fragrance?.notes.middle),
    base: nodes(data?.fragrance?.notes.base)
  }), [data?.fragrance?.notes])

  return {
    data: notes,
    loading,
    error,

    refresh
  }
}

export default useFragranceNotes
