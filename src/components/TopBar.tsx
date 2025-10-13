import React from 'react'
import clsx from 'clsx'
import LogInDialog from '../features/auth/components/LogInDialog'
import SignUpDialog from '../features/auth/components/SignUpDialog'
import { useAuthContext } from '@/features/auth'
import AccountMenu from '@/features/users/components/AccountMenu'

export interface TopBarProps extends React.HTMLAttributes<HTMLDivElement> {}

const TopBar = (props: TopBarProps) => {
  const { className, ...rest } = props

  const { isAuthenticated, me } = useAuthContext()

  return (
    <header
      className={clsx(
        'p-3 flex flex-row justify-end',
        'sticky top-0 z-50 bg-white h-16 overflow-hidden',
        'flex items-center'
      )}
      {...rest}
    >
      {isAuthenticated && me != null
        ?
        (
          <AccountMenu
            user={me}
          />
        )
        :
        (
          <div
            className='ml-auto flex flex-row gap-2'
          >
            <LogInDialog />
            <SignUpDialog />
          </div>
        )
      }
    </header>
  )
}

export default TopBar
