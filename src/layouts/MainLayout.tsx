import React from 'react'
import { Outlet } from '@tanstack/react-router'
import MainNavBar from '@/components/MainNavBar'
import TopBar from '@/components/TopBar'
import { useRedirectHistory } from '@/hooks/useRedirectHistory'
import { isMobile } from 'react-device-detect'
import MainLayoutMobile from './MainLayoutMobile'

const MainLayout = () => {
  useRedirectHistory()

  if (isMobile) {
    return <MainLayoutMobile />
  }

  return (
    <div
      className='min-h-screen'
    >
      <aside
        className='fixed top-0 h-screen w-18 shrink-0'
      >
        <MainNavBar />
      </aside>

      <div
        className='pl-18'
      >
        <TopBar />

        <main
          className='py-10'
        >
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default MainLayout
