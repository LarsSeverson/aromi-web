import React from 'react'
import { MyContext } from './MyContext'
import { useAuthContext } from '@/features/auth'

interface MyProviderProps {
  children: React.ReactNode
}

export const MyProvider = (props: MyProviderProps) => {
  const { children } = props
  const { me, refreshMe } = useAuthContext()

  return (
    <MyContext.Provider
      value={{ me, refreshMe }}
    >
      {children}
    </MyContext.Provider>
  )
}
