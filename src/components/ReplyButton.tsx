import AuthButton from '@/features/auth/components/AuthButton'
import clsx from 'clsx'
import React from 'react'
import { FaRegComment } from 'react-icons/fa'

export interface ReplyButtonProps extends React.HTMLAttributes<HTMLButtonElement> {}

export const ReplyButton = (props: ReplyButtonProps) => {
  const {
    className,
    ...rest
  } = props

  return (
    <AuthButton
      className={clsx(
        className,
        'group',
        'flex cursor-pointer items-center justify-center rounded-full',
        'hover:text-sinopia p-2 px-4 text-gray-500 hover:bg-gray-200'
      )}
      {...rest}
    >
      <FaRegComment
        className='size-4'
      />

      <span
        className='ml-2 text-xs font-semibold text-gray-500! group-hover:text-black/80!'
      >
        Reply
      </span>
    </AuthButton>
  )
}
