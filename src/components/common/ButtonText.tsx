import React from 'react'
import BouncyButton, { type BouncyButtonProps } from './BouncyButton'
import clsx from 'clsx'
import Spinner from './Spinner'

export interface ButtonTextProps extends BouncyButtonProps {
  text: string
  loading?: boolean | undefined
}

const ButtonText = (props: ButtonTextProps) => {
  const { text, className, loading, ...rest } = props

  const combinedClass = clsx(
    `
      items-center 
      justify-center
      rounded-xl
    `,
    className
  )

  return (
    <BouncyButton
      className={combinedClass}
      {...rest}
    >
      <div
        className='font-semibold flex items-center justify-center h-full'
        style={{ opacity: (loading ?? false) ? '0' : '1' }}
      >
        {text}
      </div>
      {(loading ?? false) && <Spinner />}
    </BouncyButton>
  )
}

export default ButtonText
