import React from 'react'
import { Link, Outlet } from '@tanstack/react-router'
import emptyAvatar from '@/assets/avatar-empty.svg'
import Divider from '@/components/Divider'
import clsx from 'clsx'
import { formatNumber } from '@/common/string-utils'
import { type User } from '@/generated/graphql'

export type ProfileUser = Pick<User, 'id' | 'username' | 'followers' | 'following'>
export interface ProfilePageProps {
  user: ProfileUser
  myProfile: boolean
}

export const ProfilePage = (props: ProfilePageProps) => {
  const { user } = props
  const { username, followers, following } = user

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
            {username}
          </h2>
        </div>
        <div className='flex flex-row gap-2'>
          <div className='flex flex-row gap-1'>
            <p className='font-bold'>
              {formatNumber(followers)}
            </p>
            <p className='font-medium text-gray-700'>
              {followers === 1 ? 'follower' : 'followers'}
            </p>
          </div>
          <span> • </span>
          <div className='flex flex-row gap-1'>
            <p className='font-bold'>
              {formatNumber(following)}
            </p>
            <p className='font-medium text-gray-700'>
              following
            </p>
          </div>
        </div>
      </div>
      <div
        className='w-full'
      >
        <div className='flex items-center justify-center mt-5'>
          <Divider
            horizontal
            className='max-w-2xl'
          />
        </div>
        <div
          className='w-full'
        >
          <nav
            className='flex w-full items-center justify-center sticky top-16 z-20 bg-white'
          >
            <div className='flex min-w-fit max-w-md w-full'>
              <Link
                from='/user/$id'
                to='/user/$id'
                className={clsx('flex-1 py-2.5 font-medium hover:bg-empty relative flex flex-col focus:outline-none text-center')}
              >
                Collections
              </Link>
              <Link
                from='/user/$id'
                to='likes'
                className={clsx('flex-1 py-2.5 font-medium hover:bg-empty relative flex flex-col focus:outline-none text-center')}
              >
                Likes
              </Link>
              <Link
                from='/user/$id'
                to='reviews'
                className={clsx('flex-1 py-2.5 font-medium hover:bg-empty relative flex flex-col focus:outline-none text-center')}
              >
                Reviews
              </Link>
            </div>
          </nav>
          <div className='mt-5' />
          <Outlet />
        </div>
      </div>
    </div>
  )
}
