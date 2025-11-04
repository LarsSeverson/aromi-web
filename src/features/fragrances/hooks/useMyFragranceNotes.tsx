import { useQuery } from '@apollo/client/react'
import { MY_FRAGRANCE_NOTES_QUERY } from '../graphql/queries'
import type { NoteLayer } from '@/generated/graphql'

export const useMyFragranceNotes = (fragranceId: string, layer: NoteLayer) => {
  const { data, loading: isLoading, error } = useQuery(MY_FRAGRANCE_NOTES_QUERY, { variables: { fragranceId, layer } })

  const myNotes = data?.fragrance?.myNotes ?? []

  return {
    notes: myNotes,
    isLoading,
    error
  }
}