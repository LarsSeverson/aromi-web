import { CONFIRM_SIGN_UP_MUTATION } from '@/graphql/mutations/AuthMutations'
import { useMutation } from '@apollo/client'

export const useConfirmSignUp = () => {
  const [
    confirmSignUp,
    { data, loading, error }
  ] = useMutation(CONFIRM_SIGN_UP_MUTATION)

  return {
    data,
    loading,
    error,

    confirmSignUp
  }
}
