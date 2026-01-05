import { PostType } from '@/generated/graphql'
import { allCapsToFirstCap } from '@/utils/util-functions'
import clsx from 'clsx'
import React from 'react'
import { useNewPostContext } from '../contexts/NewPostContext'
import { Field } from '@base-ui/react'

const NewPostType = () => {
  const { type, onTypeChange } = useNewPostContext()
  const postTypes = Object.values(PostType).reverse()

  return (
    <Field.Root
      name='type'
      className='flex items-center gap-4'
    >
      <Field.Control
        value={type}
        required
        className='sr-only'
      />

      {postTypes.map((postType) => (
        <div
          key={postType}
          className='flex flex-col'
        >
          <button
            type='button'
            className={clsx(
              'hover:bg-empty text-md rounded-2xl px-6 py-3 font-medium',
              'cursor-pointer',
              type === postType && 'bg-empty'
            )}
            onClick={onTypeChange.bind(null, postType)}
          >
            {allCapsToFirstCap(postType)}
          </button>

          <div
            className={clsx(
              'bg-sinopia mt-1 h-1 w-[50%] self-center rounded-full',
              type === postType ? 'opacity-100' : 'opacity-0',
              'transition-opacity duration-100'
            )}
          />
        </div>
      ))}
    </Field.Root>
  )
}

export default NewPostType
