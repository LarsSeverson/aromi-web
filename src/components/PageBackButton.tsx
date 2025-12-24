import React from 'react'
import { useCanGoBack, useNavigate, useRouter, type LinkProps } from '@tanstack/react-router'
import { IoMdArrowRoundBack } from 'react-icons/io'
import BouncyButton from './BouncyButton'

export interface PageBackButtonProps extends LinkProps {
  className?: string | undefined
}

const PageBackButton = (props: PageBackButtonProps) => {
  const { className, to, ...rest } = props

  const navigate = useNavigate()
  const canGoBack = useCanGoBack()
  const router = useRouter()

  const handleGoBack = () => {
    if (to != null) {
      navigate({ to, ...rest })
      return
    }

    if (canGoBack) {
      router.history.back()
    } else {
      navigate({ to: '/' })
    }
  }

  return (
    <div
      className={className}
    >
      <BouncyButton
        {...rest}
        type='button'
        className='flex items-center justify-center rounded-lg bg-white p-3 hover:brightness-95'
        onClick={handleGoBack}
      >
        <IoMdArrowRoundBack
          size={28}
        />
      </BouncyButton>
    </div>
  )
}

export default PageBackButton
