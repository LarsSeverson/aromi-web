import { graphql } from '@/generated'
import { useMutation } from '@apollo/client'

export const RESEND_SIGN_UP_CONFIRMATION_CODE_MUTATION = graphql(/* GraphQL */`
  mutation ResendSignUpConfirmationCode(
    $email: String!
  ) {
    resendSignUpConfirmationCode(email: $email)
  }
`)

export const useResendSignUpConfirmationCode = () => {
  const [resendSignUpConfirmationCode, { data, loading, error }] = useMutation(RESEND_SIGN_UP_CONFIRMATION_CODE_MUTATION)

  return {
    data,
    loading,
    error,

    resendSignUpConfirmationCode
  }
}
