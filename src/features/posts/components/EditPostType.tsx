import React from 'react'
import { useEditPostContext } from '../contexts/EditPostContext'
import { Field } from '@base-ui/react'
import { allCapsToFirstCap } from '@/utils/util-functions'
import clsx from 'clsx'

const EditPostType = () => {
  const { post } = useEditPostContext()
  const { type } = post

  return (
    <Field.Root
      name='type'
      className='flex w-min flex-col items-center'
    >
      <Field.Control
        value={type}
        required
        className='sr-only'
      />

      <div
        className={clsx(
          'hover:bg-empty text-md rounded-2xl px-6 py-3 font-medium',
          'bg-empty'
        )}
      >
        {allCapsToFirstCap(type)}
      </div>

      <div
        className={clsx(
          'bg-sinopia mt-1 h-1 w-[50%] self-center rounded-full',
          'transition-opacity duration-100'
        )}
      />
    </Field.Root>
  )
}

export default EditPostType
