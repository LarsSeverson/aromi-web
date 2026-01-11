import clsx from 'clsx'
import React from 'react'

export interface PostPreviewCardTitleProps {
  title: string
  isDense?: boolean
}

const PostPreviewCardTitle = (props: PostPreviewCardTitleProps) => {
  const { title, isDense = true } = props

  return (
    <h2
      className={clsx(
        isDense ? 'text-[1.125rem]' : 'mb-2 text-2xl',
        'font-medium text-black/90',
        'leading-tight wrap-break-word'
      )}
    >
      {title}
    </h2>
  )
}

export default PostPreviewCardTitle
