import { createContext, useContext } from 'react'
import type useAuth from '@/features/auth/hooks/useAuth'
import type { useAuthDialogs } from '../hooks/useAuthDialogs'

export interface AuthContextValue extends ReturnType<typeof useAuth> {
  dialogs: ReturnType<typeof useAuthDialogs>
}

export const AuthContext = createContext<AuthContextValue | null>(null)

export const useAuthContext = (): AuthContextValue => {
  const context = useContext(AuthContext)
  if (context == null) {
    throw new Error('useAuthContext must be used within an AuthProvider')
  }

  return context
}
