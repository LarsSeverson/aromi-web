import { Link } from '@tanstack/react-router'
import clsx from 'clsx'
import React from 'react'
import HomeSvg from './HomeSvg'
import UserAvatar from '@/features/users/components/UserAvatar'
import { useMyContext } from '@/features/users'
import SearchSvg from './SearchSvg'
import { HiUserGroup } from 'react-icons/hi'

const MobileNavBar = () => {
  const { me } = useMyContext()

  return (
    <nav
      className={clsx(
        'relative z-10 flex h-full items-center p-3 px-7 shadow-[0_-2px_10px_rgba(0,0,0,0.05)]'
      )}
    >
      <div
        className='flex h-8 w-full items-center justify-between'
      >
        <Link
          to='/'
          className={clsx(
            'relative flex items-center justify-center backdrop-brightness-100 select-none hover:backdrop-brightness-90',
            'transition-transform active:scale-95',
            'aspect-square h-full rounded-xl'
          )}
        >
          <HomeSvg
            height={24}
          />
        </Link>

        <Link
          to='/search'
          className={clsx(
            'relative flex items-center justify-center p-3 backdrop-brightness-100 select-none hover:backdrop-brightness-90',
            'transition-transform active:scale-95',
            'aspect-square rounded-xl'
          )}
        >
          <SearchSvg
            width={22}
            height={22}
          />
        </Link>

        <Link
          to='/community/posts'
          className={clsx(
            'relative flex items-center justify-center p-3 backdrop-brightness-100 select-none hover:backdrop-brightness-90',
            'transition-transform active:scale-95',
            'aspect-square rounded-xl'
          )}
        >
          <HiUserGroup
            size={26}
          />
        </Link>

        <Link
          to='/users'
          className={clsx(
            'relative flex items-center justify-center backdrop-brightness-100 select-none hover:backdrop-brightness-90',
            'transition-transform active:scale-95',
            'aspect-square h-full rounded-xl'
          )}
        >
          <UserAvatar
            user={me}
          />
        </Link>
      </div>
    </nav>
  )
}

export default MobileNavBar
