import clsx from 'clsx'
import React from 'react'
import { CgArrowLeft } from 'react-icons/cg'

export interface BackButtonProps extends React.HTMLAttributes<HTMLButtonElement> {

}

const BackButton = (props: BackButtonProps) => {
  const { className, ...rest } = props

  return (
    <button
      type='button'
      className={clsx(
        'flex h-9 aspect-square items-center justify-center select-none rounded-full',
        'border border-surface2 bg-empty hover:bg-black/10',
        'text-base font-medium',
        'focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-1'
      )}
      {...rest}
    >
      <CgArrowLeft />
    </button>
  )
}

export default BackButton
