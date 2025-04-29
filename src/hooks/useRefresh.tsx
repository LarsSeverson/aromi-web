import { graphql } from '@/generated'
import { useMutation } from '@apollo/client'

export const REFRESH_QUERY = graphql(/* GraphQL */`
  mutation Refresh {
    refresh {
      idToken
      accessToken
      expiresAt
    }
  }  
`)

export const useRefresh = () => {
  const [refresh, { data, error, loading }] = useMutation(REFRESH_QUERY)

  return {
    data: data?.refresh,
    error,
    loading,

    refresh
  }
}
