import React from 'react'
import BouncyButton, { type BouncyButtonProps } from './BouncyButton'

export interface SideBarButtonProps extends BouncyButtonProps {
  Icon: React.ReactNode
  active?: boolean | undefined
}

const SideBarButton = (props: SideBarButtonProps) => {
  const { Icon, active, ...rest } = props

  return (
    <BouncyButton
      {...rest}
    >
      <div className={`
        absolute
        right-[-5px]
        top-1/2
        h-2/3
        w-[3px]
        -translate-y-1/2
      bg-tawny
        rounded-full
        transition-all
        duration-300
        ease-in-out
        ${(active ?? false) ? 'opacity-100 ' : 'opacity-0'}
      `}
      />
      <div className={`${!(active ?? false) ? 'opacity-70' : ''}`}>
        {Icon}
      </div>
    </BouncyButton>
  )
}

export default SideBarButton
