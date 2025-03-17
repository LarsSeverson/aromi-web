import React from 'react'
import BouncyButton, { type BouncyButtonProps } from './BouncyButton'
import clsx from 'clsx'
import Spinner from './common/Spinner'

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
      px-[15px] 
      py-[10px] 
      rounded-[20px] 
    bg-gray-200 
    hover:bg-gray-200
      hover:brightness-90
    `,
    className
  )

  return (
    <BouncyButton
      className={combinedClass}
      {...rest}
    >
      <p className='font-p text-[17px] mt-[-4px]' style={{ opacity: (loading ?? false) ? '0' : '1' }}>
        {text}
      </p>
      {(loading ?? false) && <Spinner />}
    </BouncyButton>
  )
}

export default ButtonText
