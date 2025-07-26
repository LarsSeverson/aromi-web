import { RESEND_SIGN_UP_CONFIRMATION_MUTATION } from '../graphql/mutations'
import { useMutation } from '@apollo/client'

export const useResendSignUpConfirmationCode = () => {
  const [
    resendSignUpConfirmationCode,
    { data, loading, error }
  ] = useMutation(RESEND_SIGN_UP_CONFIRMATION_MUTATION)

  return {
    data,
    loading,
    error,

    resendSignUpConfirmationCode
  }
}
