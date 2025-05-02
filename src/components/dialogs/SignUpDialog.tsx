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
import { parseForm } from '@/common/form'
import { Link, useNavigate, useRouterState } from '@tanstack/react-router'

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

interface StepProps {
  setIsOpen?: (val: boolean) => void
  onContinue?: (step: number) => void
}

const NewInformationStep = (props: StepProps) => {
  const { onContinue } = props

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
    const valid = Object.values(response).length === 0 &&
      email != null &&
      password != null

    if (valid) {
      await ResultAsync
        .fromPromise(
          auth.signUp({ variables: { email, password } }),
          error => error as ApolloError
        )
        .match(
          res => { console.log(res) },
          error => {
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

const ConfirmationStep = (props: StepProps) => {
  return null
}

const SignUpDialog = () => {
  const navigate = useNavigate()
  const { showSignUp, showLogIn } = useRouterState({ select: state => state.location.search })

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
      onOpenChange={setIsOpen}
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
          className='bg-white top-1/2 left-1/2 fixed -translate-x-1/2 -translate-y-1/2 rounded-xl overflow-hidden p-11 px-20'
        >
          {step === 0
            ? <NewInformationStep
                setIsOpen={setIsOpen}
                onContinue={setStep}
              />
            : <ConfirmationStep
                setIsOpen={setIsOpen}
              />}
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default SignUpDialog
