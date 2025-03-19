import React, { createContext, useContext } from 'react'

export interface MainLayoutContextProps {
  mainContentRect: DOMRect
  mainContentRef: React.RefObject<HTMLDivElement | null>
}

export const MainLayoutContext = createContext<MainLayoutContextProps | null>(null)

export const useMainLayoutContext = (): MainLayoutContextProps => {
  const context = useContext(MainLayoutContext)
  if (context == null) {
    throw new Error('useMainLayoutContext must be used within a MainLayoutProvider')
  }

  return context
}

export interface MainLayoutProviderProps extends MainLayoutContextProps {
  children: React.ReactNode
}

const MainLayoutProvider = (props: MainLayoutProviderProps) => {
  const { children, ...rest } = props

  return (
    <MainLayoutContext.Provider
      value={rest}
    >
      {children}
    </MainLayoutContext.Provider>
  )
}

export default MainLayoutProvider
