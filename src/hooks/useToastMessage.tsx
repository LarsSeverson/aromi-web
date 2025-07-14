import { Toast } from '@base-ui-components/react'

export const useToastMessage = () => {
  const mngr = Toast.useToastManager()

  const toastMessage = (
    title: string,
    message?: string
  ) => {
    mngr
      .add(
        {
          title,
          description: message,
          timeout: 5000
        }
      )
  }

  return {
    toastMessage
  }
}
