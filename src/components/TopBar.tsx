import React, { useState } from 'react'
import BouncyButton from './BouncyButton'
import { useNavigate } from 'react-router'
import ButtonText from './ButtonText'
import { useAuthContext } from '@/contexts/AuthContext'
import { AuthState } from '@/hooks/useAuth'
import LogInModal from './modals/LogInModal'

const TopBar = () => {
  const navigate = useNavigate()
  const { userInfo } = useAuthContext()
  const authenticated = userInfo.state === AuthState.AUTHENTICATED

  const [logInOpen, setLogInOpen] = useState(false)
  const [, setSignUpOpen] = useState(false)

  const gotoProfile = () => {
    void navigate('/profile')
  }

  const handleLogInPress = () => {
    setLogInOpen(true)
  }

  const handleSignUpPress = () => {
    setSignUpOpen(true)
  }

  return (
    <div className='p-3 flex flex-row justify-end'>
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
            className='aspect-square rounded-full bg-gray-200 p-4'
            onClick={gotoProfile}
          />
          )}
      <LogInModal
        open={logInOpen}
        onClose={setLogInOpen}
      />
    </div>
  )
}

export default TopBar
