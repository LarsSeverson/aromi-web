import { useQuery } from '@apollo/client/react'
import { MY_FRAGRANCE_NOTES_QUERY } from '../graphql/queries'
import { NoteLayer } from '@/generated/graphql'

export const useMyFragranceNotes = (fragranceId: string, layer: NoteLayer | null) => {
  const { data, loading: isLoading, error } = useQuery(
    MY_FRAGRANCE_NOTES_QUERY,
    { variables: { fragranceId, layer: layer ?? NoteLayer.Top } }
  )

  const myNotes = data?.fragrance?.myNotes ?? []

  return {
    notes: myNotes,
    isLoading,
    error
  }
}