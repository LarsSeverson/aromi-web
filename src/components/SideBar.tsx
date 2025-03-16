import React from 'react'
import BouncyButton from './BouncyButton'
import AromiLogo from './common/AromiLogo'
import { CommunityIcon, HomeIcon, ProfileIcon, SearchIcon } from './common/CommunityIcon'
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
    <div className='flex flex-col p-3 gap-7'>
      <BouncyButton
        className='aspect-square'
        onClick={() => { handleSideBarButtonPress('/home') }}
      >
        <AromiLogo />
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
  )
}

export default SideBar
