import { NAV_HOME } from '@/common/nav'
import { Link, useRouterState } from '@tanstack/react-router'
import clsx from 'clsx'
import React from 'react'
import HomeSvg from './HomeSvg'
import UserAvatar from '@/features/users/components/UserAvatar'
import { useMyContext } from '@/features/users'

const MobileNavBar = () => {
  const { me } = useMyContext()

  const matches = useRouterState({ select: state => state.matches })
  const currentPath = matches[matches.length - 1]?.routeId

  return (
    <nav
      className={clsx(
        'relative z-50 flex h-full items-center p-3 px-7 shadow-[0_-2px_10px_rgba(0,0,0,0.05)]'
      )}
    >
      <div
        className='flex h-8 w-full items-center justify-between'
      >
        <Link
          to='/'
          className={clsx(
            'relative flex items-center justify-center backdrop-brightness-100 select-none hover:backdrop-brightness-90',
            'transition-transform active:scale-95',
            'aspect-square h-full rounded-xl',
            NAV_HOME.activePaths.includes(currentPath) && 'text-black/10'
          )}
        >
          <HomeSvg
            height={24}
          />
        </Link>

        {/* <Link
        to='/search'
        className={clsx(
          'relative flex items-center justify-center p-3 backdrop-brightness-100 select-none hover:backdrop-brightness-90',
          'transition-transform active:scale-95',
          'aspect-square rounded-xl',
          NAV_SEARCH.activePaths.includes(currentPath) && 'bg-black/10'
        )}
      >
        <SearchSvg
          width={20}
          height={20}
        />
      </Link> */}

        <Link
          to='/users'
          className={clsx(
            'relative flex items-center justify-center backdrop-brightness-100 select-none hover:backdrop-brightness-90',
            'transition-transform active:scale-95',
            'aspect-square h-full rounded-xl'
          )}
        >
          <UserAvatar
            user={me}
          />
        </Link>
      </div>
    </nav>
  )
}

export default MobileNavBar
