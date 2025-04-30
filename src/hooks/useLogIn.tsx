import { graphql } from '@/generated'
import { useMutation } from '@apollo/client'

export const LOG_IN_MUTATION = graphql(/* GraphQL */`
  mutation LogIn (
    $email: String!
    $password: String!
  ){
    logIn (email: $email, password: $password) {
      idToken
      accessToken
      expiresAt
    }
  }  
`)

export const useLogIn = () => {
  const [logIn, { data, loading, error }] = useMutation(LOG_IN_MUTATION)

  return {
    data: data?.logIn,
    loading,
    error,

    logIn
  }
}
