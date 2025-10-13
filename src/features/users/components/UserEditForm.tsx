import React, { useState } from 'react'
import { type IMeSummary } from '../types'
import UserAttribute from './UserAttribute'
import TextButton from '@/components/TextButton'
import EditableUserAvatar from './EditableUserAvatar'
import clsx from 'clsx'
import { Form } from '@base-ui-components/react'
import TextInput from '@/components/TextInput'
import { useUpdateUser } from '../hooks/useUpdateUser'
import { extractGraphQLError } from '@/utils/error'
import { useToastMessage } from '@/hooks/useToastMessage'
import ErrorFeedback from '@/components/ErrorFeedback'

export interface UserEditFormProps {
  user: IMeSummary
  onDone?: () => void
}

const UserEditForm = (props: UserEditFormProps) => {
  const { user, onDone } = props
  const { id, username, email } = user

  const { toastMessage } = useToastMessage()
  const { updateUser } = useUpdateUser()

  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)

  const handleUpdateUser = async (
    newUsername: string
  ) => {
    setIsLoading(true)

    await updateUser({ id, username: newUsername })
      .match(
        () => {
          toastMessage('Username updated')
          setHasInteracted(false)
          setError(null)
        },
        error => {
          setError(extractGraphQLError(error))
        }
      )

    setIsLoading(false)
  }

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    event.stopPropagation()

    const formData = new FormData(event.currentTarget)
    const newUsername = formData.get('Username') as string | undefined

    if (newUsername == null) return

    void handleUpdateUser(newUsername)
  }

  return (
    <div
      className='min-w-96 flex flex-col gap-5 items-center'
    >
      <div
        className='max-w-60'
      >
        <EditableUserAvatar
          user={user}
        />
      </div>

      <ErrorFeedback
        error={error}
      />

      <Form
        className='flex flex-col gap-5 w-full max-w-80'
        onSubmit={handleOnSubmit}
      >
        <TextInput
          label='Username'
          placeholder='Your new username'
          defaultValue={username}
          onValueChange={() => {
            setHasInteracted(true)
          }}
        />

        <div
          className='opacity-60'
        >
          <UserAttribute
            label='Email'
            value={email}
          />
        </div>

        <div
          className='flex gap-3 mt-3 self-start'
        >
          <TextButton
            text='Cancel'
            onClick={onDone}
          />

          <div
            className={clsx(
              !hasInteracted && 'opacity-70'
            )}
          >
            <TextButton
              type='submit'
              text='Save changes'
              isLoading={isLoading}
              disabled={!hasInteracted}
            />
          </div>
        </div>
      </Form>

    </div>
  )
}

export default UserEditForm
