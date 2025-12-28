import clsx from 'clsx'
import React from 'react'

export interface PageCategoryProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  isEmpty?: boolean | undefined
  emptyTitle?: string
  emptyBody?: string
  emptyButtonText?: string
  showButton?: boolean
  children?: React.ReactNode
  onButtonClick?: () => void
}

const PageCategory = (props: PageCategoryProps) => {
  const {
    title,
    children,
    isEmpty = false,
    emptyTitle = 'Nothing to show here',
    emptyBody = 'Tried this fragrance? Help out the community by sharing your experience',
    emptyButtonText = 'Write a review',
    showButton = false,
    className,
    onButtonClick,
    ...rest
  } = props

  return (
    <div
      className={clsx(
        className,
        'flex flex-col py-2'
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
        </div>
      )}

      {children}

      {showButton && (
        <button
          className='md:text-md mt-5 w-2/3 max-w-xs cursor-pointer self-center rounded-lg border bg-white px-11 py-3 text-sm font-medium hover:brightness-95'
          onClick={onButtonClick}
        >
          {emptyButtonText}
        </button>
      )}
    </div>
  )
}

export default PageCategory