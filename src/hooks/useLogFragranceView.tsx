import { LOG_FRAGRANCE_VIEW_MUTATION } from '@/graphql/mutations/FragranceMutations'
import { useMutation } from '@apollo/client'

export const useLogFragranceView = () => {
  const [
    logFragranceView,
    { data, loading, error }
  ] = useMutation(LOG_FRAGRANCE_VIEW_MUTATION)

  return {
    data,
    loading,
    error,

    logFragranceView
  }
}
