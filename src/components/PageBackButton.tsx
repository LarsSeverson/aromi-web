import React from 'react'
import { useCanGoBack, useRouter, type LinkProps } from '@tanstack/react-router'
import { IoMdArrowRoundBack } from 'react-icons/io'
import BouncyButton from './BouncyButton'

export interface PageBackButtonProps extends LinkProps {
  className?: string | undefined
}

const PageBackButton = (props: PageBackButtonProps) => {
  const { className, ...rest } = props

  const canGoBack = useCanGoBack()
  const router = useRouter()

  const handleGoBack = () => {
    if (canGoBack) {
      router.history.back()
    }
  }

  return (
    <div
      className={className}
    >
      <BouncyButton
        {...rest}
        className='p-3 rounded-lg bg-white hover:brightness-95 flex items-center justify-center'
        onClick={handleGoBack}
      >
        <IoMdArrowRoundBack
          size={32}
        />
      </BouncyButton>
    </div>
  )
}

export default PageBackButton
