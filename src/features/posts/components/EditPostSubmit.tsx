import React from 'react'
import { useEditPostContext } from '../contexts/EditPostContext'
import clsx from 'clsx'
import Spinner from '@/components/Spinner'
import { useCanGoBack, useNavigate, useRouter } from '@tanstack/react-router'

const EditPostSubmit = () => {
  const { isLoading, isUploading } = useEditPostContext()

  const navigate = useNavigate()
  const canGoBack = useCanGoBack()
  const router = useRouter()

  const handleOnCancelClick = () => {
    if (canGoBack) {
      router.history.back()
    } else {
      navigate({ to: '/' })
    }
  }

  return (
    <div
      className='mt-4 flex w-full justify-end'
    >
      <button
        type='button'
        disabled={isLoading || isUploading}
        className={clsx(
          'group  flex cursor-pointer overflow-hidden rounded-3xl px-6 py-2 text-black',
          'bg-gray-200 transition-opacity duration-150 hover:brightness-95',
          'items-center gap-1.5',
          'relative mr-4'
        )}
        onClick={handleOnCancelClick}
      >
        <span>
          Cancel
        </span>
      </button>

      <button
        type='submit'
        disabled={isLoading || isUploading}
        className={clsx(
          'group hover:shadow-symmetrical flex cursor-pointer overflow-hidden rounded-3xl px-6 py-2 text-white',
          'bg-sinopia transition-opacity duration-150 hover:brightness-110',
          'items-center gap-1.5',
          'relative'
        )}
      >
        <Spinner
          className={clsx(
            'border-white',
            isLoading ? 'opacity-100' : 'opacity-0'
          )}
        />

        <span
          className={clsx(
            isLoading ? 'opacity-0' : 'opacity-100'
          )}
        >
          Done
        </span>
      </button>
    </div>
  )
}

export default EditPostSubmit
