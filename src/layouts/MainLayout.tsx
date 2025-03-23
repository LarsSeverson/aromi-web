import React, { useState } from 'react'
import SideBar from '../components/SideBar'
import TopBar from '@/components/TopBar'
import { ResizeContainer } from '@/components/common/ResizeContainer'
import MainLayoutProvider from '@/contexts/MainLayoutContext'
import { createRoute, Outlet } from '@tanstack/react-router'
import { rootRoute } from '@/routes/__root'
import { homeRoute } from '@/pages/Home'
import { fragranceRoute } from '@/pages/Fragrance'

export const mainLayoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: () => <MainLayout />
})

const MainLayout = () => {
  const [mainContentRect, setMainContextRect] = useState(new DOMRect())

  return (
    <div
      className='
        flex
        flex-row
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

mainLayoutRoute.addChildren([homeRoute, fragranceRoute])
