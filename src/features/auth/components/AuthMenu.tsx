import React from 'react'
import { useAuthContext } from '../contexts/AuthContext'
import AccountMenu from '@/features/users/components/AccountMenu'
import LogInDialog from './LogInDialog'
import SignUpDialog from './SignUpDialog'

export const AuthMenu = () => {
  const { isAuthenticated, hasInitialized, me } = useAuthContext()

  if (!hasInitialized) {
    return null
  }

  return (
    <>
      {isAuthenticated && me != null
        ? (
          <div
            className='h-full'
          >
            <AccountMenu
              user={me}
            />
          </div>
        )
        : (
          <div
            className='flex flex-row gap-2'
          >
            <LogInDialog />

            <SignUpDialog />
          </div>
        )
      }
    </>
  )
}
