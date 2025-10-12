import { useQuery } from '@apollo/client/react'
import { NOTE_QUERY } from '../graphql/queries'

export const useNote = (id: string) => {
  const { data, loading: isLoading, error } = useQuery(NOTE_QUERY, { variables: { id } })

  return {
    note: data?.note,
    isLoading,
    error
  }
}