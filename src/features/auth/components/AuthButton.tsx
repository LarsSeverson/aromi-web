import React from 'react'
import { useAuthHelpers } from '../hooks/useAuthHelpers'

export interface AuthButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const AuthButton = (props: AuthButtonProps) => {
  const { onClick, ...rest } = props

  const { checkAuthenticated: requireAuth } = useAuthHelpers()

  const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()

    const shouldContinue = requireAuth()
    if (!shouldContinue) return

    onClick?.(e)
  }

  return (
    <button
      {...rest}
      onClick={handleOnClick}
    />
  )
}

export default AuthButton
