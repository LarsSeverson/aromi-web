import clsx from 'clsx'
import React from 'react'

export interface PageCategoryProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  isEmpty?: boolean | undefined
  emptyTitle?: string
  emptyBody?: string
  emptyButtonText?: string
  children?: React.ReactNode
}

const PageCategory = (props: PageCategoryProps) => {
  const {
    title,
    children,
    isEmpty = false,
    emptyTitle = 'Nothing to show here',
    emptyBody = 'Tried this fragrance? Help out the community by sharing your experience',
    emptyButtonText = 'Write a review',
    className,
    ...rest
  } = props

  return (
    <div
      className={clsx(
        'py-2',
        className
      )}
      {...rest}
    >
      <div
        className='flex flex-row justify-between items-center mb-4'
      >
        <h2
          className='font-semibold text-xl'
        >
          {title}
        </h2>
      </div>

      {isEmpty && (
        <div
          className='w-full text-center mt-10'
        >
          <h2
            className='font-semibold text-lg'
          >
            {emptyTitle}
          </h2>

          <h5
            className='font-medium opacity-80 mb-5 mt-2'
          >
            {emptyBody}
          </h5>

          <button
            className='border-2 px-11 py-3 rounded-md font-medium hover:brightness-95 bg-white w-2/3'
          >
            {emptyButtonText}
          </button>
        </div>
      )}

      {children}
    </div>
  )
}

export default PageCategory
