import BouncyButton from '@/components/BouncyButton'
import { useCanGoBack, useRouter } from '@tanstack/react-router'
import React from 'react'
import { IoMdArrowRoundBack } from 'react-icons/io'

export interface FragranceBackButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  onGoBack?: () => void
}

const FragranceBackButton = (props: FragranceBackButtonProps) => {
  const { onGoBack, ...rest } = props

  const router = useRouter()
  const canGoBack = useCanGoBack()

  const handleGoBack = () => {
    onGoBack?.()
    router.history.back()
  }

  if (!canGoBack) return null

  return (
    <BouncyButton
      {...rest}
      onClick={handleGoBack}
    >
      <IoMdArrowRoundBack
        size={32}
      />
    </BouncyButton>
  )
}

export default FragranceBackButton
