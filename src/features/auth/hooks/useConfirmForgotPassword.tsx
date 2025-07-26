import { CONFIRM_FORGOT_PASSWORD_MUTATION } from '../graphql/mutations'
import { useMutation } from '@apollo/client'

export const useConfirmForgotPassword = () => {
  const [
    confirmForgotPassword,
    { data, loading, error }
  ] = useMutation(CONFIRM_FORGOT_PASSWORD_MUTATION)

  return {
    data,
    loading,
    error,

    confirmForgotPassword
  }
}
