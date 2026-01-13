import React from 'react'

export interface TreeContextValue { }

export const TreeContext = React.createContext<TreeContextValue | undefined>(undefined)

export const useTreeContext = () => {
  const context = React.useContext(TreeContext)
  if (context == null) {
    throw new Error('useTreeContext must be used within a TreeRoot')
  }

  return context
}
