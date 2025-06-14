import { LOG_IN_MUTATION } from '@/graphql/mutations/AuthMutations'
import { useMutation } from '@apollo/client'

export const useLogIn = () => {
  const [
    logIn,
    { data, loading, error }
  ] = useMutation(LOG_IN_MUTATION)

  return {
    data,
    loading,
    error,

    logIn
  }
}
