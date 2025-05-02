import React from 'react'
import { useAuthContext } from '@/contexts/AuthContext'
import clsx from 'clsx'
import LogInDialog from '../dialogs/LogInDialog'
import { AccountMenu } from '../menus/AccountMenu'
import SignUpDialog from '../dialogs/SignUpDialog'

export interface TopBarProps extends React.HTMLAttributes<HTMLDivElement> {}

const TopBar = (props: TopBarProps) => {
  const { className, ...rest } = props

  const { isAuthenticated } = useAuthContext()

  return (
    <div
      className={clsx(
        'p-3 flex flex-row justify-end',
        className
      )}
      {...rest}
    >
      {!isAuthenticated
        ? (
          <div className='ml-auto flex flex-row gap-2'>
            <LogInDialog />
            <SignUpDialog />
          </div>
          )
        : (
          <AccountMenu
            user={{ username: 'Test', email: 'test@example.com' }}
          />
          )}
    </div>
  )
}

export default TopBar
