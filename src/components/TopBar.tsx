import React from 'react'
import BouncyButton from './BouncyButton'
import { useNavigate } from 'react-router'

const TopBar = () => {
  const navigate = useNavigate()

  const gotoProfile = () => {
    void navigate('/profile')
  }

  return (
    <div className='p-3 flex flex-row justify-end'>
      <BouncyButton
        className='aspect-square rounded-full bg-gray-200 p-4'
        onClick={gotoProfile}
      />
    </div>
  )
}

export default TopBar
