import { createContext, useContext } from 'react'
import { type UseClientReturn } from '../hooks/useClient'

export const ClientContext = createContext<UseClientReturn | null>(null)

export const useClientContext = (): UseClientReturn => {
  const context = useContext(ClientContext)
  if (context == null) {
    throw new Error('useClientContext must be used within a ClientProvider')
  }

  return context
}
