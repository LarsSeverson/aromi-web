import MobileNavBar from '@/components/MobileNavBar'
import TopBarMobile from '@/components/TopBarMobile'
import { Outlet } from '@tanstack/react-router'
import React from 'react'

const MainLayoutMobile = () => {
  return (
    <div
      className='h-screen'
    >
      <TopBarMobile />

      <main
        className='h-full pb-16'
      >
        <Outlet />
      </main>

      <div
        className='fixed bottom-0 z-50 h-16 w-full shrink-0 bg-white'
      >
        <MobileNavBar />
      </div>
    </div>
  )
}

export default MainLayoutMobile
