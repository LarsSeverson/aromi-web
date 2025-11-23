import { useToastMessage } from '@/hooks/useToastMessage'
import { useAuthContext } from '../contexts/AuthContext'

export const useAuthHelpers = () => {
  const { isAuthenticated, dialogs } = useAuthContext()
  const { openLogInDialog } = dialogs

  const { toastMessage } = useToastMessage()

  const checkAuthenticated = (message = 'You need to log in first') => {
    if (isAuthenticated) return true

    toastMessage('Hold on', message)
    openLogInDialog()

    return false
  }

  return { checkAuthenticated }
}