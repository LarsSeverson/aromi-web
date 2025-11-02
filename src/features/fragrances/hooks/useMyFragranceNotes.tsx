import { useQuery } from '@apollo/client/react'
import { MY_FRAGRANCE_NOTES_QUERY } from '../graphql/queries'

export const useMyFragranceNotes = (fragranceId: string) => {
  const { data, loading: isLoading, error } = useQuery(MY_FRAGRANCE_NOTES_QUERY, { variables: { fragranceId } })

  const myNotes = data?.fragrance?.myNotes ?? []

  return {
    notes: myNotes,
    isLoading,
    error
  }
}