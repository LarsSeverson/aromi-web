'use no memo'

import React from 'react'
import clsx from 'clsx'
import LogInDialog from '../features/auth/components/LogInDialog'
import SignUpDialog from '../features/auth/components/SignUpDialog'
import { useAuthContext } from '@/features/auth'
import AccountMenu from '@/features/users/components/AccountMenu'
import TopBarSearch from './TopBarSearch'
import { BrowserView, MobileView, isMobile } from 'react-device-detect'
import { Link, useChildMatches, useLocation } from '@tanstack/react-router'
import LogoSvg from './LogoSvg'
import SettingsPopover from './SettingsPopover'

export interface TopBarProps extends React.HTMLAttributes<HTMLDivElement> {}

const TopBar = (props: TopBarProps) => {
  const { className, ...rest } = props

  const { isAuthenticated, me } = useAuthContext()

  const matches = useChildMatches()
  const location = useLocation()

  const profileMatch = matches.find((m) => m.routeId === '/users/$id')
  const matchedUserId = profileMatch?.params?.id
  const isOnMyProfile = matchedUserId != null && matchedUserId === me?.id

  const isRoot = location.pathname === '/'
  const shouldShowMobile = isRoot || isOnMyProfile

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

  if (isMobile && !shouldShowMobile) {
    return null
  }

  return (
    <header
      className={clsx(
        'flex flex-row p-3',
        'sticky top-0 z-40 h-16 overflow-hidden bg-white',
        'flex items-center justify-center',
        isScrolled && 'shadow-[0_2px_4px_rgba(0,0,0,0.04)]'
      )}
      {...rest}
    >
      <div
        className='h-full flex-1'
      >
        <MobileView
          className='flex h-full'
        >
          {!isOnMyProfile && (
            <Link
              to='/'
              className='aspect-square h-full text-lg font-semibold'
            >
              <LogoSvg />
            </Link>
          )}
        </MobileView>
      </div>

      <BrowserView
        className='flex-2'
      >
        <TopBarSearch />
      </BrowserView>

      <div
        className='flex h-full flex-1 flex-row items-center justify-end'
      >
        {isAuthenticated && me != null
          ?
          (
            <>
              <BrowserView
                className='h-full'
              >
                <AccountMenu
                  user={me}
                />
              </BrowserView>

              {isOnMyProfile && (
                <MobileView>
                  <SettingsPopover />
                </MobileView>
              )}
            </>
          )
          :
          (
            <div
              className='flex flex-row gap-2'
            >
              <LogInDialog />

              <SignUpDialog />
            </div>
          )
        }
      </div>
    </header>
  )
}

export default TopBar