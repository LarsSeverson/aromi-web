import React, { useEffect, useState } from 'react'
import { Dialog } from '@base-ui-components/react'
import { useLocation, useNavigate } from '@tanstack/react-router'
import SignUpButton from './SignUpButton'
import DialogBackdrop from '@/components/DialogBackdrop'
import DialogPopup from '@/components/DialogPopup'
import InformationSignUpStep from './InformationSignUpStep'
import ConfirmSignUpStep from './ConfirmSignUpStep'
import BackButton from '@/components/BackButton'

const SignUpDialog = () => {
  const navigate = useNavigate()
  const { showSignUp, showLogIn } = useLocation().search

  const [isOpen, setIsOpen] = useState(false)
  const [step, setStep] = useState(0)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const showBack = step > 0
  const showInformationStep = step === 0

  const handleOnNotConfirmed = (
    email: string,
    password: string
  ) => {
    setEmail(email)
    setPassword(password)
    setStep(1)
  }

  const handleOnBack = () => {
    setStep(prev => Math.max(0, prev - 1))
  }

  useEffect(() => {
    if (showSignUp === true) {
      setIsOpen(true)
      void navigate({ from: '/', search: { showSignUp: undefined } })
    }

    if (showLogIn === false) {
      setIsOpen(false)
    }
  }, [showLogIn, showSignUp, navigate])

  return (
    <Dialog.Root
      open={isOpen}
      onOpenChange={setIsOpen}
    >
      <SignUpButton />

      <Dialog.Portal>
        <DialogBackdrop />

        <DialogPopup
          className='min-w-96'
        >
          {showBack && (
            <BackButton
              onClick={handleOnBack}
            />
          )}

          {showInformationStep
            ?
            (
              <InformationSignUpStep
                onNotConfirmed={handleOnNotConfirmed}
              />
            )
            :
            (
              <ConfirmSignUpStep
                email={email}
                password={password}
              />
            )}
        </DialogPopup>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default SignUpDialog
