import React, { useState } from 'react'
import Modal, { type ModalProps } from './Modal'
import Form from '../common/Form'
import { useAuthContext } from '@/contexts/AuthContext'
import { AuthErrorCode } from '@/common/auth-errors'
import { Logo } from '../common/Icons'
import TextButton from '../common/TextButton'
import Divider from '../common/Divider'
import ButtonText from '../common/ButtonText'

export interface LogInModalProps extends ModalProps {}

const LogInModal = (props: LogInModalProps) => {
  const { validateEmail, userLogIn } = useAuthContext()
  const { ...rest } = props

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleLoginSubmit = async (values: Map<string, string>): Promise<void> => {
    setError('')

    const email = values.get('email')
    const password = values.get('password')

    if (email == null || password == null) return

    setLoading(true)
    const { success, error } = await userLogIn(email, password)
    setLoading(false)

    if (success) {
      window.location.reload()
      return
    }

    if (error != null) {
      if (error.code === AuthErrorCode.SIGN_UP_INCOMPLETE) {
        //
      }

      setError(error.message)
    }
  }

  const validateEmailFn = (email: string): string | null => {
    if (email.length === 0) return 'Please enter your email address'
    if (!validateEmail(email)) return 'Please enter a valid email address'

    return null
  }

  const validatePasswordFn = (password: string): string | null => {
    if (password.length === 0) return 'Please enter your password'

    return null
  }

  return (
    <Modal
      {...rest}
      className='p-3'
    >
      <div className='flex flex-col justify-center items-center gap-10 mx-20 mb-8'>
        <div className='gap-4 flex flex-col justify-center items-center'>
          <Logo size={50} />
          <h1 className='text-4xl font-pd'>Welcome to aromi</h1>
        </div>

        <div className='w-full flex flex-col gap-3'>
          {error.length > 0 && (
            <div className='text-center text-red-500'>
              {error}
            </div>
          )}
          <Form
            className='w-full flex flex-col gap-3'
            onSubmit={(values) => { void handleLoginSubmit(values) }}
          >
            <Form.Input
              name='email'
              label='Email'
              type='email'
              validate={validateEmailFn}
            />
            <Form.Input
              name='password'
              label='Password'
              type='password'
              validate={validatePasswordFn}
            />
            <TextButton
              text='forgot password?'
              className='font-pd'
              style={{ marginLeft: 'auto' }}
            />
            <Form.Submit
              component={ButtonText}
              text='Log in'
              loading={loading}
              className=' bg-sinopia hover:bg-sinopia text-white w-full active:scale-[0.99]'
            />
          </Form>
          <div className='flex flex-row items-center gap-5 px-5'>
            <Divider horizontal />
            <p>or</p>
            <Divider horizontal />
          </div>
          <ButtonText
            text='Continue with Google'
            className='bg-white border-2 hover:bg-white active:scale-[0.99] hover:brightness-[.98]'
          />
        </div>
      </div>
    </Modal>
  )
}

export default LogInModal
