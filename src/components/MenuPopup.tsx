import { Menu } from '@base-ui-components/react'
import clsx from 'clsx'
import React from 'react'

export interface MenuPopupProps {
  children?: React.ReactNode
}

const MenuPopup = (props: MenuPopupProps) => {
  const { children } = props

  return (
    <Menu.Popup
      className={clsx(
        'origin-[var(--transform-origin)]',
        'rounded-lg py-1',
        'text-gray-900 bg-white',
        'shadow-symmetrical shadow-black/10',
        'border',
        'transition-[transform,scale,opacity]',
        'data-[ending-style]:scale-90 data-[ending-style]:opacity-0',
        'data-[starting-style]:scale-90 data-[starting-style]:opacity-0'
      )}
      onClick={(e) => { e.stopPropagation() }}
    >
      {children}
    </Menu.Popup>
  )
}

export default MenuPopup
