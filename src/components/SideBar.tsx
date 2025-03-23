import React from 'react'
import BouncyButton from './BouncyButton'
import { CommunityIcon, HomeIcon, Logo, ProfileIcon, SearchIcon } from './common/Icons'
import SideBarButton from './SideBarButton'
import { useLocation } from '@tanstack/react-router'

const SideBar = () => {
  const location = useLocation()

  const active = (route: string): boolean => {
    if (route === '/' && location.pathname === '/') return true
    return location.pathname === `/${route}`
  }

  return (
    <nav
      className='box-border fixed h-screen w-[72px] bg-white z-50 flex flex-row border-r-[1px]'
    >
      <div
        className='flex flex-col p-3 gap-7 relative'
      >
        <BouncyButton
          className='aspect-square'
        >
          <Logo />
        </BouncyButton>
        <SideBarButton
          active={active('home') || active('/')}
          Icon={<HomeIcon />}
        />
        <SideBarButton
          active={active('search')}
          Icon={<SearchIcon />}
        />
        <SideBarButton
          active={active('community')}
          Icon={<CommunityIcon />}
        />
        <SideBarButton
          active={active('profile')}
          Icon={<ProfileIcon />}
        />
      </div>
    </nav>
  )
}

export default SideBar
