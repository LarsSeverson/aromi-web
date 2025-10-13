import { ACCOUNT_NAV } from '@/utils/AccountNav'
import { Link, useRouterState } from '@tanstack/react-router'
import clsx from 'clsx'
import React from 'react'

const AccountNavigation = () => {
  const currentPath = useRouterState().location.pathname

  return (
    <nav
      aria-label='Account navigation'
      className={clsx(
        'h-full min-w-0'
      )}
    >
      <div
        className='relative h-full flex flex-col gap-3'
      >
        {ACCOUNT_NAV
          .map(section => {
            const active = currentPath.startsWith(section.href)
            return (
              <div
                key={section.heading}
                className='flex flex-col group gap-1'
              >
                <Link
                  to={section.href}
                  className={clsx(
                    'p-2 px-4 ext-md font-semibold text-light',
                    'group-hover:bg-empty rounded-md'
                  )}
                >
                  {section.heading}
                </Link>

                <div
                  className={clsx(
                    active ? 'opacity-100' : 'opacity-0',
                    'bg-white rounded-full h-1 w-[90%] self-center'
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

export default AccountNavigation
