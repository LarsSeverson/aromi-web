import { graphql } from '@/generated'
import { useMutation } from '@apollo/client'

export const LOG_FRAGRANCE_VIEW_MUTATION = graphql(/* GraphQL */`
  mutation LogFragranceView (
    $input: LogFragranceViewInput!
  ) {
    logFragranceView(input: $input)
  }
`)

export const useLogFragranceView = () => {
  const [logFragranceView, { data, loading, error }] = useMutation(LOG_FRAGRANCE_VIEW_MUTATION)

  return {
    data: data?.logFragranceView,
    loading,
    error,

    logFragranceView
  }
}
