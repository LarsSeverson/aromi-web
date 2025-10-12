import { createContext, useContext } from 'react'
import type { useMe } from '../hooks/useMe'
import type { MeFragment } from '@/generated/graphql'
import type { Nullable } from '@/utils/util'

export interface MyContextValue {
  me: Nullable<MeFragment>
  refreshMe: typeof useMe.prototype.refresh
}

export const MyContext = createContext<MyContextValue | null>(null)

export const useMyContext = (): MyContextValue => {
  const context = useContext(MyContext)
  if (context == null) {
    throw new Error('useMyContext must be used within a MyContextProvider')
  }

  return context
}
