import { useMutation } from '@apollo/client'
import { graphql } from '../generated'

const UPSERT_USER_MUTATION = graphql(/* GraphQL */ `
  mutation UpsertUser($email: String!, $cognitoId: String!) {
    upsertUser(email: $email, cognitoId: $cognitoId) {
      id
      email
      username
      cognitoId
      followers
      following
    }
  }
`)

const useUpsertUser = () => {
  const [execute, { data, loading, error }] = useMutation(UPSERT_USER_MUTATION)

  return {
    data: data?.upsertUser,
    error,
    loading,

    upsertUser: execute
  }
}

export default useUpsertUser
