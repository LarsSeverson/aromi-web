import React, { useState } from 'react'
import InformationPasswordStep from '../components/InformationPasswordStep'
import NewPasswordStep from '../components/NewPasswordStep'

const AccountRecoveryPage = () => {
  const [step, setStep] = useState(0)
  const [email, setEmail] = useState('')

  const handleOnEditEmail = () => {
    setStep(prev => Math.max(0, prev - 1))
  }

  const handleOnContinue = (email: string) => {
    setStep(prev => Math.min(1, prev + 1))
    setEmail(email)
  }

  const onRenderStep = () => {
    if (step === 0) {
      return (
        <InformationPasswordStep
          onContinue={handleOnContinue}
        />
      )
    }

    if (step === 1) {
      return (
        <NewPasswordStep
          email={email}
          onEditEmail={handleOnEditEmail}
        />
      )
    }

    return null
  }

  return (
    <div
      className='w-full flex flex-col items-center mt-10'
    >
      <div
        className='flex flex-col max-w-lg w-full'
      >
        {onRenderStep()}
      </div>
    </div>
  )
}

export default AccountRecoveryPage
