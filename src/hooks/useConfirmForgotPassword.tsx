import { graphql } from '@/generated'
import { useMutation } from '@apollo/client'

export const CONFIRM_FORGOT_PASSWORD_MUTATION = graphql(/* GraphQL */`
  mutation ConfirmForgotPassword(
    $email: String!
    $confirmationCode: String!
    $newPassword: String!
  ) {
    confirmForgotPassword (
      email: $email, 
      confirmationCode: $confirmationCode, 
      newPassword: $newPassword
    )
  }
`)

export const useConfirmForgotPassword = () => {
  const [confirmForgotPassword, { data, loading, error }] = useMutation(CONFIRM_FORGOT_PASSWORD_MUTATION)

  return {
    data,
    loading,
    error,

    confirmForgotPassword
  }
}
