import type { ResendSignUpCodeInput } from '@/generated/graphql'
import { RESEND_SIGN_UP_CODE_MUTATION } from '../graphql/mutations'
import { useMutation } from '@apollo/client/react'
import { wrapQuery } from '@/utils/util'

export const useResendSignUpCode = () => {
  const [resendSignUpCodeInner] = useMutation(RESEND_SIGN_UP_CODE_MUTATION)

  const resendSignUpCode = (input: ResendSignUpCodeInput) => {
    return wrapQuery(resendSignUpCodeInner({ variables: { input } })).map(data => data.resendSignUpCode)
  }

  return { resendSignUpCode }
}
