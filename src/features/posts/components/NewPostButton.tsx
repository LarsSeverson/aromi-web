import { Link } from '@tanstack/react-router'
import clsx from 'clsx'
import React from 'react'
import { FaRegSquarePlus } from 'react-icons/fa6'

const NewPostButton = () => {
  return (
    <Link
      to='/community/posts/new'
      className={clsx(
        'group hover:shadow-symmetrical flex cursor-pointer overflow-hidden rounded-3xl px-6 py-2 text-white',
        'bg-sinopia transition-opacity duration-150 hover:brightness-110',
        'min-w-0 items-center gap-1.5 truncate text-sm text-nowrap'
      )}
    >
      <FaRegSquarePlus
        size={16}
      />

      New Post
    </Link>
  )
}

export default NewPostButton
