import type { ForgotPasswordInput } from '@/generated/graphql'
import { FORGOT_PASSWORD_MUTATION } from '../graphql/mutations'
import { useMutation } from '@apollo/client/react'
import { wrapQuery } from '@/utils/util'

export const useForgotPassword = () => {
  const [forgotPasswordInner] = useMutation(FORGOT_PASSWORD_MUTATION)

  const forgotPassword = (input: ForgotPasswordInput) => {
    return wrapQuery(forgotPasswordInner({ variables: { input } })).map(data => data.forgotPassword)
  }

  return { forgotPassword }
}
