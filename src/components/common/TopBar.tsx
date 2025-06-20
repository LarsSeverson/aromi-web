import React from 'react'
import { useAuthContext } from '@/contexts/AuthContext'
import clsx from 'clsx'
import LogInDialog from '../dialogs/LogInDialog'
import { AccountMenu } from '../menus/AccountMenu'
import SignUpDialog from '../dialogs/SignUpDialog'
import { useMyContext } from '@/contexts/MyContext'

export interface TopBarProps extends React.HTMLAttributes<HTMLDivElement> {}

const TopBar = (props: TopBarProps) => {
  const { className, ...rest } = props

  const { isAuthenticated } = useAuthContext()
  const { me } = useMyContext()

  console.log(isAuthenticated, me == null)

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
