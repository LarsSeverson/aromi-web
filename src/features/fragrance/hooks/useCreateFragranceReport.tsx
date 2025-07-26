import { CREATE_FRAGRANCE_REPORT_MUTATION } from '../graphql/mutations'
import { useMutation } from '@apollo/client'

export const useCreateFragranceReport = () => {
  const [
    createFragranceReport,
    {
      data,
      loading,
      error
    }
  ] = useMutation(CREATE_FRAGRANCE_REPORT_MUTATION)

  return {
    data,
    loading,
    error,

    createFragranceReport
  }
}
