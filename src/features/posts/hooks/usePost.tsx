import { useQuery } from '@apollo/client/react'
import { POST_QUERY } from '../graphql/queries'

export const usePost = (id: string) => {
  const {
    data,
    loading: isLoading,
    error,
    refetch
  } = useQuery(POST_QUERY, { variables: { id } })

  return {
    post: data?.post,
    isLoading,
    error,
    refetch
  }
}