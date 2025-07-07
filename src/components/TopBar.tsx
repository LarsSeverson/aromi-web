import React from 'react'
import clsx from 'clsx'
import LogInDialog from '../features/auth/components/LogInDialog'
import { AccountMenu } from '../features/user/components/AccountMenu'
import SignUpDialog from '../features/auth/components/SignUpDialog'
import { useMyContext } from '@/features/user/contexts/MyContext'
import { useAuthContext } from '@/features/auth'

export interface TopBarProps extends React.HTMLAttributes<HTMLDivElement> {}

const TopBar = (props: TopBarProps) => {
  const { className, ...rest } = props

  const { isAuthenticated } = useAuthContext()
  const { me } = useMyContext()

  return (
    <div
      className={clsx(
        'p-3 flex flex-row justify-end',
        className
      )}
      {...rest}
    >
      {!isAuthenticated || me == null
        ? (
          <div className='ml-auto flex flex-row gap-2'>
            <LogInDialog />
            <SignUpDialog />
          </div>
          )
        : (
          <AccountMenu
            user={me}
          />
          )}
    </div>
  )
}

export default TopBar
