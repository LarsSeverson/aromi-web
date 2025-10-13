import React, { useEffect, useState } from 'react'
import { Dialog } from '@base-ui-components/react'
import { useLocation, useNavigate } from '@tanstack/react-router'
import LogInButton from './LogInButton'
import DialogBackdrop from '@/components/DialogBackdrop'
import DialogPopup from '@/components/DialogPopup'
import InformationLogInStep from './InformationLogInStep'
import ConfirmSignUpStep from './ConfirmSignUpStep'
import BackButton from '@/components/BackButton'

const LogInDialog = () => {
  const navigate = useNavigate()
  const { showLogIn, showSignUp } = useLocation().search

  const [step, setStep] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
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
    if (showLogIn === true) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsOpen(true)
      navigate({ from: '/', search: { showLogIn: undefined } })
    }

    if (showLogIn === false) {
      setIsOpen(false)
      navigate({ from: '/', search: { showLogIn: undefined } })
    }

    if (showSignUp === true) {
      setIsOpen(false)
    }
  }, [showLogIn, showSignUp, navigate])

  return (
    <Dialog.Root
      open={isOpen}
      onOpenChange={setIsOpen}
    >
      <LogInButton />

      <Dialog.Portal>
        <DialogBackdrop />

        <DialogPopup
          className='min-w-96 max-w-96'
        >
          {showBack && (
            <BackButton
              onClick={handleOnBack}
            />
          )}

          {showInformationStep
            ? (
              <InformationLogInStep
                onNotConfirmed={handleOnNotConfirmed}
              />
            )
            : (
              <ConfirmSignUpStep
                text={`We sent a code to "${email}".`}
                email={email}
                password={password}
              />
            )}
        </DialogPopup>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default LogInDialog
