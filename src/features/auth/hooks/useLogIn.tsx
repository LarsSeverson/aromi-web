import type { LogInInput } from '@/generated/graphql'
import { LOG_IN_MUTATION } from '../graphql/mutations'
import { useMutation } from '@apollo/client/react'
import { wrapQuery } from '@/utils/util'

export const useLogIn = () => {
  const [logInInner] = useMutation(LOG_IN_MUTATION)

  const logIn = (input: LogInInput) => {
    return wrapQuery(logInInner({ variables: { input } })).map(data => data.logIn)
  }

  return { logIn }
}
