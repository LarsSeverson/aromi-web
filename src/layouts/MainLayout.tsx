import React, { useState } from 'react'
import SideBar from '../components/SideBar'
import TopBar from '@/components/TopBar'
import { ResizeContainer } from '@/components/common/ResizeContainer'
import MainLayoutProvider from '@/contexts/MainLayoutContext'
import { Outlet } from '@tanstack/react-router'

const MainLayout = () => {
  const [mainContentRect, setMainContextRect] = useState(new DOMRect())

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

        <div
          className='p-5 h-full'
        >
          <ResizeContainer
            onResize={setMainContextRect}
            className='h-full'
          >
            <MainLayoutProvider
              mainContentRect={mainContentRect}
            >
              <Outlet />
            </MainLayoutProvider>
          </ResizeContainer>
        </div>
      </div>
    </div>
  )
}

export default MainLayout
