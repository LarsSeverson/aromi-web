import React from 'react'
import { Link, useRouterState } from '@tanstack/react-router'
import clsx from 'clsx'
import LogoSvg from './LogoSvg'
import SearchSvg from './SearchSvg'
import HomeSvg from './HomeSvg'
import ProfileSvg from './ProfileSvg'
import { NAV_HOME, NAV_PROFILE, NAV_SEARCH } from '@/common/nav'

const SideBar = () => {
  const matches = useRouterState({ select: state => state.matches })
  const currentPath = matches[matches.length - 1]?.routeId

  return (
    <nav
      className='flex flex-col p-3 gap-7 relative border-r h-full'
    >
      <Link
        to='/'
        className={clsx(
          'transition-transform active:scale-95 backdrop-brightness-100 hover:backdrop-brightness-90 p-3 flex justify-center items-center select-none relative',
          'rounded-xl aspect-square'
        )}
      >
        <LogoSvg
          width={22}
          height={22}
        />
      </Link>

      <Link
        to='/'
        className={clsx(
          'backdrop-brightness-100 hover:backdrop-brightness-90 p-3 flex justify-center items-center select-none relative',
          'transition-transform active:scale-95',
          'rounded-xl aspect-square',
          NAV_HOME.activePaths.includes(currentPath) && 'bg-black/10'
        )}
      >
        <HomeSvg
          width={20}
          height={20}
        />
      </Link>

      <Link
        to='/search'
        className={clsx(
          'backdrop-brightness-100 hover:backdrop-brightness-90 p-3 flex justify-center items-center select-none relative',
          'transition-transform active:scale-95',
          'rounded-xl aspect-square',
          NAV_SEARCH.activePaths.includes(currentPath) && 'bg-black/10'
        )}
      >
        <SearchSvg
          width={20}
          height={20}
        />
      </Link>

      <Link
        to='/users'
        className={clsx(
          'backdrop-brightness-100 hover:backdrop-brightness-90 p-3 flex justify-center items-center select-none relative',
          'transition-transform active:scale-95',
          'rounded-xl aspect-square',
          NAV_PROFILE.activePaths.includes(currentPath) && 'bg-black/10'
        )}
      >
        <ProfileSvg
          width={20}
          height={20}
        />
      </Link>
    </nav>
  )
}

export default SideBar
