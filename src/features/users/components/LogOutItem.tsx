import React, { useState } from 'react'
import MenuItem from '@/components/MenuItem'
import { useAuthContext } from '@/features/auth'
import { useToastMessage } from '@/hooks/useToastMessage'
import { HiOutlineLogout } from 'react-icons/hi'
import Spinner from '@/components/Spinner'

const LogOutItem = () => {
  const { logOut } = useAuthContext()
  const { toastApolloError } = useToastMessage()

  const [isLoading, setIsLoading] = useState(false)

  const handleLogOut = async () => {
    if (isLoading) return

    setIsLoading(true)

    await logOut()
      .match(
        () => {
          window.location.reload()
        },
        toastApolloError
      )

    setIsLoading(false)
  }

  const handleOnItemClick = (e: React.SyntheticEvent) => {
    e.preventDefault()
    void handleLogOut()
  }

  return (
    <MenuItem
      closeOnClick={false}
      disabled={isLoading}
      onClick={handleOnItemClick}
    >
      <HiOutlineLogout
        size={18}
        className='mr-1'
      />

      <span
        className='leading-none'
      >
        Log out
      </span>

      {isLoading && (
        <div
          className='ml-auto'
        >
          <Spinner
            size={3}
          />
        </div>
      )}
    </MenuItem>
  )
}

export default LogOutItem
