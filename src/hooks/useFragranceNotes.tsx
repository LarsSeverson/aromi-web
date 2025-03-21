import { useQuery } from '@apollo/client'
import { useCallback, useMemo } from 'react'
import { graphql } from '../generated'
import { type FragranceNotesQuery, type FragranceNotesQueryVariables } from '../generated/graphql'
import { flattenConnection, INVALID_ID, type QueryHookReturn, type FlattenType } from '../common/util-types'

const NOTES_LIMIT = 12

const FRAGRANCE_NOTES_QUERY = graphql(/* GraphQL */ `
  query FragranceNotes(
    $fragranceId: Int!
    $includeTop: Boolean = false
    $includeMiddle: Boolean = false
    $includeBase: Boolean = false
    $notesInput: NotesInput = {
      pagination: {
        first: 12 
        sort: {
          by: votes
        }
      }
      fill: false
    }
  ) {
    fragrance(id: $fragranceId) {
      id
      notes {
        top(input: $notesInput) @include(if: $includeTop) {
          edges {
            node {
              id
              noteId
              name
              icon
              layer
              votes
              myVote
            }
          }
          pageInfo {
            hasPreviousPage
            hasNextPage
            startCursor
            endCursor
          }
        }
        middle(input: $notesInput) @include(if: $includeMiddle) {
          edges {
            node {
              id
              noteId
              name
              icon
              layer
              votes
              myVote
            }
          }
          pageInfo {
            hasPreviousPage
            hasNextPage
            startCursor
            endCursor
          }
        }
        base(input: $notesInput) @include(if: $includeBase) {
          edges {
            node {
              id
              noteId
              name
              icon
              layer
              votes
              myVote
            }
          }
          pageInfo {
            hasPreviousPage
            hasNextPage
            startCursor
            endCursor
          }
        }
      }
    }
  }
`)

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
    top: flattenConnection(data?.fragrance?.notes.top),
    middle: flattenConnection(data?.fragrance?.notes.middle),
    base: flattenConnection(data?.fragrance?.notes.base)
  }), [data?.fragrance?.notes])

  return {
    data: notes,
    loading,
    error,

    refresh
  }
}

export default useFragranceNotes
