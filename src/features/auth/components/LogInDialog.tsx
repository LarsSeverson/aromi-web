import React, { useState } from 'react'
import { Dialog } from '@base-ui-components/react'
import LogInButton from './LogInButton'
import DialogBackdrop from '@/components/DialogBackdrop'
import DialogPopup from '@/components/DialogPopup'
import InformationLogInStep from './InformationLogInStep'
import ConfirmSignUpStep from './ConfirmSignUpStep'
import { useAuthContext } from '../contexts/AuthContext'
import clsx from 'clsx'

const LogInDialog = () => {
  const { dialogs } = useAuthContext()
  const { isLogInDialogOpen, setIsLogInDialogOpen } = dialogs

  const [step, setStep] = useState(0)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

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
      open={isLogInDialogOpen}
      onOpenChange={setIsLogInDialogOpen}
    >
      <LogInButton />

      <Dialog.Portal>
        <DialogBackdrop />

        <DialogPopup
          className={clsx(
            'w-full max-w-96'
          )}
        >
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
                handleGoBack={handleOnBack}
              />
            )}
        </DialogPopup>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default LogInDialog
