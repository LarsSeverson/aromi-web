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
        className='my-3 flex w-full flex-col px-2'
      >
        <h1
          className='text-center text-2xl font-semibold'
        >
          Verify Your Account
        </h1>

        <div
          className='text-md mt-3 w-[80%] self-center text-center'
        >
          {text}
        </div>

        <ErrorFeedback
          error={error}
        />
      </div>

      <div
        className='mt-5 flex w-full flex-col items-center justify-center'
      >
        <div
          className='my-4 flex flex-col gap-1'
        >
          <CodeInput />

          <button
            type='button'
            disabled={isResendDisabled}
            className={clsx(
              'ml-auto text-sm hover:underline',
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
