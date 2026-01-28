'use no memo'

import React from 'react'
import SettingsPopover from './SettingsPopover'
import clsx from 'clsx'
import { useRouteState } from '@/hooks/useRouteState'
import { MinimalSearchPopover } from './MinimalSearchPopover'
import TopBarSearchFilter from './TopBarSearchFilter'

const TopBarMobile = () => {
  const { isOnMyProfile, isSearch, isSearchHome } = useRouteState()

  const [, setIsScrolled] = React.useState(false)

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

  if (isOnMyProfile) {
    return (
      <div
        className={clsx(
          'flex w-full flex-row gap-3 px-3.5 py-3',
          'sticky top-0 z-40 self-start bg-white',
          'items-center justify-end'
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

  if (isSearch && !isSearchHome) {
    return (
      <div
        className={clsx(
          'sticky top-0 z-40 flex flex-row bg-white py-3',
          'mx-4'
        )}
      >
        <MinimalSearchPopover />

        <TopBarSearchFilter />
      </div>
    )
  }

  return null
}

export default TopBarMobile