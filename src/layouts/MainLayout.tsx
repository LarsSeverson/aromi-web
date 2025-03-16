import React from 'react'
import SideBar from '../components/SideBar'
import Divider from '@/components/Divider'
import { Outlet } from 'react-router'
import TopBar from '@/components/TopBar'

const MainLayout = () => {
  return (
    <div className='
      flex
      flex-row
      w-screen
      h-screen
    '
    >
      <SideBar />
      <Divider />
      <div className='flex flex-col flex-1'>
        <TopBar />
        <Outlet />
      </div>
    </div>
  )
}

export default MainLayout
