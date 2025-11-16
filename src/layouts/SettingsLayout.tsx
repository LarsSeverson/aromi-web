import Divider from '@/components/Divider'
import SettingsSideNav from '@/components/SettingsSideNav'
import { Outlet } from '@tanstack/react-router'
import React from 'react'

const SettingsLayout = () => {
  return (
    <div
      className='p-10'
    >
      <div
        className='flex gap-10'
      >
        <div
          className='flex flex-1 justify-end'
        >
          <SettingsSideNav />

          <Divider
            className='m-10'
          />
        </div>

        <div
          className='flex-1'
        >
          <Outlet />
        </div>

        <div
          className='flex-1'
        />
      </div>
    </div>
  )
}

export default SettingsLayout
