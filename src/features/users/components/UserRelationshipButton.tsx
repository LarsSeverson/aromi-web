import AuthButton from '@/features/auth/components/AuthButton'
import { RelationshipStatus } from '@/generated/graphql'
import clsx from 'clsx'
import React from 'react'
import { RELATIONSHIP_STATUS_IS_FOLLOWING } from '../utils/constants'

export interface UserRelationshipButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isMe?: boolean
  relationship?: RelationshipStatus
  onIsFollowingChange?: (newValue: boolean) => void
}

const UserRelationshipButton = (props: UserRelationshipButtonProps) => {
  const {
    isMe = false,
    relationship = RelationshipStatus.None,
    onIsFollowingChange,
    className, onClick, ...restButtonProps
  } = props

  const [isFollowing, setIsFollowing] = React.useState(RELATIONSHIP_STATUS_IS_FOLLOWING.includes(relationship))

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
    <AuthButton
      disabled={isMe}
      className={clsx(
        className,
        isMe ? 'cursor-default' : 'cursor-pointer',
        isFollowing || isMe ? 'bg-black/15 text-black' : 'bg-sinopia text-white',
        'rounded-xl px-4 py-2 font-medium',
        'hover:brightness-105'
      )}
      onClick={handleOnClick}
      {...restButtonProps}
    >
      {isMe ? 'You': isFollowing ? 'Unfollow' : 'Follow'}
    </AuthButton>
  )
}

export default UserRelationshipButton
