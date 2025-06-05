import { graphql } from '@/generated'
import { useMutation } from '@apollo/client'

export const REFRESH_MUTATION = graphql(/* GraphQL */`
  mutation Refresh {
    refresh {
      idToken
      accessToken
      expiresIn
    }
  }  
`)

export const useRefresh = () => {
  const [refresh, { data, error, loading }] = useMutation(REFRESH_MUTATION)

  return {
    data: data?.refresh,
    error,
    loading,

    refresh
  }
}
