import type { SignUpInput } from '@/generated/graphql'
import { SIGN_UP_MUTATION } from '../graphql/mutations'
import { useMutation } from '@apollo/client/react'
import { wrapQuery } from '@/utils/util'

export const useSignUp = () => {
  const [signUpInner] = useMutation(SIGN_UP_MUTATION)

  const signUp = (input: SignUpInput) => {
    return wrapQuery(signUpInner({ variables: { input } })).map(data => data.signUp)
  }

  return { signUp }
}
