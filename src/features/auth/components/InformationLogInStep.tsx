import React, { useState } from 'react'
import AuthDialogHeading from './AuthDialogHeading'
import { Form } from '@base-ui-components/react'
import EmailInput from './EmailInput'
import PasswordInput from './PasswordInput'
import { Link } from '@tanstack/react-router'
import { useAuthContext } from '../contexts/AuthContext'
import { getFieldErrors } from '@/utils/validation'
import { LogInSchema } from '../utils/validation'
import SubmitButton from '@/components/SubmitButton'

export interface InformationLogInStepProps {
  onNotConfirmed: (email: string, password: string) => void
}

const InformationLogInStep = (props: InformationLogInStepProps) => {
  const { onNotConfirmed } = props

  const { logIn } = useAuthContext()

  const [error, setError] = useState<string | null>(null)
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setIsLoading(true)

    const formData = new FormData(e.currentTarget)
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    const fieldErrors = getFieldErrors(LogInSchema, { email, password })
    const valid = Object.values(fieldErrors).length === 0

    if (valid) {
      await logIn({ email, password })
        .match(
          () => {
            window.location.reload()
          },
          error => {
            const { code, message } = error

            if (['NOT_CONFIRMED'].includes(code)) {
              onNotConfirmed(email, password)
            }

            setError(message)
          }
        )
    }

    setErrors(fieldErrors)
    setIsLoading(false)
  }

  return (
    <div>
      <AuthDialogHeading
        error={error}
      />

      <Form
        errors={errors}
        onClearErrors={setErrors}
        onSubmit={(e) => { void handleSubmit(e) }}
        className='mt-4 flex flex-col gap-3'
      >
        <EmailInput />

        <div
          className='mb-3 flex flex-col'
        >
          <PasswordInput
            name='password'
          />

          <Link
            to='/auth/account-recovery'
            search={{ showLogIn: false }}
            className='mt-1 text-sm hover:underline'
            style={{ marginLeft: 'auto' }}
          >
            Forgot password?
          </Link>
        </div>

        <SubmitButton
          isLoading={isLoading}
          text='Log In'
        />

        <Link
          to='.'
          search={{ showSignUp: true }}
          className='group w-min self-center text-center text-sm text-nowrap'
        >
          Don't have an account?&nbsp;

          <span
            className='font-semibold group-hover:underline'
          >
            Sign Up
          </span>
        </Link>
      </Form>
    </div>
  )
}

export default InformationLogInStep
