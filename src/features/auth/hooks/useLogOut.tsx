import { LOG_OUT_MUTATION } from '../graphql/mutations'
import { useMutation } from '@apollo/client/react'
import { wrapQuery } from '@/utils/util'

export const useLogOut = () => {
  const [logOutInner] = useMutation(LOG_OUT_MUTATION)

  const logOut = () => {
    return wrapQuery(logOutInner()).map(data => data.logOut)
  }

  return { logOut }
}
