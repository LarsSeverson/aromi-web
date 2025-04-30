import React from 'react'
import ButtonText from './ButtonText'
import { useAuthContext } from '@/contexts/AuthContext'
import clsx from 'clsx'
import LogInDialog from '../dialogs/LogInDialog'
import { AccountMenu } from '../menus/AccountMenu'

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
            <ButtonText
              text='Sign Up'
              className='bg-sinopia hover:bg-sinopia text-white h-9 rounded-t-md rounded-b-md text-sm'
              style={{ height: 35 }}
            />
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
