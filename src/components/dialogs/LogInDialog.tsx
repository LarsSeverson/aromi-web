import React, { useEffect, useState } from 'react'
import { Dialog, Field, Form } from '@base-ui-components/react'
import { Logo } from '../common/Icons'
import clsx from 'clsx'
import Spinner from '../common/Spinner'
import Divider from '../common/Divider'
import ButtonText from '../common/ButtonText'
import { z } from 'zod'
import { useAuthContext } from '@/contexts/AuthContext'
import { ResultAsync } from 'neverthrow'
import { type ApolloError } from '@apollo/client'
import { Link, useNavigate, useRouterState } from '@tanstack/react-router'
import { parseForm } from '@/common/form'

const loginSchema = z
  .object({
    email: z
      .string({ required_error: 'Email is required' })
      .email('Please enter a valid email address'),
    password: z
      .string({ required_error: 'Password is required' })
      .min(8, 'Password must be at least 8 characters long')
  })

const LogInDialog = () => {
  const navigate = useNavigate()
  const { showLogIn, showSignUp } = useRouterState({ select: state => state.location.search })
  const auth = useAuthContext()

  const [isOpen, setIsOpen] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setLoading(true)

    const formData = new FormData(e.currentTarget)
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    const response = parseForm(formData, loginSchema)
    const valid = Object.values(response).length === 0 &&
      email != null &&
      password != null

    if (valid) {
      await ResultAsync
        .fromPromise(
          auth.logIn({ variables: { email, password } }),
          error => error as ApolloError
        )
        .match(
          _ => { setIsOpen(false) },
          error => {
            setError(error.graphQLErrors
              .map(e => e.message)
              .join('; '))
          }
        )
    }

    setErrors(response)
    setLoading(false)
  }

  useEffect(() => {
    if (showLogIn === 'true') {
      setIsOpen(true)
      void navigate({ from: '/', search: { showLogIn: undefined } })
    }

    if (showSignUp === 'true') {
      setIsOpen(false)
    }
  }, [showLogIn, showSignUp, navigate])

  return (
    <Dialog.Root
      open={isOpen}
      onOpenChange={setIsOpen}
    >
      <Dialog.Trigger
        className='bg-gray-200 h-9 rounded-md text-sm font-semibold flex items-center justify-center p-3'
        style={{ height: 35 }}
      >
        Log In
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Backdrop
          className='bg-black/30 backdrop-blur-sm fixed inset-0'
        />
        <Dialog.Popup
          className='bg-white top-1/2 left-1/2 fixed -translate-x-1/2 -translate-y-1/2 rounded-xl overflow-hidden p-11 px-20'
        >
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

            <Link
              to='/account-recovery'
              className='font-pd text-sm hover:underline active:scale-[0.99]'
              style={{ marginLeft: 'auto' }}
              onClick={() => { setIsOpen(false) }}
            >
              forgot password?
            </Link>

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
                Log In
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
              search={{ showSignUp: 'true' }}
              className='text-center font-semibold text-sm mt-4 hover:underline'
            >
              Not on aromi yet? Sign Up
            </Link>
          </Form>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default LogInDialog
