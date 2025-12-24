import React, { useState } from 'react'
import { Dialog } from '@base-ui-components/react'
import SignUpButton from './SignUpButton'
import DialogBackdrop from '@/components/DialogBackdrop'
import DialogPopup from '@/components/DialogPopup'
import InformationSignUpStep from './InformationSignUpStep'
import ConfirmSignUpStep from './ConfirmSignUpStep'
import BackButton from '@/components/BackButton'
import { useAuthContext } from '../contexts/AuthContext'

const SignUpDialog = () => {
  const { dialogs } = useAuthContext()
  const { isSignUpDialogOpen, setIsSignUpDialogOpen } = dialogs

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

  return (
    <Dialog.Root
      open={isSignUpDialogOpen}
      onOpenChange={setIsSignUpDialogOpen}
    >
      <SignUpButton />

      <Dialog.Portal>
        <DialogBackdrop />

        <DialogPopup
          className='w-full max-w-96'
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
