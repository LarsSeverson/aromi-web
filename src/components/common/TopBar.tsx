import React from 'react'
import BouncyButton from './BouncyButton'
import ButtonText from './ButtonText'
import { useAuthContext } from '@/contexts/AuthContext'
import clsx from 'clsx'
import emptyAvatar from '@/assets/avatar-empty.svg'
import LogInDialog from '../dialogs/LogInDialog'

export interface TopBarProps extends React.HTMLAttributes<HTMLDivElement> {}

const TopBar = (props: TopBarProps) => {
  const { className, ...rest } = props

  const { isAuthenticated } = useAuthContext()

  const handleLogInPress = () => {
  }

  const handleSignUpPress = () => {
  }

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
              onClick={handleSignUpPress}
            />
          </div>
          )
        : (
          <BouncyButton
            className='aspect-square rounded-full bg-gray-200 px-0 py-0 w-10'
          >
            <img
              src={emptyAvatar}
              className='object-cover w-full'
            />
          </BouncyButton>
          )}
    </div>
  )
}

export default TopBar
