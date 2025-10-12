import { Form } from '@base-ui-components/react'
import React, { useState } from 'react'
import EmailInput from './EmailInput'
import SubmitButton from '@/components/SubmitButton'
import { useAuthContext } from '../contexts/AuthContext'
import ErrorFeedback from '@/components/ErrorFeedback'

export interface InformationPasswordStepProps {
  onContinue: (email: string) => void
}

const InformationPasswordStep = (props: InformationPasswordStepProps) => {
  const { onContinue } = props

  const { forgotPassword } = useAuthContext()

  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleForgotPassword = async (email: string) => {
    setIsLoading(true)
    await forgotPassword({ email })
      .match(
        () => {
          onContinue(email)
        },
        error => {
          setError(error.message)
        }
      )

    setIsLoading(false)
  }

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    e.stopPropagation()

    const formData = new FormData(e.currentTarget)
    const email = formData.get('email') as string | undefined

    if (email == null) return

    void handleForgotPassword(email)
  }

  return (
    <div
      className='flex flex-col'
    >
      <span
        className='text-2xl self-start'
      >
        Getting back your account
      </span>

      <span
        className='text-md mt-1'
      >
        Tell us some information about your account.
      </span>

      <ErrorFeedback
        error={error}
      />

      <Form
        onSubmit={handleOnSubmit}
      >
        <EmailInput
          label='Enter your email'
          placeholder=''
        />

        <SubmitButton
          isLoading={isLoading}
          text='Continue'
        />
      </Form>
    </div>
  )
}

export default InformationPasswordStep
