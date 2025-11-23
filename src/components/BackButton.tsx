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
        'flex aspect-square h-9 items-center justify-center rounded-full select-none',
        'bg-empty border hover:bg-black/10',
        'text-base font-medium'
      )}
      {...rest}
    >
      <CgArrowLeft />
    </button>
  )
}

export default BackButton
