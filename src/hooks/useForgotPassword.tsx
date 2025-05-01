import { graphql } from '@/generated'
import { useMutation } from '@apollo/client'

export const FORGOT_PASSWORD_MUTATION = graphql(/* GraphQL */`
  mutation ForgotPassword(
    $email: String!
  ) {
    forgotPassword(email: $email)
  }  
`)

export const useForgotPassword = () => {
  const [forgotPassword, { data, loading, error }] = useMutation(FORGOT_PASSWORD_MUTATION)

  return {
    data,
    loading,
    error,

    forgotPassword
  }
}
