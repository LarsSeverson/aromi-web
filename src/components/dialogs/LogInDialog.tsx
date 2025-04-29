import React, { useState } from 'react'
import { Dialog, Field, Form } from '@base-ui-components/react'
import { Logo } from '../common/Icons'
import clsx from 'clsx'
import Spinner from '../common/Spinner'
import Divider from '../common/Divider'
import ButtonText from '../common/ButtonText'
import { z } from 'zod'

const loginSchema = z.object({
  email: z.string({ required_error: 'Email is required' })
    .email('Please enter a valid email address'),
  password: z.string({ required_error: 'Password is required' })
    .min(8, 'Password must be at least 8 characters long')
})

const LogInDialog = () => {
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)

  const parseForm = (formData: FormData) => {
    const result = loginSchema.safeParse(Object.fromEntries(formData))

    if (!result.success) {
      return result.error.flatten().fieldErrors
    }

    return {}
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setLoading(true)

    const formData = new FormData(e.currentTarget)
    const response = parseForm(formData)
    const valid = Object.values(response).length === 0



    setErrors(response)
    setLoading(false)
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger
        className='bg-gray-200 h-9 rounded-md text-sm font-semibold flex items-center justify-center p-3'
        style={{ height: 35 }}
      >
        Log In
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Backdrop
          className='bg-black/30 backdrop-blur-sm fixed inset-0'
        />
        <Dialog.Popup
          className='bg-white top-1/2 left-1/2 fixed -translate-x-1/2 -translate-y-1/2 rounded-xl overflow-hidden p-11 px-20'
        >
          <div
            className='gap-4 flex flex-col justify-center items-center'
          >
            <Logo
              size={50}
            />
            <h1
              className='text-4xl font-pd mb-4'
            >
              Welcome to aromi
            </h1>
          </div>

          <Form
            errors={errors}
            onClearErrors={setErrors}
            onSubmit={handleSubmit}
            className='flex flex-col'
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
                placeholder='Password'
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
              className='font-pd text-sm hover:underline active:scale-[0.99]'
              style={{ marginLeft: 'auto' }}
            >
              forgot password?
            </button>

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
                Log In
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
          </Form>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default LogInDialog
