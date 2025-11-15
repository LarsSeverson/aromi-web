import React from 'react'
import ChangePasswordDialog from '../components/ChangePasswordDialog'

const AccountManagementPage = () => {
  return (
    <div
      className='flex flex-col items-start justify-center gap-5'
    >
      <div
        className='flex w-full max-w-lg flex-col gap-10'
      >
        <div
          className='flex flex-col gap-5'
        >
          <span
            className='text-lg font-semibold'
          >
            Your account
          </span>

          <div
            className='flex gap-5'
          >
            <div
              className='flex flex-2 flex-col gap-2'
            >
              <span
                className='text-md font-semibold'
              >
                Password
              </span>

              <span
                className='text-md text-black/80'
              >
                Update your password regularly to keep your account secure
              </span>
            </div>

            <div
              className='flex flex-1 items-center justify-center'
            >
              <ChangePasswordDialog />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccountManagementPage
