import { graphql } from '@/generated'
import { useMutation } from '@apollo/client'

export const SIGN_UP_MUTATION = graphql(/* GraphQL */`
  mutation SignUp(
    $email: String!
    $password: String!
  ) {
    signUp(email: $email, password: $password) {
      complete
      delivery {
        attribute
        destination
        method
      }
    }
  }
`)

export const useSignUp = () => {
  const [signUp, { data, loading, error }] = useMutation(SIGN_UP_MUTATION)

  return {
    data: data?.signUp,
    loading,
    error,

    signUp
  }
}
