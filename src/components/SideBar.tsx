import React from 'react'
import BouncyButton from './BouncyButton'
import { CommunityIcon, HomeIcon, Logo, ProfileIcon, SearchIcon } from './common/Icons'
import { useLocation, useNavigate } from 'react-router'
import SideBarButton from './SideBarButton'

const SideBar = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const handleSideBarButtonPress = (route: string) => {
    void navigate(route)
  }

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
          onClick={() => { handleSideBarButtonPress('/home') }}
        >
          <Logo />
        </BouncyButton>
        <SideBarButton
          active={active('home') || active('/')}
          Icon={<HomeIcon />}
          onClick={() => { handleSideBarButtonPress('/home') }}
        />
        <SideBarButton
          active={active('search')}
          Icon={<SearchIcon />}
          onClick={() => { handleSideBarButtonPress('/search') }}
        />
        <SideBarButton
          active={active('community')}
          Icon={<CommunityIcon />}
          onClick={() => { handleSideBarButtonPress('/community') }}
        />
        <SideBarButton
          active={active('profile')}
          Icon={<ProfileIcon />}
          onClick={() => { handleSideBarButtonPress('/profile') }}
        />
      </div>
    </nav>
  )
}

export default SideBar
