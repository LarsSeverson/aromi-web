import React, { useState } from 'react'
import { useAuthContext } from '../contexts/AuthContext'
import { Form } from '@base-ui-components/react'
import CodeInput from './CodeInput'
import PasswordInput from './PasswordInput'
import SubmitButton from '@/components/SubmitButton'
import BackButton from '@/components/BackButton'
import { FiEdit2 } from 'react-icons/fi'
import { useNavigate } from '@tanstack/react-router'
import { useToastMessage } from '@/hooks/useToastMessage'

export interface NewPasswordStepProps {
  email: string
  onEditEmail: () => void
}

const NewPasswordStep = (props: NewPasswordStepProps) => {
  const { email, onEditEmail } = props

  const navigate = useNavigate()
  const { toastMessage } = useToastMessage()
  const { confirmForgotPassword } = useAuthContext()

  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleConfirmForgotPassword = async (
    code: string,
    password: string
  ) => {
    setIsLoading(true)

    await confirmForgotPassword({ email, code, password })
      .match(
        () => {
          toastMessage('Your password has been updated')
          void navigate({ to: '/', search: { showLogIn: true } })
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
    const code = formData.get('code') as string | undefined
    const password = formData.get('password') as string | undefined

    if (code == null || password == null) return

    void handleConfirmForgotPassword(code, password)
  }

  return (
    <div
      className='flex flex-col'
    >
      <div
        className='mr-auto mb-3'
      >
        <BackButton
          onClick={onEditEmail}
        />
      </div>

      <span
        className='text-2xl self-start'
      >
        Getting back your account
      </span>

      <span
        className='text-md mt-1'
      >
        If an account with this email exists you'll get a one-time code.
      </span>

      <div
        className='flex flex-col gap-1 my-4'
      >
        <span
          className='font-semibold text-md'
        >
          Email
        </span>

        <div
          className='flex items-center gap-1'
        >
          <span
            className='font-semibold opacity-50 text-sm'
          >
            {email}
          </span>

          <button
            type='button'
            className='aspect-square rounded-full p-2 hover:bg-surface2'
            onClick={onEditEmail}
          >
            <FiEdit2
              size={16}
            />
          </button>
        </div>
      </div>

      <p
        className='text-red-600 text-sm text-center mt-3'
      >
        {error}
      </p>

      <Form
        onSubmit={handleOnSubmit}
      >
        <CodeInput />

        <PasswordInput
          label='Your new password'
          placeholder=''
        />

        <SubmitButton
          isLoading={isLoading}
        />
      </Form>
    </div>
  )
}

export default NewPasswordStep
