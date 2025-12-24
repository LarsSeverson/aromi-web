import Divider from '@/components/Divider'
import SettingsSideNav from '@/components/SettingsSideNav'
import { Outlet } from '@tanstack/react-router'
import React from 'react'
import clsx from 'clsx'

const SettingsLayout = () => {
  return (
    <div
      className={clsx(
        'p-4 md:p-10'
      )}
    >
      <div
        className={clsx(
          'flex flex-col md:flex-row md:gap-10'
        )}
      >
        <div
          className={clsx(
            'flex flex-col md:flex-1 md:flex-row md:justify-end'
          )}
        >
          <SettingsSideNav />

          <Divider
            className={clsx(
              'my-4 md:m-10'
            )}
          />
        </div>

        <div
          className='flex-1'
        >
          <Outlet />
        </div>

        <div
          className='hidden md:flex md:flex-1'
        />
      </div>
    </div>
  )
}

export default SettingsLayout