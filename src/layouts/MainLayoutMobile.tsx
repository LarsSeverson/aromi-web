import MobileNavBar from '@/components/MobileNavBar'
import TopBar from '@/components/TopBar'
import { Outlet } from '@tanstack/react-router'
import React from 'react'

const MainLayoutMobile = () => {
  return (
    <div
      className='flex min-h-screen flex-col'
    >
      <TopBar />

      <main
        className='flex-1 pb-20'
      >
        <Outlet />
      </main>

      <div
        className='fixed bottom-0 left-0 z-50 h-16 w-full bg-white'
      >
        <MobileNavBar />
      </div>
    </div>
  )
}

export default MainLayoutMobile
