import React, { useEffect, useState } from 'react'
import { Dialog } from '@base-ui-components/react'
import { useNavigate, useRouterState } from '@tanstack/react-router'
import { ConfirmSignUpStep } from './ConfirmSignUpStep'
import { InformationSignUpStep } from './InformationSignUpStep'
import { IoClose } from 'react-icons/io5'
import { TiArrowLeftThick } from 'react-icons/ti'

const SignUpDialog = () => {
  const navigate = useNavigate()
  const { showSignUp, showLogIn } = useRouterState({ select: state => state.location.search })

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [isOpen, setIsOpen] = useState(false)
  const [step, setStep] = useState(0)

  useEffect(() => {
    if (showSignUp === 'true') {
      setIsOpen(true)
      void navigate({ from: '/', search: { showSignUp: undefined } })
    }

    if (showLogIn === 'true') {
      setIsOpen(false)
    }
  }, [showSignUp, showLogIn, navigate])

  return (
    <Dialog.Root
      open={isOpen}
      onOpenChange={(open) => {
        setIsOpen(open)
        setStep(0)
      }}
    >
      <Dialog.Trigger
        className='bg-sinopia text-white h-9 rounded-md text-sm font-semibold flex items-center justify-center p-3'
        style={{ height: 35 }}
      >
        Sign Up
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Backdrop
          className='bg-black/30 backdrop-blur-sm fixed inset-0'
        />
        <Dialog.Popup
          className='max-w-[600px] bg-white top-1/2 left-1/2 fixed -translate-x-1/2 -translate-y-1/2 rounded-xl overflow-hidden p-11 px-20'
        >
          <div
            className='absolute top-0 left-0 right-0'
          >
            <button
              className='top-4 right-4 absolute px-2 py-2 hover:bg-empty rounded-md flex items-center justify-center'
              onClick={() => { setIsOpen(false) }}
            >
              <IoClose
                size={24}
              />
            </button>

            {step > 0 && (
              <button
                className='top-4 left-4 absolute px-2 py-2 hover:bg-empty rounded-md flex items-center justify-center'
                onClick={() => { setStep(prev => Math.max(prev - 1, 0)) }}
              >
                <TiArrowLeftThick
                  size={24}
                />
              </button>
            )}
          </div>
          {step === 0
            ? <InformationSignUpStep
                onContinue={() => { setStep(1) }}
                setEmail={setEmail}
                setPassword={setPassword}
              />
            : <ConfirmSignUpStep
                onContinue={() => { setIsOpen(false) }}
                email={email}
                password={password}
              />}
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default SignUpDialog
