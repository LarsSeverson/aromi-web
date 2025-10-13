import React from 'react'
import { useMyContext } from '@/features/users'
import { useAuthContext } from '@/features/auth'
import LogInDialog from '@/features/auth/components/LogInDialog'
import SignUpDialog from '@/features/auth/components/SignUpDialog'
import { AccountMenu } from '@/features/users/components/AccountMenu'

const AppHeader = () => {
  const { me } = useMyContext()
  const { isAuthenticated } = useAuthContext()

  const isUserAuthenticated = me != null && isAuthenticated

  return (
    <header
      className='border-b px-5 py-2 h-12 overflow-hidden flex items-center sticky top-0 z-50 bg-white'
    >
      <div
        className='h-8 ml-auto flex gap-2 justify-center items-center'
      >
        {isUserAuthenticated
          ? (
            <AccountMenu
              user={me}
            />
          )
          : (
            <>
              <LogInDialog />

              <SignUpDialog />
            </>
          )}
      </div>

    </header>
  )
}

export default AppHeader
