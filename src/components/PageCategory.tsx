import clsx from 'clsx'
import React from 'react'

export interface PageCategoryProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  isEmpty?: boolean | undefined
  emptyTitle?: string
  emptyBody?: string
  emptyButtonText?: string
  children?: React.ReactNode
  onEmptyButtonClick?: () => void
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
    onEmptyButtonClick,
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
        className='mb-4 flex flex-row items-center justify-between'
      >
        <h2
          className='text-lg font-semibold md:text-xl'
        >
          {title}
        </h2>
      </div>

      {isEmpty && (
        <div
          className='mt-10 w-full text-center'
        >
          <h2
            className='text-md font-semibold md:text-lg'
          >
            {emptyTitle}
          </h2>

          <h5
            className='md:text-md mt-2 mb-5 text-sm font-medium opacity-80'
          >
            {emptyBody}
          </h5>

          <button
            className='md:text-md w-2/3 max-w-xs cursor-pointer rounded-lg border bg-white px-11 py-3 text-sm font-medium hover:brightness-95'
            onClick={onEmptyButtonClick}
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