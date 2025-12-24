import React from 'react'
import { Link, Outlet, useLocation } from '@tanstack/react-router'
import clsx from 'clsx'
import type { UserPreviewFragment } from '@/generated/graphql'
import Divider from '@/components/Divider'
import ActiveTabUnderline from '../components/ActiveTabUnderline'
import UserAvatar from '../components/UserAvatar'
import { useMyContext } from '../context/MyContext'
import ShareUserPopover from '../components/ShareUserPopover'
import UserRelationshipButton from '../components/UserRelationshipButton'
import { useToastMessage } from '@/hooks/useToastMessage'
import { useFollowUser } from '../hooks/useFollowUser'
import { useUnfollowUser } from '../hooks/useUnfollowUser'
import { useDebounce } from '@/hooks/useDebounce'
import UserRelationshipPopover from '../components/UserRelationshipPopover'

export interface UserPageProps {
  user: UserPreviewFragment
}

export const UserPage = (props: UserPageProps) => {
  const { user } = props
  const { id, username, relationship } = user

  const pathname = useLocation({
    select: (location) => location.pathname
  })

  const { me } = useMyContext()
  const { toastError } = useToastMessage()
  const { follow } = useFollowUser()
  const { unfollow } = useUnfollowUser()

  const handleOnRelationshipChange = useDebounce(
    async (newValue: boolean) => {
      const fn = newValue ? follow : unfollow
      const res = await fn({
        userId: id
      })

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
      className={clsx(
        'flex min-w-fit flex-col items-center justify-center'
      )}
    >
      <div
        className={clsx(
          'flex w-full max-w-2xl self-center px-3',
          'lg:px-0'
        )}
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
        className={clsx(
          'flex w-full max-w-3xl flex-col items-center justify-center gap-5'
        )}
      >
        <div
          className='flex aspect-square w-28 flex-col'
        >
          <UserAvatar
            user={user}
          />
        </div>

        <div
          className=''
        >
          <h2
            className='text-3xl'
          >
            {username}
          </h2>
        </div>

        <div
          className="grid w-full grid-cols-[1fr_auto_1fr] items-center gap-2"
        >
          <div
            className="flex justify-end"
          >
            <UserRelationshipPopover
              user={user}
              type="followers"
            />
          </div>

          <span className="text-black/30"> • </span>

          <div
            className="text-left"
          >
            <UserRelationshipPopover
              user={user}
              type="following"
            />
          </div>
        </div>

        <div
          className='flex flex-row gap-3'
        >
          {isMyProfile && (
            <Link
              to='/settings/profile'
              className={clsx(
                'bg-empty text-md cursor-pointer rounded-lg px-4 py-2 font-medium',
                'hover:bg-gray-200'
              )}
            >
              Edit profile
            </Link>
          )}

          {!isMyProfile && (
            <UserRelationshipButton
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
          className={clsx(
            'mt-4 flex w-full max-w-2xl flex-col items-center justify-center self-center'
          )}
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
            className={clsx(
              'sticky top-16 z-20 flex w-full items-center justify-center bg-white pb-1'
            )}
          >
            <div
              className='flex w-full max-w-md min-w-fit'
            >
              <Link
                from='/users/$id'
                to='/users/$id'
                className={clsx(
                  'relative flex flex-1 flex-col py-2.5 text-center font-medium focus:outline-none',
                  'hover:bg-empty'
                )}
              >
                Collections
                {activeTab === '/' && <ActiveTabUnderline />}
              </Link>

              <Link
                from='/users/$id'
                to='likes'
                className={clsx(
                  'relative flex flex-1 flex-col py-2.5 text-center font-medium focus:outline-none',
                  'hover:bg-empty'
                )}
              >
                Likes
                {activeTab === 'likes' && <ActiveTabUnderline />}
              </Link>

              <Link
                from='/users/$id'
                to='reviews'
                className={clsx(
                  'relative flex flex-1 flex-col py-2.5 text-center font-medium focus:outline-none',
                  'hover:bg-empty'
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