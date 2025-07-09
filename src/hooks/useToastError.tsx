import { type ApolloError } from '@apollo/client'
import { Toast } from '@base-ui-components/react'

export const useToastError = () => {
  const mngr = Toast.useToastManager()

  const toastApolloError = (
    error: ApolloError,
    title: string = 'Something went wrong'
  ) => {
    const message = error.graphQLErrors?.[0]?.message ?? ''
    mngr
      .add(
        {
          title,
          description: message,
          timeout: 10000
        }
      )
  }

  return {
    toastApolloError
  }
}
