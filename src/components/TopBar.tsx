'use no memo'

import React from 'react'
import clsx from 'clsx'
import LogInDialog from '../features/auth/components/LogInDialog'
import SignUpDialog from '../features/auth/components/SignUpDialog'
import { useAuthContext } from '@/features/auth'
import AccountMenu from '@/features/users/components/AccountMenu'
import TopBarSearch from './TopBarSearch'
import PostButton from '@/features/posts/components/PostButton'

export interface TopBarProps extends React.HTMLAttributes<HTMLDivElement> {}

const TopBar = (props: TopBarProps) => {
  const {
    className,
    ...rest
  } = props

  const {
    isAuthenticated,
    me
  } = useAuthContext()

  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop
      setIsScrolled(scrollTop > 0)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header
      className={clsx(
        'flex flex-row p-3',
        'sticky top-0 z-40 h-16 overflow-hidden bg-white',
        'flex items-center justify-center',
        isScrolled && 'shadow-[0_2px_4px_rgba(0,0,0,0.04)]',
        className
      )}
      {...rest}
    >
      <div
        className='h-full flex-1'
      />

      <div
        className='flex flex-2'
      >
        <TopBarSearch />
      </div>

      <div
        className='flex h-full flex-1 flex-row items-center justify-end gap-3'
      >
        <PostButton />

        {isAuthenticated && me != null
          ? (
            <div
              className='h-full'
            >
              <AccountMenu
                user={me}
              />
            </div>
          )
          : (
            <div
              className='flex flex-row gap-2'
            >
              <LogInDialog />

              <SignUpDialog />
            </div>
          )
        }
      </div>
    </header>
  )
}

export default TopBar