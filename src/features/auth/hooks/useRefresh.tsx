import { REFRESH_MUTATION } from '../graphql/mutations'
import { useMutation } from '@apollo/client/react'
import { wrapQuery } from '@/utils/util'

export const useRefresh = () => {
  const [refreshInner] = useMutation(REFRESH_MUTATION)

  const refresh = () => {
    return wrapQuery(refreshInner()).map(data => data.refresh)
  }

  return { refresh }
}
