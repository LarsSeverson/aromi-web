import React, { useState } from 'react'
import { Field, Form } from '@base-ui-components/react'
import { Logo } from '../common/Icons'
import clsx from 'clsx'
import Spinner from '../common/Spinner'
import Divider from '../common/Divider'
import ButtonText from '../common/ButtonText'
import { z } from 'zod'
import { useAuthContext } from '@/contexts/AuthContext'
import { ResultAsync } from 'neverthrow'
import { type ApolloError } from '@apollo/client'
import { parseForm } from '@/common/form'
import { Link } from '@tanstack/react-router'

export interface InformationSignUpStepProps {
  onContinue: () => void
  setEmail: (val: string) => void
  setPassword: (val: string) => void
}

const signUpSchema = z
  .object({
    email: z
      .string({ required_error: 'Email is required' })
      .email('Please enter a valid email address')
      .trim(),
    password: z
      .string({ required_error: 'Password is required' })
      .min(8, 'Password must be at least 8 characters long')
      .trim(),
    confirmPassword: z
      .string()
      .trim()
  })
  .refine(data => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Passwords do not match'
  })

export const InformationSignUpStep = (props: InformationSignUpStepProps) => {
  const { onContinue, setEmail, setPassword } = props

  const auth = useAuthContext()

  const [error, setError] = useState<string | null>(null)
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setLoading(true)

    const formData = new FormData(e.currentTarget)
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    const response = parseForm(formData, signUpSchema)
    const valid = Object.values(response).length === 0

    setEmail(email)
    setPassword(password)

    if (valid) {
      await ResultAsync
        .fromPromise(
          auth.signUp({ variables: { email, password } }),
          error => error as ApolloError
        )
        .match(
          _ => {
            onContinue()
          },
          error => {
            const code = error.graphQLErrors?.[0]?.extensions?.code

            if (['USER_NOT_FOUND', 'USERNAME_EXISTS'].includes(code as string)) {
              // Suppress user enumeration
              onContinue()
              return
            }

            setError(error.graphQLErrors
              .map(e => e.message)
              .join('; ')
            )
          }
        )
    }

    setErrors(response)
    setLoading(false)
  }

  return (
    <>
      <div
        className='gap-4 flex flex-col justify-center items-center'
      >
        <Logo
          size={50}
        />
        <h1
          className='text-4xl font-pd'
        >
          Welcome to aromi
        </h1>

        {error != null && (
          <p
            className='text-red-600 font-pd text-sm'
          >
            {error}
          </p>
        )}
      </div>

      <Form
        errors={errors}
        onClearErrors={setErrors}
        onSubmit={(e) => { void handleSubmit(e) }}
        className='flex flex-col mt-4'
      >
        <Field.Root
          name='email'
          className='flex flex-col'
        >
          <Field.Label
            className='font-semibold text-md mt-2'
          >
            Email
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

        <Field.Root
          name='password'
          className='flex flex-col'
        >
          <Field.Label
            className='font-semibold text-md mt-2'
          >
            Password
          </Field.Label>
          <Field.Control
            type='password'
            required
            placeholder='Create a password'
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
            className='font-semibold text-md mt-2'
          >
            Confirm Password
          </Field.Label>
          <Field.Control
            type='password'
            required
            placeholder='Confirm your password'
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
          disabled={loading}
          className={clsx(
            'bg-sinopia text-white font-semibold rounded-xl px-5 py-2 mt-5 hover:shadow-lg brightness-100 hover:brightness-105'
          )}
        >
          {loading && <Spinner />}
          <div
            className={clsx(loading && 'opacity-0')}
          >
            Continue
          </div>
        </button>

        <div
          className='flex flex-row items-center gap-5 px-5 my-2'
        >
          <Divider
            horizontal
          />
          <p>or</p>
          <Divider
            horizontal
          />
        </div>

        <ButtonText
          text='Continue with Google'
          className='bg-white border-2 hover:bg-white active:scale-[0.99] hover:brightness-[.98] py-2'
        />

        <Link
          to='.'
          search={{ showLogIn: 'true' }}
          className='text-center font-semibold text-sm mt-4 hover:underline'
        >
          Already a member? Log In
        </Link>
      </Form>
    </>
  )
}
