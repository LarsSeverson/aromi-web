import { graphql } from '@/generated'
import { useMutation } from '@apollo/client'

export const LOGIN_QUERY = graphql(/* GraphQL */`
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
  const [logIn, { data, loading, error }] = useMutation(LOGIN_QUERY)

  return {
    data: data?.logIn,
    loading,
    error,

    logIn
  }
}
