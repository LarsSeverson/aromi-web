import React, { useState } from 'react'
import { Form } from '@base-ui-components/react'
import { useAuthContext } from '@/features/auth'
import { getFieldErrors } from '@/utils/validation'
import { SignUpSchema } from '../utils/validation'
import AuthDialogHeading from './AuthDialogHeading'
import PasswordInput from '@/features/auth/components/PasswordInput'
import EmailInput from './EmailInput'
import SubmitButton from '@/components/SubmitButton'

export interface InformationSignUpStepProps {
  onNotConfirmed: (email: string, password: string) => void
}

const InformationSignUpStep = (props: InformationSignUpStepProps) => {
  const { onNotConfirmed } = props

  const { signUp, dialogs } = useAuthContext()
  const { openLogInDialog } = dialogs

  const [error, setError] = useState<string | null>(null)
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  const handleSignUp = async (email: string, password: string) => {
    setIsLoading(true)

    const res = await signUp({ email, password })

    setIsLoading(false)

    if (res.isOk()) {
      onNotConfirmed(email, password)
      return
    }

    const { message } = res.error

    setError(message)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setError(null)

    const formData = new FormData(e.currentTarget)
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    const fieldErrors = getFieldErrors(SignUpSchema, { email, password })
    const valid = Object.values(fieldErrors).length === 0

    if (valid) {
      handleSignUp(email, password)
    }

    setErrors(fieldErrors)
  }

  return (
    <div>
      <AuthDialogHeading
        error={error}
      />

      <Form
        className='mt-4 flex flex-col gap-3'
        errors={errors}
        onSubmit={handleSubmit}
      >
        <EmailInput />

        <div
          className='mb-3'
        >
          <PasswordInput
            name='password'
          />
        </div>

        <SubmitButton
          isLoading={isLoading}
          text='Sign Up'
        />

        <button
          className='group w-min cursor-pointer self-center text-center text-sm text-nowrap'
          type='button'
          onClick={openLogInDialog}
        >
          Already have an account?&nbsp;

          <span
            className='font-semibold group-hover:underline'
          >
            Log In
          </span>
        </button>
      </Form>
    </div>
  )
}

export default InformationSignUpStep
