import React from 'react'

export interface UserAttributeProps {
  label: string
  value: string
}

const UserAttribute = (props: UserAttributeProps) => {
  const { label, value } = props

  return (
    <div
      className='flex flex-col'
    >
      <span
        className='font-semibold'
      >
        {label}
      </span>

      <span
        className='text-md opacity-90'
      >
        {value}
      </span>
    </div>
  )
}

export default UserAttribute
