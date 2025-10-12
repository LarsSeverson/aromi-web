import React, { useState } from 'react'
import CodeInput from './CodeInput'
import Spinner from '@/components/Spinner'
import clsx from 'clsx'
import { Form } from '@base-ui-components/react'
import { useAuthContext } from '../contexts/AuthContext'
import SubmitButton from '@/components/SubmitButton'
import ErrorFeedback from '@/components/ErrorFeedback'

export interface ConfirmSignUpStepProps {
  text?: string
  email: string
  password: string
}

const ConfirmSignUpStep = (props: ConfirmSignUpStepProps) => {
  const {
    text = `If “${props.email}” isn’t linked to an account, you’ll get a 6-digit code.`,
    email,
    password
  } = props

  const { resendSignUpCode, confirmSignUp, logIn } = useAuthContext()

  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isResendLoading, setIsResendLoading] = useState(false)
  const [isResendDisabled, setIsResendDisabled] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setIsLoading(true)

    const formData = new FormData(e.currentTarget)
    const code = formData.get('code') as string

    await confirmSignUp({ email, code })
      .andThen(() => logIn({ email, password }))
      .match(
        () => {
          window.location.reload()
        },
        error => {
          setError(error.message)
        }
      )

    setIsLoading(false)
  }

  const handleResend = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    e.stopPropagation()

    if (isResendDisabled) return

    setIsResendDisabled(true)
    setIsResendLoading(true)

    await resendSignUpCode({ email })
      .match(
        () => {
          //
        },
        error => {
          setError(error.message)
        }
      )

    setIsResendLoading(false)

    setTimeout(() => {
      setIsResendDisabled(false)
    }, 7000)
  }

  return (
    <Form
      onSubmit={(e) => { void handleSubmit(e) }}
    >
      <div
        className='w-full my-3 px-2 flex flex-col'
      >
        <h1
          className='text-2xl font-semibold text-center'
        >
          Verify Your Account
        </h1>

        <div
          className='mt-3 text-md text-center w-[80%] self-center'
        >
          {text}
        </div>

        <ErrorFeedback
          error={error}
        />
      </div>

      <div
        className='flex flex-col items-center justify-center mt-5 w-full'
      >
        <div
          className='flex flex-col gap-1 my-4'
        >
          <CodeInput />

          <button
            type='button'
            disabled={isResendDisabled}
            className={clsx(
              'text-sm hover:underline ml-auto',
              isResendDisabled && 'opacity-60 hover:no-underline'
            )}
            onClick={(e) => { void handleResend(e) }}
          >
            {isResendLoading
              ? (
                <Spinner
                  size={5}
                />
              )
              : (
                <span>
                  {isResendDisabled ? 'Email sent!' : 'Resend code'}
                </span>
              )}
          </button>
        </div>

        <SubmitButton
          isLoading={isLoading}
        />
      </div>
    </Form>
  )
}

export default ConfirmSignUpStep
