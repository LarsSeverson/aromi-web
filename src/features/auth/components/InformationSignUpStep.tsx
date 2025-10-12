import React, { useState } from 'react'
import { Form } from '@base-ui-components/react'
import { useAuthContext } from '@/features/auth'
import { getFieldErrors } from '@/utils/validation'
import { SignUpSchema } from '../utils/validation'
import AuthDialogHeading from './AuthDialogHeading'
import PasswordInput from '@/features/auth/components/PasswordInput'
import EmailInput from './EmailInput'
import { Link } from '@tanstack/react-router'
import SubmitButton from '@/components/SubmitButton'

export interface InformationSignUpStepProps {
  onNotConfirmed: (email: string, password: string) => void
}

const InformationSignUpStep = (props: InformationSignUpStepProps) => {
  const { onNotConfirmed } = props

  const { signUp } = useAuthContext()

  const [error, setError] = useState<string | null>(null)
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setIsLoading(true)

    const formData = new FormData(e.currentTarget)
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    const fieldErrors = getFieldErrors(formData, SignUpSchema)
    const valid = Object.values(fieldErrors).length === 0

    if (valid) {
      await signUp({ email, password })
        .match(
          () => {
            onNotConfirmed(email, password)
          },
          error => {
            setError(error.message)
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
        className='flex flex-col mt-4'
        errors={errors}
        onClearErrors={setErrors}
        onSubmit={(e) => { void handleSubmit(e) }}
      >
        <EmailInput />

        <PasswordInput />

        <SubmitButton
          isLoading={isLoading}
          text='Sign Up'
        />

        <Link
          to='.'
          search={{ showLogIn: true }}
          className='text-center text-sm group w-min text-nowrap self-center'
        >
          Already have an account?&nbsp;

          <span
            className='font-semibold group-hover:underline'
          >
            Log In
          </span>
        </Link>
      </Form>
    </div>
  )
}

export default InformationSignUpStep
