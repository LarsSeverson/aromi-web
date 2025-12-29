import { Menu } from '@base-ui/react'
import clsx from 'clsx'
import React from 'react'

export interface MenuItemProps extends Menu.Item.Props {
  children?: React.ReactNode
}

const MenuItem = (props: MenuItemProps) => {
  const { children, ...rest } = props

  return (
    <Menu.Item
      {...rest}
      className={clsx(
        rest.className,
        'cursor-pointer outline-none select-none',
        'relative flex items-center py-3 pr-8 pl-4 text-sm leading-4',
        'data-highlighted:z-0 ',
        'data-highlighted:before:absolute data-highlighted:before:content-[""]',
        'data-highlighted:before:inset-x-1 data-highlighted:before:inset-y-0',
        'data-highlighted:before:z-[-1] data-highlighted:before:rounded',
        'data-highlighted:before:bg-empty'
      )}
    >
      {children}
    </Menu.Item>
  )
}

export default MenuItem
