import React, { useRef, useState } from 'react'
import SideBar from '../components/SideBar'
import Divider from '@/components/Divider'
import { Outlet } from 'react-router'
import TopBar from '@/components/TopBar'
import { ResizeContainer } from '@/components/common/ResizeContainer'
import MainLayoutProvider from '@/contexts/MainLayoutContext'

const MainLayout = () => {
  const [mainContentRect, setMainContextRect] = useState<DOMRect>(new DOMRect())
  const mainContentRef = useRef<HTMLDivElement>(null)

  return (
    <div
      className='
        flex
        flex-row
        w-screen
        h-screen
      '
    >
      <SideBar />
      <Divider />
      <div
        className='
          flex
          flex-col
          flex-1
        '
      >
        <TopBar />
        <div
          ref={mainContentRef}
          className='overflow-auto p-5'
          style={{ scrollbarGutter: 'stable' }}
        >
          <ResizeContainer
            onResize={setMainContextRect}
          >

            <MainLayoutProvider
              mainContentRect={mainContentRect}
              mainContentRef={mainContentRef}
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
