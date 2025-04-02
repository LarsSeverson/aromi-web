import React, { useState } from 'react'
import BouncyButton from './BouncyButton'
import ButtonText from './ButtonText'
import { useAuthContext } from '@/contexts/AuthContext'
import { AuthState } from '@/hooks/useAuth'
import LogInModal from './modals/LogInModal'
import clsx from 'clsx'
import emptyAvatar from '@/assets/avatar-empty.svg'

export interface TopBarProps extends React.HTMLAttributes<HTMLDivElement> {}

const TopBar = (props: TopBarProps) => {
  const { className, ...rest } = props
  const { userInfo } = useAuthContext()

  const authenticated = userInfo.state === AuthState.AUTHENTICATED

  const [logInOpen, setLogInOpen] = useState(false)
  const [, setSignUpOpen] = useState(false)

  const handleLogInPress = () => {
    setLogInOpen(true)
  }

  const handleSignUpPress = () => {
    setSignUpOpen(true)
  }

  return (
    <div
      className={clsx(
        'p-3 flex flex-row justify-end',
        className
      )}
      {...rest}
    >
      {!authenticated
        ? (
          <div className='ml-auto flex flex-row gap-2'>
            <ButtonText
              text='Log in'
              className='bg-sinopia hover:bg-sinopia text-white'
              onClick={handleLogInPress}
            />
            <ButtonText
              text='Sign up'
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
      <LogInModal
        open={logInOpen}
        onClose={setLogInOpen}
      />
    </div>
  )
}

export default TopBar
