import React from 'react'
import { Outlet } from '@tanstack/react-router'
import SideBar from '@/components/SideBar'
import TopBar from '@/components/TopBar'
import { useRedirectHistory } from '@/hooks/useRedirectHistory'

const MainLayout = () => {
  useRedirectHistory()

  return (
    <div
      className='min-h-screen'
    >
      <aside
        className='fixed top-0 h-screen w-18 shrink-0'
      >
        <SideBar />
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
