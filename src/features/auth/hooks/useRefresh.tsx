import { REFRESH_MUTATION } from '../graphql/mutations'
import { useMutation } from '@apollo/client'

export const useRefresh = () => {
  const [
    refresh,
    { data, error, loading }
  ] = useMutation(REFRESH_MUTATION)

  return {
    data,
    error,
    loading,

    refresh
  }
}
