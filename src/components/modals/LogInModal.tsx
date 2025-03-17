import React, { useCallback, useRef, useState } from 'react'
import Modal, { type ModalProps } from './Modal'
import AromiLogo from '../common/AromiLogo'
import InputField, { type InputFieldHandle } from '../InputField'
import TextButton from '../TextButton'
import ButtonText from '../ButtonText'
import Divider from '../Divider'

export interface LogInModalProps extends ModalProps {}

const LogInModal = (props: LogInModalProps) => {
  const { ...rest } = props

  const emailRef = useRef<InputFieldHandle>(null)
  const passwordRef = useRef(null)

  const [loading, setLoading] = useState(true)

  const handleLoginSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (emailRef.current?.validate() === false) return

    setLoading(true)
    if (emailRef.current == null) return
    if (passwordRef.current == null) return

    setLoading(false)
  }, [])

  return (
    <Modal
      {...rest}
    >
      <div className='flex flex-col justify-center items-center gap-10 mx-20 mb-8'>
        <div className='gap-4 flex flex-col justify-center items-center'>
          <AromiLogo size={50} />
          <h1 className='text-4xl font-pd'>Welcome to aromi</h1>
        </div>

        <form
          className='w-full'
          noValidate
          onSubmit={handleLoginSubmit}
        >
          <div className='flex flex-col w-full'>
            <InputField
              ref={emailRef}
              label='Email'
              type='email'
              required
              invalidMessage='Please enter a valid email address'
            />
            <div className='flex flex-col gap-3 mb-3'>
              <InputField
                ref={passwordRef}
                label='Password'
                type='password'
                required
                invalidMessage='Please enter a password'
              />
              <TextButton
                text='forgot password?'
                style={{ marginLeft: 'auto' }}
              />
            </div>
          </div>

          <ButtonText
            type='submit'
            text='Log in'
            loading={loading}
            className=' bg-sinopia hover:bg-sinopia text-white w-full active:scale-[0.99]'
          />
        </form>
        <div
          className='w-full flex flex-col gap-2'
        >
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
