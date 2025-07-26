import { FORGOT_PASSWORD_MUTATION } from '../graphql/mutations'
import { useMutation } from '@apollo/client'

export const useForgotPassword = () => {
  const [
    forgotPassword,
    { data, loading, error }
  ] = useMutation(FORGOT_PASSWORD_MUTATION)

  return {
    data,
    loading,
    error,

    forgotPassword
  }
}
