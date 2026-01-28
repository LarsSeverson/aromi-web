import type { PostPreviewFragment, UserPreviewFragment } from '@/generated/graphql'
import { useMyContext } from '../context/MyContext'
import { useUserPosts } from '../hooks/useUserPosts'
import { FlatList } from '@/components/FlatList'
import React from 'react'
import EmptyTab from './EmptyTab'
import PostPreviewCardSkeleton from '@/features/posts/components/PostPreviewCardSkeleton'
import PostPreviewCard from '@/features/posts/components/PostPreviewCard'

const SKELETON_COUNT = 4
const ESTIMATE_HEIGHT = 165
const OVERSCAN = 5
const END_SCROLL_THRESHOLD = 1000

const emptPostsText = (areMyReviews: boolean, username: string) => {
  return {
    headline: areMyReviews ? 'You haven\'t made any posts yet' : `${username} hasn't made any posts yet`,
    body: areMyReviews
      ? 'Create posts about fragrances you love, and they\'ll show up here'
      : 'Check back later to see what posts they share'
  }
}

export interface UserPostsTabProps {
  user: UserPreviewFragment
}

export const UserPostsTab = (props: UserPostsTabProps) => {
  const { user } = props
  const { id, username } = user

  const { me } = useMyContext()

  const { posts, isLoading, isLoadingMore, loadMore } = useUserPosts(id)

  const isEmpty = posts.length === 0 && !isLoading
  const areMyPosts = me?.id === id

  const { headline, body } = emptPostsText(areMyPosts, username)

  const onRenderPost = React.useCallback(
    (post: PostPreviewFragment) => (
      <PostPreviewCard
        key={post.id}
        post={post}
      />
    ),
    []
  )

  const onRenderPostSkeleton = React.useCallback(
    () => (
      <PostPreviewCardSkeleton />
    ),
    []
  )

  const handleOnEndReached = React.useCallback(
    () => {
      loadMore()
    },
    [loadMore]
  )

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
      className="flex w-full flex-col items-center pb-4"
    >
      <div
        className="w-full max-w-4xl"
      >
        <FlatList
          items={posts}
          useWindow
          estimateSize={ESTIMATE_HEIGHT}
          isLoading={isLoading || isLoadingMore}
          skeletonCount={SKELETON_COUNT}
          overscan={OVERSCAN}
          gap={15}
          onEndReachedThreshold={END_SCROLL_THRESHOLD}
          onEndReached={handleOnEndReached}
          onRenderItem={onRenderPost}
          onRenderSkeleton={onRenderPostSkeleton}
        />
      </div>
    </div>
  )
}