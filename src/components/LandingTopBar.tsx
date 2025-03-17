import React from 'react'
import AromiLogoText from './common/AromiLogoText'
import BouncyButton from './BouncyButton'
import ButtonText from './ButtonText'

export interface LandingTopBarProps {
  onLogIn: () => void
  onSignUp: () => void
}

const LandingTopBar = (props: LandingTopBarProps) => {
  const { onLogIn, onSignUp } = props

  return (
    <div className='p-5 flex flex-row w-full'>
      <BouncyButton
        className='self-start hover:bg-transparent'
      >
        <AromiLogoText />
      </BouncyButton>
      <div className='ml-auto flex flex-row gap-2'>
        <ButtonText
          text='Log in'
          className='bg-sinopia hover:bg-sinopia text-white'
          onClick={onLogIn}
        />
        <ButtonText
          text='Sign up'
          onClick={onSignUp}
        />
      </div>
    </div>
  )
}

export default LandingTopBar
