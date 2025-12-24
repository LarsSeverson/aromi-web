import React, { useRef, useState } from 'react'
import UserAvatar from './UserAvatar'
import clsx from 'clsx'
import Spinner from '@/components/Spinner'
import type { UserPreviewFragment } from '@/generated/graphql'
import { useSetMyAvatar } from '../hooks/useSetMyAvatar'

export interface UserAvatarInputProps {
  user: Omit<UserPreviewFragment, 'relationship'>
}

const UserAvatarInput = (props: UserAvatarInputProps) => {
  const { user } = props

  const { setAvatarWithFile } = useSetMyAvatar()

  const fileInputRef = useRef<HTMLInputElement>(null)

  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleUpdateUserAvatar = async (file: File) => {
    if (isLoading) return

    setError(null)
    setIsLoading(true)

    const res = await setAvatarWithFile(file)

    setIsLoading(false)

    res.match(
      () => {
        // do nothing
      },
      err => {
        setError(err.message)
      }
    )
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file == null) return

    e.currentTarget.value = ''
    handleUpdateUserAvatar(file)
  }

  const handleOnEdit = () => {
    if (isLoading) return
    fileInputRef.current?.click()
  }

  return (
    <div
      className='flex w-full flex-col'
    >
      <div
        className='relative flex w-full flex-col items-center'
      >
        <button
          type='button'
          onClick={handleOnEdit}
          className='group relative w-50 cursor-pointer overflow-hidden rounded-full border'
        >
          <UserAvatar
            user={user}
          />

          <div
            className={clsx(
              'absolute inset-0 group-hover:bg-black/30',
              isLoading && 'bg-black/30'
            )}
          />

          {isLoading && (
            <div
              className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
            >
              <Spinner
                className='border-white'
                size={10}
              />
            </div>
          )}
        </button>

        <div
          className='my-3 flex overflow-hidden'
        >
          <span
            className='text-md min-w-0 text-center font-medium wrap-break-word text-red-700'
          >
            {error}
          </span>
        </div>

        <button
          type='button'
          className='bg-empty text-md cursor-pointer rounded-lg px-4 py-2 font-medium hover:bg-gray-200'
          onClick={handleOnEdit}
        >
          Change
        </button>
      </div>

      <input
        ref={fileInputRef}
        type='file'
        accept='image/png,image/jpeg,image/webp'
        className='hidden'
        onChange={handleFileChange}
      />
    </div>
  )
}

export default UserAvatarInput
