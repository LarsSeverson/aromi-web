import { type ApolloError } from '@apollo/client'
import { Toast } from '@base-ui-components/react'

export const useToastError = () => {
  const mngr = Toast.useToastManager()

  const toastApolloError = (
    error: unknown,
    title: string = 'Something went wrong'
  ) => {
    console.log(error)

    const typed = error as ApolloError
    const message = typed.graphQLErrors?.[0]?.message ?? ''
    mngr
      .add(
        {
          title,
          description: message,
          timeout: 7000
        }
      )
  }

  return {
    toastApolloError
  }
}
