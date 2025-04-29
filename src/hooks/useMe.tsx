import { graphql } from '@/generated'
import { useQuery } from '@apollo/client'

export const ME_QUERY = graphql(/* GraphQL */`
  query MeQuery {
    me {
      id
      username
      email
    }
  }  
`)

export const useMe = () => {
  const { data, loading, error, refetch: refresh } = useQuery(ME_QUERY)

  return {
    me: data?.me,
    loading,
    error,
    refresh
  }
}
