import Spinner from '@/components/Spinner'
import { type ApolloError } from '@apollo/client'
import { Field, Form } from '@base-ui-components/react'
import { useNavigate } from '@tanstack/react-router'
import clsx from 'clsx'
import { ResultAsync } from 'neverthrow'
import React, { useState } from 'react'
import { z } from 'zod'
import { useAuthContext } from '../contexts/AuthContext'

const accountRecoverySchema = z.object({
  email: z.string({ required_error: 'Email is required' })
    .email('Please enter a valid email address')
})

const parseForm = (formData: FormData) => {
  const result = accountRecoverySchema.safeParse(Object.fromEntries(formData))

  if (!result.success) {
    return result.error.flatten().fieldErrors
  }

  return {}
}

const AccountRecoveryPage = () => {
  const navigate = useNavigate()
  const auth = useAuthContext()

  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [errors, setErrors] = useState({})

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setIsLoading(true)

    const formData = new FormData(e.currentTarget)
    const email = formData.get('email') as string

    const response = parseForm(formData)

    const valid = Object.values(response).length === 0 &&
      email != null

    if (valid) {
      await ResultAsync
        .fromPromise(
          auth.forgotPassword({ variables: { email } }),
          error => error as ApolloError
        )
        .match(
          () => {
            void navigate({ to: '/account-recovery/success' })
          },
          error => {
            const code = error?.graphQLErrors?.[0]?.extensions?.code

            if (code === 'USER_NOT_FOUND' || code === 'USER_NOT_CONFIRMED') {
              // Suppress user enumeration
              void navigate({ to: '/account-recovery/confirm', search: { email } })
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
          Let's find your aromi account
        </h1>
        <div
          className='mt-3 text-center'
        >
          What's your email?
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
          className='flex flex-col'
        >
          <Field.Root
            name='email'
            className='flex flex-col'
          >
            <Field.Label
              className='font-semibold text-md mt-2'
            >
              Enter your email
            </Field.Label>
            <Field.Control
              required
              placeholder='Email'
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
              Continue
            </div>
          </button>
        </Form>
      </div>
    </div>
  )
}

export default AccountRecoveryPage
