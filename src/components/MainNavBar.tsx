'use no memo'

import React from 'react'
import { Link, useRouter, useRouterState } from '@tanstack/react-router'
import clsx from 'clsx'
import LogoSvg from './LogoSvg'
import HomeSvg from './HomeSvg'
import ProfileSvg from './ProfileSvg'
import { NAV_COMMUNITY, NAV_HOME, NAV_PROFILE } from '@/common/nav'
import { useMyContext } from '@/features/users'
import SettingsPopover from './SettingsPopover'
import { HiUserGroup } from 'react-icons/hi'

export interface MainNavBarProps {
  className?: string
}

const MainNavBar = (props: MainNavBarProps) => {
  const { className } = props

  const router = useRouter()
  const matches = useRouterState({ select: state => state.matches })
  const currentPath = matches[matches.length - 1]?.routeId

  const match = router.matchRoute('/users/$id')
  const matchedUserId: string | undefined = (match as { id: string })?.id

  const { me } = useMyContext()

  const isOnMyProfile = matchedUserId != null && matchedUserId === me?.id

  const handleLogoClick = () => {
    if (window.location.pathname === '/') {
      window.scrollTo({
        top: 0,
        behavior: 'auto'
      })
    }
  }

  return (
    <nav
      className={clsx(
        className,
        'relative z-50 flex h-full flex-col gap-7 border-r p-3'
      )}
    >
      <Link
        to='/'
        className={clsx(
          'relative flex items-center justify-center p-2 backdrop-brightness-100 transition-transform select-none hover:backdrop-brightness-90 active:scale-95',
          'aspect-square rounded-xl'
        )}
        onClick={handleLogoClick}
      >
        <LogoSvg />
      </Link>

      <Link
        to='/'
        className={clsx(
          'relative flex items-center justify-center p-3 backdrop-brightness-100 select-none hover:backdrop-brightness-90',
          'transition-transform active:scale-95',
          'aspect-square rounded-xl',
          NAV_HOME.activePaths.includes(currentPath) && 'bg-black/10'
        )}
      >
        <HomeSvg
          width={20}
          height={20}
        />
      </Link>

      <Link
        to='/posts'
        className={clsx(
          'relative flex items-center justify-center p-3 backdrop-brightness-100 select-none hover:backdrop-brightness-90',
          'transition-transform active:scale-95',
          'aspect-square overflow-hidden rounded-xl',
          NAV_COMMUNITY.activePaths.includes(currentPath) && 'bg-black/10'
        )}
      >
        <HiUserGroup
          size={25}
        />
      </Link>

      <Link
        to='/users'
        className={clsx(
          'relative flex items-center justify-center p-3 backdrop-brightness-100 select-none hover:backdrop-brightness-90',
          'transition-transform active:scale-95',
          'aspect-square rounded-xl',
          isOnMyProfile && NAV_PROFILE.activePaths.includes(currentPath) && 'bg-black/10'
        )}
      >
        <ProfileSvg
          width={20}
          height={20}
        />
      </Link>

      <SettingsPopover
        isActive={currentPath.includes('settings')}
      />
    </nav>
  )
}

export default MainNavBar
