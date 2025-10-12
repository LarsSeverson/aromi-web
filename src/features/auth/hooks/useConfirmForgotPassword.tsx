import type { ConfirmForgotPasswordInput } from '@/generated/graphql'
import { CONFIRM_FORGOT_PASSWORD_MUTATION } from '../graphql/mutations'
import { useMutation } from '@apollo/client/react'
import { wrapQuery } from '@/utils/util'

export const useConfirmForgotPassword = () => {
  const [confirmForgotPasswordInner] = useMutation(CONFIRM_FORGOT_PASSWORD_MUTATION)

  const confirmForgotPassword = (input: ConfirmForgotPasswordInput) => {
    return wrapQuery(confirmForgotPasswordInner({ variables: { input } })).map(data => data.confirmForgotPassword)
  }

  return { confirmForgotPassword }
}
