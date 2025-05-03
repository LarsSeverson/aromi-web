import { parseForm } from '@/common/form'
import Spinner from '@/components/common/Spinner'
import VerificationCodeInput from '@/components/common/VerificationCodeInput'
import { useAuthContext } from '@/contexts/AuthContext'
import { type ApolloError } from '@apollo/client'
import { Field, Form } from '@base-ui-components/react'
import { useNavigate } from '@tanstack/react-router'
import clsx from 'clsx'
import { ResultAsync } from 'neverthrow'
import React, { useState } from 'react'
import { z } from 'zod'

const confirmPasswordSchema = z
  .object({
    confirmationCode: z
      .string({ required_error: 'Code is required' })
      .length(6)
      .trim()
      .regex(/^\d{6}$/, 'Code must be a 6-digit number'),
    newPassword: z
      .string({ required_error: 'New password is required' })
      .min(8, 'Password must be at least 8 characters long')
      .trim(),
    confirmPassword: z
      .string()
      .trim()
  })
  .refine(data => data.newPassword === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Passwords do not match'
  })

export interface ConfirmPasswordResetPageProps {
  email: string
}

const ConfirmPasswordResetPage = (props: ConfirmPasswordResetPageProps) => {
  const { email } = props

  const navigate = useNavigate()
  const auth = useAuthContext()

  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [errors, setErrors] = useState({})

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setIsLoading(true)

    const formData = new FormData(e.currentTarget)
    const newPassword = formData.get('newPassword') as string
    const confirmationCode = Array
      .from({ length: 6 })
      .map((_, i) => formData.get(`code-${i}`) ?? '')
      .join('')

    const response = parseForm(formData, confirmPasswordSchema, (raw) => ({
      confirmationCode,
      newPassword: newPassword ?? '',
      confirmPassword: raw.confirmPassword ?? ''
    }))

    const valid = Object.values(response).length === 0 &&
      confirmationCode != null &&
      newPassword != null

    if (valid) {
      await ResultAsync
        .fromPromise(
          auth.confirmForgotPassword({ variables: { email, confirmationCode, newPassword } }),
          error => error as ApolloError
        )
        .match(
          () => {
            void navigate({ to: '/account-recovery/success' })
          },
          error => {
            const code = error?.graphQLErrors?.[0]?.extensions?.code

            if (code === 'USER_NOT_FOUND' || code === 'USER_NOT_CONFIRMED') {
              setError('Something went wrong. Please try again later')
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

  return (
    <div
      className='h-full flex flex-col items-center'
    >
      <div
        className='max-w-lg w-full'
      >
        <h1
          className='text-3xl font-semibold text-center'
        >
          Enter the code from your email
        </h1>
        <div
          className='mt-3 text-md text-center'
        >
          If “{email}” is linked to an account, you’ll receive a 6-digit code.
        </div>
        {error != null && (
          <p
            className='text-red-600 font-pd text-sm text-center mt-3'
          >
            {error}
          </p>
        )}

        <Form
          errors={errors}
          onClearErrors={setErrors}
          onSubmit={(e) => { void handleSubmit(e) }}
          className='flex flex-col mt-3 gap-2'
        >

          <VerificationCodeInput
            className='my-3 flex flex-col items-center'
          />

          <Field.Root
            name='newPassword'
            className='flex flex-col'
          >
            <Field.Label
              className='font-semibold text-md'
            >
              New password
            </Field.Label>
            <Field.Control
              required
              type='password'
              placeholder='Password'
              className={({ valid }) =>
                clsx(
                  'p-2 my-1 border-2 rounded-md outline-2 -outline-offset-1 outline-none focus:outline-sinopia',
                  valid === false && 'outline-red-600'
                )}
            />
            <Field.Error
              className='text-red-600 font-pd text-sm ml-1'
            />
          </Field.Root>

          <Field.Root
            name='confirmPassword'
            className='flex flex-col'
          >
            <Field.Label
              className='font-semibold text-md'
            >
              Confirm new password
            </Field.Label>
            <Field.Control
              required
              type='password'
              placeholder='Password'
              className={({ valid }) =>
                clsx(
                  'p-2 my-1 border-2 rounded-md outline-2 -outline-offset-1 outline-none focus:outline-sinopia',
                  valid === false && 'outline-red-600'
                )}
            />
            <Field.Error
              className='text-red-600 font-pd text-sm ml-1'
            />
          </Field.Root>

          <button
            type='submit'
            disabled={isLoading}
            className={clsx(
              'bg-sinopia text-white font-semibold rounded-xl px-5 py-2 mt-5 hover:shadow-lg brightness-100 hover:brightness-105'
            )}
          >
            {isLoading && <Spinner />}
            <div
              className={clsx(isLoading && 'opacity-0')}
            >
              Reset Password
            </div>
          </button>
        </Form>
      </div>
    </div>
  )
}

export default ConfirmPasswordResetPage
