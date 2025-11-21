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
import UserFollowButton from '../components/UserFollowButton'
import { useToastMessage } from '@/hooks/useToastMessage'
import { useFollowUser } from '../hooks/useFollowUser'
import { useUnfollowUser } from '../hooks/useUnfollowUser'
import { useDebounce } from '@/hooks/useDebounce'

export interface UserPageProps {
  user: UserPreviewFragment
}

export const UserPage = (props: UserPageProps) => {
  const { user } = props
  const { id, username, followingCount, followerCount, relationship } = user

  const pathname = useLocation({ select: (location) => location.pathname })

  const { me } = useMyContext()

  const { toastError } = useToastMessage()

  const { follow } = useFollowUser()
  const { unfollow } = useUnfollowUser()

  const handleOnRelationshipChange = useDebounce(
    async (newValue: boolean) => {
      const fn = newValue ? follow : unfollow

      const res = await fn({ userId: id })

      if (res.isErr()) {
        toastError('')
      }
    },
    300,
    [id]
  )

  const handleOnIsFollowingChange = (newValue: boolean) => {
    handleOnRelationshipChange(newValue)
  }

  const activeTab = (/\/(likes|reviews)$/.exec(pathname))?.[1] ?? '/'
  const isMyProfile = me?.id === id

  return (
    <div
      className='flex min-w-fit flex-col items-center justify-center'
    >

      <div
        className='flex w-full max-w-2xl self-center'
      >
        <div
          className='mb-1 ml-auto'
        >
          <ShareUserPopover
            user={user}
          />
        </div>
      </div>

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
          {isMyProfile && (
            <Link
              to='/settings/profile'
              className='bg-empty text-md cursor-pointer rounded-lg px-4 py-2 font-medium hover:bg-gray-200'
            >
              Edit profile
            </Link>
          )}

          {!isMyProfile && (
            <UserFollowButton
              relationship={relationship}
              onIsFollowingChange={handleOnIsFollowingChange}
            />
          )}
        </div>
      </div>

      <div
        className='flex w-full flex-col'
      >
        <div
          className='mt-4 flex w-full max-w-2xl flex-col items-center justify-center self-center'
        >
          <Divider
            horizontal
            className='w-full'
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
