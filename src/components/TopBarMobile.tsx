'use no memo'

import React from 'react'
import { Link, useChildMatches } from '@tanstack/react-router'
import { useAuthContext } from '@/features/auth'
import LogoSvg from './LogoSvg'
import SettingsPopover from './SettingsPopover'

const TopBarMobile = () => {
  const {
    me
  } = useAuthContext()

  const matches = useChildMatches()

  const profileMatch = matches.find((m) => m.routeId === '/users/$id')
  const matchedUserId = profileMatch?.params?.id
  const isOnMyProfile = matchedUserId != null && matchedUserId === me?.id

  return (
    <div
      className='flex h-full w-full items-center justify-between md:hidden'
    >
      {!isOnMyProfile && (
        <Link
          to='/'
          className='aspect-square h-full text-lg font-semibold'
        >
          <LogoSvg />
        </Link>
      )}

      {isOnMyProfile && (
        <div
          className='ml-auto'
        >
          <SettingsPopover />
        </div>
      )}
    </div>
  )
}

export default TopBarMobile