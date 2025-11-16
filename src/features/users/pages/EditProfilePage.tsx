import React from 'react'
import UserAvatarInput from '../components/UserAvatarInput'
import { useMyContext } from '../context/MyContext'
import TextInput from '@/components/TextInput'
import SubmitButton from '@/components/SubmitButton'
import { Form } from '@base-ui-components/react'
import { useUpdateMe } from '../hooks/useUpdateMe'
import type { UpdateMeInput } from '@/generated/graphql'
import { useToastMessage } from '@/hooks/useToastMessage'
import { CgLock } from 'react-icons/cg'

const EditProfilePage = () => {
  const { toastMessage, toastError } = useToastMessage()

  const { me } = useMyContext()
  const { update } = useUpdateMe()

  const [isLoading, setIsLoading] = React.useState(false)
  const [hasChanges, setHasChanges] = React.useState(false)

  const handleUpdateMe = async (input: UpdateMeInput) => {
    setIsLoading(true)

    const res = await update(input)

    res.match(
      () => {
        setHasChanges(false)
        toastMessage('Changes saved')
      },
      error => {
        toastError(error.message)
      }
    )

    setIsLoading(false)
  }

  const handleOnUsernameChange = (newUsername: string) => {
    setHasChanges(newUsername !== me?.username)
  }

  const handleOnSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    if (me == null) return

    const formData = new FormData(event.currentTarget as HTMLFormElement)
    const updatedUsername = formData.get('username') as string

    if (updatedUsername == null) return

    handleUpdateMe({ username: updatedUsername })
  }

  if (me == null) return null

  return (
    <Form
      className='flex flex-col items-center justify-center gap-5'
      onSubmit={handleOnSubmit}
    >
      <div
        className='flex w-full max-w-sm flex-col gap-10'
      >
        <div
          className=''
        >
          <span
            className='text-md mb-1 font-medium'
          >
            Photo
          </span>

          <UserAvatarInput
            user={me}
          />
        </div>

        <div
          className='w-full'
        >
          <span
            className='text-md font-medium'
          >
            Username
          </span>

          <div
            className='mt-1'
          >
            <TextInput
              name='username'
              defaultValue={me.username}
              onValueChange={handleOnUsernameChange}
            />
          </div>
        </div>

        <div
          className='flex w-full flex-col'
        >
          <div
            className='flex items-center justify-between'
          >
            <span
              className='text-md font-medium'
            >
              Email
            </span>

            <CgLock />
          </div>

          <span
            className='mt-1 font-medium text-black/70'
          >
            {me.email}
          </span>
        </div>

        <div
          className='flex w-30 self-center'
        >
          <SubmitButton
            disabled={!hasChanges || isLoading}
            isLoading={isLoading}
            text='Save'
          />
        </div>
      </div>
    </Form>
  )
}

export default EditProfilePage
