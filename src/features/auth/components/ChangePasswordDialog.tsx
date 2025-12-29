import { useToastMessage } from '@/hooks/useToastMessage'
import { Dialog, Form } from '@base-ui/react'
import React from 'react'
import { useChangePassword } from '../hooks/useChangePassword'
import { ChangePasswordSchema } from '../utils/validation'
import z from 'zod'
import PasswordInput from './PasswordInput'
import clsx from 'clsx'
import Spinner from '@/components/Spinner'

const ChangePasswordDialog = () => {
  const { toastMessage, toastError } = useToastMessage()

  const { changePassword } = useChangePassword()

  const [errors, setErrors] = React.useState({})
  const [isLoading, setIsLoading] = React.useState(false)
  const [isOpen, setIsOpen] = React.useState(false)

  const handleChangePassword = async (oldPassword: string, newPassword: string) => {
    setIsLoading(true)

    const res = await changePassword({ oldPassword, newPassword })

    res.match(
      () => {
        toastMessage('Your password has been updated')
        setIsOpen(false)
      },
      error => {
        const status = error.status

        const message = status === 401
          ? 'Current password is incorrect'
          : error.message

        toastError(message)
      }
    )

    setIsLoading(false)
  }

  const handleOnSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget as HTMLFormElement)
    const oldPassword = formData.get('oldPassword') as string
    const newPassword = formData.get('newPassword') as string

    const result = ChangePasswordSchema.safeParse({ oldPassword, newPassword })

    if (!result.success) {
      const fieldErrors = z.flattenError(result.error).fieldErrors
      setErrors(fieldErrors)

      return
    }

    handleChangePassword(oldPassword, newPassword)
  }

  return (
    <Dialog.Root
      open={isOpen}
      onOpenChange={setIsOpen}
    >
      <Dialog.Trigger
        className='bg-empty text-md cursor-pointer rounded-xl px-4 py-3 font-medium text-nowrap hover:bg-gray-200'
      >
        Change password
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Backdrop
          className='fixed inset-0 bg-black/30 backdrop-blur-sm'
        />

        <Dialog.Popup
          className='fixed top-1/2 left-1/2 w-130 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-xl bg-white'
        >
          <Dialog.Title
            className='pt-4 text-center text-2xl font-medium'
          >
            Change Password
          </Dialog.Title>

          <Form
            className='relative flex flex-col'
            onSubmit={handleOnSubmit}
            errors={errors}
          >
            <div
              className='flex w-full max-w-sm flex-col gap-5 self-center p-6 pb-15'
            >
              <PasswordInput
                name='oldPassword'
                label='Current Password'
                placeholder=''
                required
              />

              <PasswordInput
                name='newPassword'
                label='New Password'
                placeholder=''
                required
              />
            </div>

            <div
              className='flex justify-between bg-white px-5 py-2 shadow-[0_0px_10px_0px_rgba(0,0,0,0.1)]'
            >
              <Dialog.Close
                className='bg-empty cursor-pointer rounded-full px-7 py-3 hover:brightness-95'
              >
                Cancel
              </Dialog.Close>

              <button
                type='submit'
                disabled={isLoading}
                className={clsx(
                  'bg-sinopia rounded-full px-7 py-3 text-white brightness-100 hover:shadow-lg hover:brightness-105',
                  'relative flex cursor-pointer items-center justify-center'
                )}
              >
                {isLoading && (
                  <Spinner className='border-white' />
                )}

                <div
                  className={clsx(isLoading && 'opacity-0')}
                >
                  Confirm
                </div>
              </button>
            </div>
          </Form>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default ChangePasswordDialog
