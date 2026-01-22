import React from 'react'
import { useEditPostCommentContext } from '../../contexts/EditPostCommentContext'
import clsx from 'clsx'
import Spinner from '@/components/Spinner'

export const PostCommentEditorSubmit = () => {
  const {
    isLoading,
    hasChanges,
    onIsEditingChange
  } = useEditPostCommentContext()

  const isSubmittable = hasChanges && !isLoading

  const handleOnCancel = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()
    event.preventDefault()
    onIsEditingChange?.(false)
  }

  return (
    <div
      className='ml-auto flex gap-2'
    >
      <button
        type='button'
        disabled={isLoading}
        className={clsx(
          isLoading ? 'opacity-50' : 'group cursor-pointer hover:bg-gray-300',
          'flex overflow-hidden rounded-3xl px-4 py-2 text-sm',
          'bg-gray-200 transition-opacity duration-150',
          'items-center gap-1.5',
          'relative'
        )}
        onClick={handleOnCancel}
      >
        <span>
          Cancel
        </span>
      </button>

      <button
        type='submit'
        disabled={!isSubmittable}
        className={clsx(
          isSubmittable ? 'group hover:shadow-symmetrical cursor-pointer hover:brightness-110' : 'opacity-50',
          'flex overflow-hidden rounded-3xl px-4 text-sm text-white',
          'bg-sinopia transition-opacity duration-150',
          'items-center',
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
          Save
        </span>
      </button>
    </div>
  )
}
