import LandingTopBar from '@/components/LandingTopBar'
import LogInModal from '@/components/modals/LogInModal'
import React, { useCallback, useState } from 'react'
import { Outlet } from 'react-router'

const LandingLayout = () => {
  const [logInOpen, setLogInOpen] = useState(false)

  const handleLogInPress = useCallback(() => {
    setLogInOpen(true)
  }, [])

  const handleSignUpPress = useCallback(() => {
    //
  }, [])

  return (
    <div
      className='
        flex
        flex-col
        w-screen
        h-screen
      '
    >
      <LandingTopBar
        onLogIn={handleLogInPress}
        onSignUp={handleSignUpPress}
      />
      <div className='overflow-auto'>
        <Outlet />
      </div>
      <LogInModal
        open={logInOpen}
        onClose={setLogInOpen}
      />
    </div>
  )
}

export default LandingLayout
