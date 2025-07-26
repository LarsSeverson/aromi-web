import { LOG_OUT_MUTATION } from '../graphql/mutations'
import { useMutation } from '@apollo/client'

export const useLogOut = () => {
  const [
    logOut,
    { data, loading, error }
  ] = useMutation(LOG_OUT_MUTATION)

  return {
    data,
    loading,
    error,

    logOut
  }
}
