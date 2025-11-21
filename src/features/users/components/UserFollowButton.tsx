import { RelationshipStatus } from '@/generated/graphql'
import clsx from 'clsx'
import React from 'react'

export interface UserFollowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  relationship?: RelationshipStatus
  onIsFollowingChange?: (newValue: boolean) => void
}

const UserFollowButton = (props: UserFollowButtonProps) => {
  const {
    relationship = RelationshipStatus.None,
    onIsFollowingChange,
    className, onClick, ...restButtonProps
  } = props

  const [isFollowing, setIsFollowing] = React.useState(relationship === RelationshipStatus.Following)

  const handleOnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()

    setIsFollowing(prev => {
      const newValue = !prev
      onIsFollowingChange?.(newValue)
      return newValue
    })

    onClick?.(event)
  }

  return (
    <button
      className={clsx(
        className,
        isFollowing ? 'bg-black/15 text-black' : 'bg-sinopia text-white',
        'cursor-pointer rounded-xl px-4 py-2 font-medium',
        'hover:brightness-105'
      )}
      onClick={handleOnClick}
      {...restButtonProps}
    >
      {isFollowing ? 'Unfollow' : 'Follow'}
    </button>
  )
}

export default UserFollowButton
