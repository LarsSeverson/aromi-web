import React from 'react'
import { Outlet } from '@tanstack/react-router'
import SideBar from '@/components/SideBar'
import TopBar from '@/components/TopBar'

const MainLayout = () => {
  return (
    <div
      className='
        flex
        flex-row
        h-screen
      '
    >
      <SideBar />

      <div
        className='
          flex-1
          flex
          flex-col
          pl-[72px]
          pt-[72px]
          relative
          h-full
          w-full
        '
      >
        <TopBar
          className='fixed top-0 right-0 left-[72px] z-50 bg-white'
        />

        <Outlet />
      </div>
    </div>
  )
}

export default MainLayout
