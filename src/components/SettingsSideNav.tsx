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
        'min-w-0 md:h-full'
      )}
    >
      <div
        className={clsx(
          'relative flex gap-2 md:flex-col md:gap-3',
          'overflow-x-auto md:overflow-visible'
        )}
      >
        {SETTINGS_NAV
          .map(section => {
            const active = currentPath.startsWith(section.to)

            return (
              <div
                key={section.heading}
                className='group flex flex-col gap-1 text-nowrap'
              >
                <Link
                  to={section.to}
                  className={clsx(
                    'p-2 px-4 font-semibold transition-colors',
                    'group-hover:bg-empty rounded-md',
                    'text-sm md:text-base',
                    active ? 'text-black' : 'text-black/60 md:text-black'
                  )}
                >
                  {section.heading}
                </Link>

                <div
                  className='px-3'
                >
                  <div
                    className={clsx(
                      active ? 'opacity-100' : 'opacity-0',
                      'h-1 w-full self-start rounded-full bg-black transition-opacity'
                    )}
                  />
                </div>
              </div>
            )
          }
          )}
      </div>
    </nav>
  )
}

export default SettingsSideNav