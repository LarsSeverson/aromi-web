import React from 'react'
import { Outlet } from '@tanstack/react-router'
import SideBar from '@/components/SideBar'
import TopBar from '@/components/TopBar'

const MainLayout = () => {
  return (
    <div
      className='w-full min-h-screen flex flex-row'
    >
      <aside
        className='sticky top-0 max-w-[72px] h-screen shrink-0'
      >
        <SideBar />
      </aside>

      <div
        className='flex-1 h-full w-full'
      >
        <TopBar />

        <main
          className='flex-1'
        >
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default MainLayout
