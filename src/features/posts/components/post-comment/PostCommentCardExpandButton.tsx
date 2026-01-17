import clsx from 'clsx'
import React from 'react'
import { PiTriangleFill } from 'react-icons/pi'

export interface PostCommentCardExpandButtonProps {
  isExpanded: boolean
  isExpandable: boolean

  onToggleExpanded?: () => void
}

export const PostCommentCardExpandButton = (props: PostCommentCardExpandButtonProps) => {
  const {
    isExpanded,
    isExpandable,

    onToggleExpanded
  } = props

  return (
    <button
      className={clsx(
        'z-2 mt-1 flex items-center justify-center self-start bg-white p-2 text-gray-500',
        'rounded-full hover:bg-gray-200',
        isExpandable ? 'visible cursor-pointer hover:text-black/80' : 'invisible'
      )}
      onClick={onToggleExpanded}
    >
      <PiTriangleFill
        className={clsx(
          'aspect-square size-3.5 transition-transform duration-100',
          isExpanded ? 'rotate-180' : 'rotate-90'
        )}
      />
    </button>
  )
}
