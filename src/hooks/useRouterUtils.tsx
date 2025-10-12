import { useToastMessage } from './useToastMessage'

export const useRouterUtils = () => {
  const { toastMessage } = useToastMessage()

  return {
    toastMessage
  }
}

export type UseRouterUtilsReturn = ReturnType<typeof useRouterUtils>
