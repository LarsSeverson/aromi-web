import React from 'react'
import BouncyButton, { type BouncyButtonProps } from './BouncyButton'
import clsx from 'clsx'

export interface TextButtonProps extends BouncyButtonProps {
  text: string
}

const TextButton = (props: TextButtonProps) => {
  const { text, className, ...rest } = props

  return (
    <BouncyButton
      className={clsx(`
        inline-block
        px-0 
        py-0
        rounded-none
        bg-transparent 
        hover:bg-transparent
        hover:backdrop-brightness-200
      `,
      className)}
      {...rest}
    >
      <span className='font-p font-semibold opacity-95 text-[16px] mt-[-4px] hover:underline'>
        {text}
      </span>
    </BouncyButton>
  )
}

export default TextButton
