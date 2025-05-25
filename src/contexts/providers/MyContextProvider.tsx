import { useMe } from '@/hooks/useMe'
import React from 'react'
import { MyContext } from '../MyContext'

interface MyProviderProps {
  children: React.ReactNode
}

export const MyProvider = (props: MyProviderProps) => {
  const { children } = props
  const me = useMe()

  return (
    <MyContext.Provider
      value={me}
    >
      {children}
    </MyContext.Provider>
  )
}
