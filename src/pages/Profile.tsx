import useUserInfo from '@/hooks/useUserInfo'
import { rootRoute } from '@/routes/__root'
import { createRoute } from '@tanstack/react-router'
import emptyAvatar from '@/assets/avatar-empty.svg'
import React, { useState } from 'react'
import Divider from '@/components/Divider'
import { Tab, TabGroup, TabList } from '@headlessui/react'
import clsx from 'clsx'
import { formatNumber } from '@/common/string-utils'

export const profileRoute = createRoute({
  path: '/user/$id',
  getParentRoute: () => rootRoute,
  component: () => <Profile />
})

export const Profile = () => {
  const { id } = profileRoute.useParams()
  const userId = Number(id)

  const { data: info } = useUserInfo(userId)

  const [selectedTab, setSelectedTab] = useState(0)

  if (info == null) return null

  return (
    <div
      className='flex flex-col justify-center items-center min-w-fit'
    >
      <div
        className='flex flex-col justify-center items-center gap-5 max-w-3xl w-full'
      >
        <div
          className='w-28 aspect-square flex flex-col'
        >
          <div
            className='flex-1 rounded-full outline outline-[6px] outline-empty'
          >
            <img
              src={emptyAvatar}
              className='object-cover w-full'
            />
          </div>

        </div>
        <div>
          <h2
            className='font-pd text-3xl'
          >
            {info.username}
          </h2>
        </div>
        <div className='flex flex-row gap-2'>
          <div className='flex flex-row gap-1'>
            <p className='font-bold'>
              {formatNumber(info.followers)}
            </p>
            <p className='font-medium text-gray-700'>
              {info.followers === 1 ? 'follower' : 'followers'}
            </p>
          </div>
          <span> • </span>
          <div className='flex flex-row gap-1'>
            <p className='font-bold'>
              {formatNumber(info.following)}
            </p>
            <p className='font-medium text-gray-700'>
              following
            </p>
          </div>
        </div>
        <div
          className='w-full'
        >
          <Divider
            horizontal
          />
          <TabGroup
            selectedIndex={selectedTab}
            onChange={setSelectedTab}
            className='flex justify-center'
          >
            <TabList
              className='flex min-w-fit max-w-sm w-full'
            >
              <Tab
                className={clsx(
                  'flex-1 py-2.5 font-medium hover:bg-empty relative flex flex-col focus:outline-none'
                )}
              >
                Collections
                {selectedTab === 0 && (
                  <div className='border-2 border-black rounded-full w-1/3 absolute bottom-[-6px] place-self-center' />
                )}
              </Tab>
              <Tab
                className={clsx(
                  'flex-1 py-2.5 font-medium hover:bg-empty relative flex flex-col focus:outline-none'
                )}
              >
                Likes
                {selectedTab === 1 && (
                  <div className='border-2 border-black rounded-full w-1/3 absolute bottom-[-6px] place-self-center' />
                )}
              </Tab>
              <Tab
                className={clsx(
                  'flex-1 py-2.5 font-medium hover:bg-empty relative flex flex-col focus:outline-none'
                )}
              >
                Reviews
                {selectedTab === 2 && (
                  <div className='min-w-fit border-2 border-black rounded-full w-1/3 absolute bottom-[-6px] place-self-center' />
                )}
              </Tab>
            </TabList>
          </TabGroup>
        </div>
      </div>
    </div>
  )
}
