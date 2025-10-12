import { useQuery } from '@apollo/client/react'
import { ACCORD_QUERY } from '../graphql/queries'

export const useAccord = (id: string) => {
  const { data, loading: isLoading, error } = useQuery(ACCORD_QUERY, { variables: { id } })

  return {
    accord: data?.accord,
    isLoading,
    error
  }
}