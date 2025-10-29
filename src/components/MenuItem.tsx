import { Menu } from '@base-ui-components/react'
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
        'outline-none cursor-pointer select-none',
        'py-2 pl-4 pr-8 flex text-sm leading-4 relative items-center',
        'data-[highlighted]:z-0 ',
        'data-[highlighted]:before:content-[""] data-[highlighted]:before:absolute',
        'data-[highlighted]:before:inset-y-0 data-[highlighted]:before:inset-x-1',
        'data-[highlighted]:before:z-[-1] data-[highlighted]:before:rounded',
        'data-[highlighted]:before:bg-black/10'
      )}
    >
      {children}
    </Menu.Item>
  )
}

export default MenuItem
