import useAuth from '@/features/auth/hooks/useAuth'
import React, { useEffect } from 'react'
import { AuthContext } from '../AuthContext'
import { useAuthDialogs } from '../../hooks/useAuthDialogs'

interface AuthProviderProps {
  children: React.ReactNode
}

export const AuthProvider = (props: AuthProviderProps) => {
  const { children } = props

  const auth = useAuth()
  const dialogs = useAuthDialogs()

  useEffect(() => {
    auth.initialize()
  }, [auth])

  if (!auth.hasInitialized) return null

  return (
    <AuthContext.Provider
      value={{
        ...auth,
        dialogs
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
