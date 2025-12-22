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

  const { logIn, dialogs } = useAuthContext()
  const { openSignUpDialog, closeAllDialogs } = dialogs

  const [error, setError] = useState<string | null>(null)
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  const handleLogIn = async (email: string, password: string) => {
    setIsLoading(true)

    const res = await logIn({ email, password })

    setIsLoading(false)

    if (res.isOk()) {
      window.location.reload()
      return
    }

    const { code, message } = res.error

    if (['NOT_CONFIRMED'].includes(code)) {
      onNotConfirmed(email, password)
    }

    setError(message)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setError(null)

    const formData = new FormData(e.currentTarget)
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    const fieldErrors = getFieldErrors(LogInSchema, { email, password })
    const valid = Object.values(fieldErrors).length === 0

    if (valid) {
      handleLogIn(email, password)
    }

    setErrors(fieldErrors)
  }

  return (
    <div>
      <AuthDialogHeading
        error={error}
      />

      <Form
        errors={errors}
        onSubmit={handleSubmit}
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
            className='mt-1 ml-auto text-sm hover:underline'
            onClick={closeAllDialogs}
          >
            Forgot password?
          </Link>
        </div>

        <SubmitButton
          isLoading={isLoading}
          text='Log In'
        />

        <button
          className='group w-min cursor-pointer self-center text-center text-sm text-nowrap'
          type='button'
          onClick={openSignUpDialog}
        >
          Don't have an account?&nbsp;

          <span
            className='font-semibold group-hover:underline'
          >
            Sign Up
          </span>
        </button>
      </Form>

      <p
        className='mt-4 text-center text-xs text-black/80'
      >
        By continuing, you acknowledge that you have read and understood our&nbsp;
        <Link
          to='/privacy'
          className='cursor-pointer underline'
          onClick={closeAllDialogs}
        >
          Privacy Policy
        </Link>
      </p>
    </div>
  )
}

export default InformationLogInStep
