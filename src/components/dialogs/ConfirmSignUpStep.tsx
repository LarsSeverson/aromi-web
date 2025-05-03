import { parseForm } from '@/common/form'
import { useAuthContext } from '@/contexts/AuthContext'
import { type ApolloError } from '@apollo/client'
import { Form } from '@base-ui-components/react'
import { ResultAsync } from 'neverthrow'
import React, { useEffect, useState } from 'react'
import { z } from 'zod'
import VerificationCodeInput from '../common/VerificationCodeInput'
import clsx from 'clsx'
import Spinner from '../common/Spinner'

export interface ConfirmSignUpStepProps {
  email: string
  password: string
  onContinue: () => void
}

const confirmSignUpSchema = z
  .object({
    confirmationCode: z
      .string({ required_error: 'Code is required' })
      .length(6)
      .trim()
      .regex(/^\d{6}$/, 'Code must be a 6-digit number')
  })

export const ConfirmSignUpStep = (props: ConfirmSignUpStepProps) => {
  const { email, password, onContinue } = props

  const auth = useAuthContext()

  const [error, setError] = useState<string | null>(null)
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [isResendDisabled, setIsResendDisabled] = useState(true)
  const [showEmailSent, setShowEmailSent] = useState(true)

  const handleAutoLogin = async () => {
    await ResultAsync
      .fromPromise(
        auth.logIn({ variables: { email, password } }),
        error => error as ApolloError
      )
      .match(
        () => { onContinue() },
        error => {
          setError(error.graphQLErrors
            .map(e => e.message)
            .join('; ')
          )
        }
      )

    setIsLoading(false)
  }

  const handleResend = async () => {
    if (isResendDisabled) return

    setIsResendDisabled(true)

    await ResultAsync
      .fromPromise(
        auth.resendSignUpConfirmationCode({ variables: { email } }),
        error => error as ApolloError
      )
      .match(
        () => {
          setShowEmailSent(true)
        },
        error => {
          const code = error.graphQLErrors?.[0]?.extensions?.code

          if (['USER_NOT_FOUND', 'NOT_AUTHORIZED', 'INVALID_PARAMETER'].includes(code as string)) {
            // Suppress user enumeration
            setError('Something went wrong. Please try again later.')
            return
          }

          setError(error.graphQLErrors
            .map(e => e.message)
            .join('; ')
          )
        }
      )

    setTimeout(() => {
      setIsResendDisabled(false)
      setShowEmailSent(false)
    }, 7000)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setIsLoading(true)

    const formData = new FormData(e.currentTarget)
    const confirmationCode = Array
      .from({ length: 6 })
      .map((_, i) => formData.get(`code-${i}`) ?? '')
      .join('')

    const response = parseForm(formData, confirmSignUpSchema, () => ({
      confirmationCode
    }))

    const valid = Object.values(response).length === 0 &&
      confirmationCode != null

    if (valid) {
      await ResultAsync
        .fromPromise(
          auth.confirmSignUp({ variables: { email, confirmationCode } }),
          error => error as ApolloError
        )
        .match(
          () => { void handleAutoLogin() },
          error => {
            const code = error.graphQLErrors?.[0]?.extensions?.code

            if (['USER_NOT_FOUND', 'NOT_AUTHORIZED'].includes(code as string)) {
              // Suppress user enumeration
              setError('Something went wrong. Please try again later.')
              return
            }

            setError(error.graphQLErrors
              .map(e => e.message)
              .join('; ')
            )
          }
        )
    }

    setIsLoading(false)
    setErrors(response)
  }

  useEffect(() => {
    setTimeout(() => {
      setShowEmailSent(false)
      setIsResendDisabled(false)
    }, 7000)
  }, [])

  return (
    <div
      className='h-full flex flex-col items-center'
    >
      <div
        className='w-full mb-3'
      >
        <h1
          className='text-2xl font-semibold'
        >
          Enter the code from your email
        </h1>
        <div
          className='mt-3 text-md'
        >
          If “{email}” is not already linked to an account, you’ll receive a 6-digit code.
        </div>
        {error != null && (
          <p
            className='text-red-600 font-pd text-sm text-center mt-3'
          >
            {error}
          </p>
        )}
      </div>

      <Form
        className='w-full flex flex-col'
        errors={errors}
        onClearErrors={setErrors}
        onSubmit={(e) => { void handleSubmit(e) }}
      >
        <VerificationCodeInput />

        <button
          type='button'
          disabled={isResendDisabled}
          className={clsx(
            'text-sinopia underline mr-auto mt-2 font-semibold text-sm',
            isResendDisabled && 'opacity-60 cursor-not-allowed'
          )}
          onClick={() => { void handleResend() }}
        >
          {showEmailSent ? 'Email sent!' : 'Resend code'}
        </button>

        <button
          type='submit'
          disabled={isLoading}
          className={clsx(
            'bg-sinopia text-white font-semibold text-md rounded-md px-3 py-2 mt-5 hover:shadow-lg brightness-100 hover:brightness-105 ml-auto'
          )}
        >
          {isLoading && <Spinner />}
          <div
            className={clsx(isLoading && 'opacity-0')}
          >
            Submit
          </div>
        </button>
      </Form>
    </div>
  )
}
