import { SETTINGS_NAV } from '@/common/nav'
import { Link, useRouterState } from '@tanstack/react-router'
import clsx from 'clsx'
import React from 'react'

const SettingsSideNav = () => {
  const currentPath = useRouterState().location.pathname

  return (
    <nav
      aria-label='Settings navigation'
      className={clsx(
        'h-full min-w-0'
      )}
    >
      <div
        className='relative flex h-full flex-col gap-3'
      >
        {SETTINGS_NAV
          .map(section => {
            const active = currentPath.startsWith(section.to)

            return (
              <div
                key={section.heading}
                className='group flex w-min flex-col gap-1 text-nowrap'
              >
                <Link
                  to={section.to}
                  className={clsx(
                    'p-2 px-4 font-semibold',
                    'group-hover:bg-empty rounded-md'
                  )}
                >
                  {section.heading}
                </Link>

                <div
                  className={clsx(
                    active ? 'opacity-100' : 'opacity-0',
                    'h-1 w-[80%] self-center rounded-full bg-black'
                  )}
                />
              </div>
            )
          }
          )}
      </div>
    </nav>
  )
}

export default SettingsSideNav
