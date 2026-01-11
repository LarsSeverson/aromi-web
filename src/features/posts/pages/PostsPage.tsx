import React from 'react'
import { usePosts } from '../hooks/usePosts'
import { useElementScrollRestoration } from '@tanstack/react-router'
import type { PostPreviewFragment } from '@/generated/graphql'
import { DocumentTitleBuilder } from '@/utils/DocumentTitleBuilder'
import { FlatList } from '@/components/FlatList'
import PostPageListItemCard from '../components/PostListItemCard'
import PostPreviewCardSkeleton from '../components/PostPreviewCardSkeleton'
import { useMeasurementsCache } from '@/hooks/useMeasurementsCache'

const SKELETON_COUNT = 4
const ESTIMATE_HEIGHT = 165
const OVERSCAN = 5
const END_SCROLL_THRESHOLD = 1000

const PostsPage = () => {
  const { posts, isLoading, isLoadingMore, loadMore } = usePosts()

  const { save, initialMeasurementsCache } = useMeasurementsCache('posts-page')

  const scrollEntry = useElementScrollRestoration({
    getElement: () => window
  })

  const onRenderPost = React.useCallback(
    (post: PostPreviewFragment) => (
      <PostPageListItemCard
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

  React.useEffect(
    () => {
      new DocumentTitleBuilder()
        .reset()
        .prepend('Community')
        .apply()
    },
    []
  )

  return (
    <div
      className='flex w-full flex-col items-center p-4'
    >
      <div
        className='w-full max-w-4xl'
      >
        <FlatList
          items={posts}
          estimateSize={ESTIMATE_HEIGHT}
          isLoading={isLoading || isLoadingMore}
          initialScrollOffset={scrollEntry?.scrollY}
          initialMeasurementsCache={initialMeasurementsCache}
          skeletonCount={SKELETON_COUNT}
          overscan={OVERSCAN}
          gap={15}
          onEndReachedThreshold={END_SCROLL_THRESHOLD}
          onEndReached={handleOnEndReached}
          onRenderItem={onRenderPost}
          onRenderSkeleton={onRenderPostSkeleton}
          onSaveMeasurements={save}
        />
      </div>
    </div>
  )
}

export default PostsPage
