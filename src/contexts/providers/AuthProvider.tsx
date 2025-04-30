import useAuth from '@/hooks/useAuth'
import React from 'react'
import { AuthContext } from '../AuthContext'

interface AuthProviderProps {
  children: React.ReactNode
}

export const AuthProvider = (props: AuthProviderProps) => {
  const { children } = props
  const auth = useAuth()

  if (!auth.hasInitialized) return null

  return (
    <AuthContext.Provider
      value={auth}
    >
      {children}
    </AuthContext.Provider>
  )
}
