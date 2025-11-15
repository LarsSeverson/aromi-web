import type { ChangePasswordInput } from '@/generated/graphql'
import { CHANGE_PASSWORD_MUTATION } from '../graphql/mutations'
import { useMutation } from '@apollo/client/react'
import { wrapQuery } from '@/utils/util'

export const useChangePassword = () => {
  const [changePasswordInner] = useMutation(CHANGE_PASSWORD_MUTATION)

  const changePassword = (input: ChangePasswordInput) => {
    return wrapQuery(changePasswordInner({ variables: { input } }))
  }

  return { changePassword }
}