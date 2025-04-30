import { graphql } from '@/generated'
import { useMutation } from '@apollo/client'

export const LOG_OUT_MUTATION = graphql(/* GraphQL */`
  mutation LogOut {
    logOut
  }
`)

export const useLogOut = () => {
  const [logOut, { data, loading, error }] = useMutation(LOG_OUT_MUTATION)

  return {
    data,
    loading,
    error,

    logOut
  }
}
