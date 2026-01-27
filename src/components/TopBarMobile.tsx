'use no memo'

import React from 'react'
import { useChildMatches } from '@tanstack/react-router'
import { useAuthContext } from '@/features/auth'
import SettingsPopover from './SettingsPopover'
import clsx from 'clsx'

const TopBarMobile = () => {
  const {
    me
  } = useAuthContext()

  const matches = useChildMatches()

  const profileMatch = matches.find((m) => m.routeId === '/users/$id')
  const matchedUserId = profileMatch?.params?.id
  const isOnMyProfile = matchedUserId != null && matchedUserId === me?.id

  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop
      setIsScrolled(scrollTop > 0)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  if (!isOnMyProfile) return null

  return (
    <div
      className={clsx(
        'flex flex-row gap-3 p-3 px-3.5',
        'sticky top-0 z-40 overflow-hidden bg-white',
        'items-center justify-end',
        isScrolled && 'shadow-[0_2px_4px_rgba(0,0,0,0.04)]'
      )}
    >
      <div
        className='ml-auto'
      >
        <SettingsPopover />
      </div>
    </div>
  )
}

export default TopBarMobile