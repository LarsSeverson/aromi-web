import type { FragrancePreviewFragment, User } from '@/generated/graphql'
import React, { useCallback } from 'react'
import { useUserLikes } from '../hooks/useUserLikes'
import { ResizeContainer } from '@/components/ResizeContainer'
import { useMyContext } from '../context/MyContext'
import { FragrancePreviewCard } from '@/features/fragrances/components/FragrancePreviewCard'
import FragrancePreviewCardSkeleton from '@/features/fragrances/components/FragrancePreviewCardSkeleton'
import { DynamicList } from '@/components/DynamicList'
import EmptyTab from './EmptyTab'

export type UserLikesUser = Pick<User, 'id' | 'username'>

const emptyLikesText = (areMyLikes: boolean, username: string) => ({
  headline: areMyLikes ? 'You haven\'t liked any fragrances yet' : `${username} hasn't liked any fragrances yet`,
  body: areMyLikes
    ? 'Start liking fragrances you enjoy, and they\'ll show up here'
    : 'Check back later to see what fragrances they like'
})

export interface UserLikesTabProps {
  user: UserLikesUser
}

export const UserLikesTab = (props: UserLikesTabProps) => {
  const { user } = props
  const { id, username } = user

  const { me } = useMyContext()
  const { likes, isLoading, isLoadingMore, loadMore } = useUserLikes(id)

  const [containerRect, setContainerRect] = React.useState(new DOMRect())

  const areMyLikes = me?.id === id
  const isEmpty = likes.length === 0 && !isLoading
  const { headline, body } = emptyLikesText(areMyLikes, username)

  const onRenderFragrance = useCallback(
    (fragrance: FragrancePreviewFragment) => {
      return (
        <FragrancePreviewCard
          fragrance={fragrance}
        />
      )
    },
    []
  )

  const onRenderSkeleton = useCallback(
    () => {
      return (
        <FragrancePreviewCardSkeleton />
      )
    },
    []
  )

  const handleOnEndReached = () => {
    loadMore()
  }

  if (isEmpty) {
    return (
      <EmptyTab
        headline={headline}
        body={body}
      />
    )
  }

  return (
    <div
      className='w-full p-4'
    >
      <ResizeContainer
        onResize={setContainerRect}
      >
        <DynamicList
          items={likes}
          isLoading={isLoading || isLoadingMore}
          containerWidth={containerRect?.width}
          gap={25}
          onRenderItem={onRenderFragrance}
          onRenderSkeleton={onRenderSkeleton}
          onEndReached={handleOnEndReached}
        />
      </ResizeContainer>
    </div>
  )
}
