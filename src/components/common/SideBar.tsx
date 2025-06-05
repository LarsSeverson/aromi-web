import React, { useState } from 'react'
import { CommunityIcon, HomeIcon, Logo, ProfileIcon, SearchIcon } from './Icons'
import SideBarButton from './SideBarButton'
import { Link, useLocation } from '@tanstack/react-router'
import clsx from 'clsx'
import { useMyContext } from '@/contexts/MyContext'
// import { useAuthContext } from '@/contexts/AuthContext'

const SideBar = () => {
  const location = useLocation()
  const myContext = useMyContext()
  // const { isAuthenticated } = useAuthContext()

  const getInitialActive = () => {
    if (location.pathname.startsWith('/search')) return 'search'
    if (location.pathname.startsWith('/user')) return 'profile'

    return 'home'
  }

  const [active, setActive] = useState(getInitialActive())

  return (
    <nav
      className='box-border fixed h-screen w-[72px] bg-white z-50 flex flex-row border-r-[1px]'
    >
      <div
        className='flex flex-col p-3 gap-7 relative'
      >
        <Link
          to='/'
          className={clsx(
            'transition-transform active:scale-95 backdrop-brightness-100 hover:backdrop-brightness-90 p-3 flex justify-center items-center select-none relative',
            'rounded-xl aspect-square'
          )}
          onClick={() => { setActive('home') }}
        >
          <Logo />
        </Link>
        <SideBarButton
          to='/'
          Icon={<HomeIcon />}
          active={active === 'home'}
          onClick={() => { setActive('home') }}
        />
        <SideBarButton
          to='/search'
          Icon={<SearchIcon />}
          active={active === 'search'}
          onClick={() => { setActive('search') }}
        />
        <SideBarButton
          to='/search'
          Icon={<CommunityIcon />}
          active={active === 'community'}
          onClick={() => { setActive('search') }}
        />
        <SideBarButton
          to={`/user/${myContext.me?.id}`}
          Icon={<ProfileIcon />}
          active={active === 'profile'}
          onClick={() => { setActive('profile') }}
        />
      </div>
    </nav>
  )
}

export default SideBar
