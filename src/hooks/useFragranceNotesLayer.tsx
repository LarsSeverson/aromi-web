import { NetworkStatus, useQuery } from '@apollo/client'
import { useCallback, useMemo } from 'react'
import { graphql } from '../generated'
import { type FragranceNotesLayerQuery, type FragranceNotesLayerQueryVariables, NoteLayer } from '../generated/graphql'
import { flattenConnection, INVALID_ID, type FlattenType, type PaginatedQueryHookReturn } from '../common/util-types'

const NOTES_LIMIT = 18

const FRAGRANCE_NOTES_LAYER_QUERY = graphql(/* GraphQL */ `
  query FragranceNotesLayer(
    $fragranceId: Int!
    $includeTop: Boolean = false
    $includeMiddle: Boolean = false
    $includeBase: Boolean = false
    $notesInput: NotesInput = {
      pagination: {
        first: 18
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

type FragranceNotesData = Pick<NonNullable<FragranceNotesLayerQuery['fragrance']>['notes'], 'top' | 'middle' | 'base'>
export type FlattenedFragranceNotesLayerReturn = NonNullable<FlattenType<FragranceNotesData>['base' | 'middle' | 'top']>

const useFragranceNotesLayer = (fragranceId: number, layer: NoteLayer, fill: boolean = false): PaginatedQueryHookReturn<FlattenedFragranceNotesLayerReturn> => {
  const key = useMemo<keyof FragranceNotesData>(() => layer.toLowerCase() as keyof FragranceNotesData, [layer])
  const variables = useMemo<FragranceNotesLayerQueryVariables>(() => ({
    fragranceId,
    notesInput: {
      pagination: {
        first: NOTES_LIMIT
      },
      fill
    },
    includeTop: layer === NoteLayer.Top,
    includeMiddle: layer === NoteLayer.Middle,
    includeBase: layer === NoteLayer.Base
  }), [fragranceId, layer, fill])

  const { data, loading, error, networkStatus, fetchMore, refetch } = useQuery(FRAGRANCE_NOTES_LAYER_QUERY, {
    variables,
    notifyOnNetworkStatusChange: true,
    skip: fragranceId === INVALID_ID
  })

  const getMore = useCallback(() => {
    if (data?.fragrance == null) return

    const pageInfo = data.fragrance.notes[key]?.pageInfo
    if (pageInfo == null) return

    const { hasNextPage, endCursor } = pageInfo

    if (!hasNextPage || (endCursor == null)) return

    const newVariables: FragranceNotesLayerQueryVariables = {
      ...variables,
      notesInput: {
        pagination: {
          ...variables.notesInput?.pagination,
          after: endCursor
        }
      }
    }

    void fetchMore({ variables: newVariables })
  }, [data, key, variables, fetchMore])

  const refresh = useCallback(() => {
    void refetch(variables)
  }, [variables, refetch])

  const notes = useMemo<NonNullable<FlattenedFragranceNotesLayerReturn>>(() =>
    flattenConnection(data?.fragrance?.notes[key])
  , [data?.fragrance?.notes, key])

  return {
    data: notes,
    pageInfo: data?.fragrance?.notes[key]?.pageInfo,
    loading,
    loadingMore: networkStatus === NetworkStatus.fetchMore,
    error,

    refresh,
    getMore
  }
}

export default useFragranceNotesLayer
