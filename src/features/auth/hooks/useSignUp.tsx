import { SIGN_UP_MUTATION } from '../graphql/mutations'
import { useMutation } from '@apollo/client'

export const useSignUp = () => {
  const [
    signUp, { data, loading, error }
  ] = useMutation(SIGN_UP_MUTATION)

  return {
    data,
    loading,
    error,

    signUp
  }
}
