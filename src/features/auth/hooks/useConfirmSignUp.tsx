import type { ConfirmSignUpInput } from '@/generated/graphql'
import { CONFIRM_SIGN_UP_MUTATION } from '../graphql/mutations'
import { useMutation } from '@apollo/client/react'
import { wrapQuery } from '@/utils/util'

export const useConfirmSignUp = () => {
  const [confirmSignUpInner] = useMutation(CONFIRM_SIGN_UP_MUTATION)

  const confirmSignUp = (
    input: ConfirmSignUpInput
  ) => {
    return wrapQuery(confirmSignUpInner({ variables: { input } })).map(data => data.confirmSignUp)
  }

  return { confirmSignUp }
}
