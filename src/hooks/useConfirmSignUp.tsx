import { graphql } from '@/generated'
import { useMutation } from '@apollo/client'

export const CONFIRM_SIGN_UP_MUTATION = graphql(/* GraphQL */`
  mutation ConfirmSignUp(
    $email: String!
    $confirmationCode: String!
  ) {
    confirmSignUp(
      email: $email
      confirmationCode: $confirmationCode
    ) {
      id
    }
  }
`)

export const useConfirmSignUp = () => {
  const [confirmSignUp, { data, loading, error }] = useMutation(CONFIRM_SIGN_UP_MUTATION)

  return {
    data,
    loading,
    error,

    confirmSignUp
  }
}
