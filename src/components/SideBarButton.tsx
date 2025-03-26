import React from 'react'
import { Link } from '@tanstack/react-router'
import clsx from 'clsx'

export interface SideBarButtonProps extends React.HTMLAttributes<HTMLAnchorElement> {
  Icon: React.ReactNode
  active?: boolean | undefined
  to: string
}

const SideBarButton = (props: SideBarButtonProps) => {
  const { Icon, active, to, className, ...rest } = props

  return (
    <Link
      to={to}
      className={clsx(
        'transition-transform active:scale-95 backdrop-brightness-100 hover:backdrop-brightness-90 p-3 flex justify-center items-center select-none relative',
        'rounded-xl aspect-square',
        className
      )}
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
    </Link>
  )
}

export default SideBarButton
