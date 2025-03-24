import useAuth from '@/hooks/useAuth'
import React from 'react'
import { AuthContext } from '../AuthContext'

interface AuthProviderProps {
  children: React.ReactNode
}

export const AuthProvider = (props: AuthProviderProps) => {
  const { children } = props
  const auth = useAuth()

  return (
    <AuthContext.Provider
      value={auth}
    >
      {auth.initialized ? children : null}
    </AuthContext.Provider>
  )
}
