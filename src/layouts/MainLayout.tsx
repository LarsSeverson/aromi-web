import React from 'react'
import { Outlet } from '@tanstack/react-router'
import SideBar from '@/components/SideBar'
import TopBar from '@/components/TopBar'

const MainLayout = () => {
  return (
    <div
      className='min-h-screen'
    >
      <aside
        className='fixed top-0 w-[72px] h-screen shrink-0'
      >
        <SideBar />
      </aside>

      <div
        className='pl-[72px]'
      >
        <TopBar />

        <main>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default MainLayout
