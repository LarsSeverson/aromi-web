import React, { useRef, useState } from 'react'
import SideBar from '../components/SideBar'
import { Outlet } from 'react-router'
import TopBar from '@/components/TopBar'
import { ResizeContainer } from '@/components/common/ResizeContainer'
import MainLayoutProvider from '@/contexts/MainLayoutContext'

const MainLayout = () => {
  const [mainContentRect, setMainContextRect] = useState<DOMRect>(new DOMRect())
  const mainScrollRef = useRef<HTMLDivElement>(null)

  return (
    <div
      ref={mainScrollRef}
      className='
        flex
        flex-row
        overflow-auto
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
          min-h-screen
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
              mainScrollRef={mainScrollRef}
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
