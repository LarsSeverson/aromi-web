import { getServerErrorInfo } from '@/utils/error'
import { Toast } from '@base-ui-components/react'

export const useToastMessage = () => {
  const mngr = Toast.useToastManager()

  const toastMessage = (
    title: string,
    message?: string
  ) => {
    mngr.add({
      title,
      description: message,
      timeout: 5000
    })
  }

  const toastApolloError = (
    error: unknown,
    title = 'Something went wrong'
  ) => {
    const message = getServerErrorInfo(error).message

    mngr.add({
      title,
      description: message,
      timeout: 7000
    })
  }

  const toastError = (
    errorMessage: string,
    title = 'Something went wrong'
  ) => {
    mngr.add({
      title,
      description: errorMessage,
      timeout: 7000
    })
  }

  return {
    toastMessage,
    toastError,
    toastApolloError
  }
}
