import { wrapQuery } from '@/utils/util'
import { MY_QUERY } from '../graphql/queries'
import { useLazyQuery } from '@apollo/client/react'

export const useMe = () => {
  const [loadInner, { data, loading: isLoading, error, refetch }] = useLazyQuery(MY_QUERY)

  const refresh = () => {
    return wrapQuery(refetch()).map(data => data.me)
  }

  const load = () => {
    return wrapQuery(loadInner()).map(data => data.me)
  }

  return {
    me: data?.me ?? null,

    isLoading,
    error,

    load,
    refresh
  }
}
