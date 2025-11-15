import React from 'react'
import { Link, Outlet, useLocation } from '@tanstack/react-router'
import clsx from 'clsx'
import { formatNumber } from '@/utils/string-utils'
import type { UserPreviewFragment } from '@/generated/graphql'
import Divider from '@/components/Divider'
import ActiveTabUnderline from '../components/ActiveTabUnderline'
import UserAvatar from '../components/UserAvatar'
import { useMyContext } from '../context/MyContext'
import ShareUserPopover from '../components/ShareUserPopover'

export interface UserPageProps {
  user: UserPreviewFragment
}

export const UserPage = (props: UserPageProps) => {
  const { user } = props
  const { id, username, followingCount, followerCount } = user

  const pathname = useLocation({ select: (location) => location.pathname })

  const { me } = useMyContext()

  const activeTab = (/\/(likes|reviews)$/.exec(pathname))?.[1] ?? '/'
  const isMyProfile = me?.id === id

  return (
    <div
      className='flex min-w-fit flex-col items-center justify-center'
    >
      <div
        className='flex w-full max-w-3xl flex-col items-center justify-center gap-5'
      >
        <div
          className='flex aspect-square w-28 flex-col'
        >
          <UserAvatar
            user={user}
          />
        </div>

        <div>
          <h2
            className='text-3xl'
          >
            {username}
          </h2>
        </div>

        <div
          className='flex flex-row gap-2'
        >
          <div
            className='flex flex-row gap-1'
          >
            <p
              className='font-bold'
            >
              {formatNumber(followerCount)}
            </p>

            <p
              className='font-medium text-gray-700'
            >
              {followerCount === 1 ? 'follower' : 'followers'}
            </p>
          </div>

          <span> • </span>

          <div
            className='flex flex-row gap-1'
          >
            <p
              className='font-bold'
            >
              {formatNumber(followingCount)}
            </p>

            <p
              className='font-medium text-gray-700'
            >
              following
            </p>
          </div>
        </div>

        <div
          className='flex flex-row gap-3'
        >
          <ShareUserPopover
            user={user}
          />

          {isMyProfile && (
            <Link
              to='/settings/profile'
              className='bg-empty text-md cursor-pointer rounded-lg px-4 py-2 font-medium hover:bg-gray-200'
            >
              Edit profile
            </Link>
          )}
        </div>
      </div>

      <div
        className='w-full'
      >
        <div
          className='mt-5 flex items-center justify-center'
        >
          <Divider
            horizontal
            className='max-w-2xl'
          />
        </div>

        <div
          className='w-full'
        >
          <nav
            className='sticky top-16 z-20 flex w-full items-center justify-center bg-white pb-1'
          >
            <div
              className='flex w-full max-w-md min-w-fit'
            >
              <Link
                from='/users/$id'
                to='/users/$id'
                className={clsx(
                  'hover:bg-empty relative flex flex-1 flex-col py-2.5 text-center font-medium focus:outline-none'
                )}
              >
                Collections
                {activeTab === '/' && <ActiveTabUnderline />}
              </Link>

              <Link
                from='/users/$id'
                to='likes'
                className={clsx(
                  'hover:bg-empty relative flex flex-1 flex-col py-2.5 text-center font-medium focus:outline-none'
                )}
              >
                Likes
                {activeTab === 'likes' && <ActiveTabUnderline />}
              </Link>

              <Link
                from='/users/$id'
                to='reviews'
                className={clsx(
                  'hover:bg-empty relative flex flex-1 flex-col py-2.5 text-center font-medium focus:outline-none'
                )}
              >
                Reviews
                {activeTab === 'reviews' && <ActiveTabUnderline />}
              </Link>
            </div>
          </nav>

          <div
            className='mt-5'
          />

          <Outlet />
        </div>
      </div>
    </div>
  )
}
