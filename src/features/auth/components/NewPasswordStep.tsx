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

  const { confirmForgotPassword, dialogs } = useAuthContext()
  const { openLogInDialog } = dialogs

  const navigate = useNavigate()
  const { toastMessage } = useToastMessage()

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
          toastMessage('Password updated', 'Log in with your new password')
          openLogInDialog()
          navigate({ to: '/' })
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

    handleConfirmForgotPassword(code, password)
  }

  return (
    <div
      className='flex flex-col gap-3'
    >
      <div
        className='mr-auto mb-3'
      >
        <BackButton
          onClick={onEditEmail}
        />
      </div>

      <span
        className='self-start text-2xl'
      >
        Getting back your account
      </span>

      <span
        className='text-md mt-1'
      >
        If an account with this email exists you'll get a one-time code.
      </span>

      <div
        className='my-2 flex flex-col gap-1'
      >
        <span
          className='text-md font-semibold'
        >
          Email
        </span>

        <div
          className='flex items-center gap-1'
        >
          <span
            className='text-sm font-semibold opacity-50'
          >
            {email}
          </span>

          <button
            type='button'
            className='aspect-square rounded-full p-2 hover:bg-black/10'
            onClick={onEditEmail}
          >
            <FiEdit2
              size={16}
            />
          </button>
        </div>
      </div>

      <p
        className='mt-3 text-center text-sm text-red-600'
      >
        {error}
      </p>

      <Form
        onSubmit={handleOnSubmit}
        className='flex flex-col gap-3'
      >
        <CodeInput />

        <div
          className='max-w-xs'
        >
          <PasswordInput
            name='password'
            label='Your new password'
            placeholder=''
          />
        </div>

        <div
          className='mt-2 w-full max-w-2xs'
        >
          <SubmitButton
            isLoading={isLoading}
          />
        </div>
      </Form>
    </div>
  )
}

export default NewPasswordStep
