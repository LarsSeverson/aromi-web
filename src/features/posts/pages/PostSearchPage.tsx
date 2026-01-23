import React from 'react'
import { useSearchPosts } from '../hooks/useSearchPosts'
import { useMeasurementsCache } from '@/hooks/useMeasurementsCache'
import type { PostPreviewFragment } from '@/generated/graphql'
import PostPageListItemCard from '../components/PostListItemCard'
import PostPreviewCardSkeleton from '../components/PostPreviewCardSkeleton'
import { FlatList } from '@/components/FlatList'
import EmptySearchSplash from '@/components/EmptySearchSplash'
import EndSearchSplash from '@/components/EndSearchSplash'

const SKELETON_COUNT = 4
const ESTIMATE_HEIGHT = 165
const OVERSCAN = 5
const END_SCROLL_THRESHOLD = 1000

export interface PostSearchPageProps {
  term: string
}

export const PostSearchPage = (props: PostSearchPageProps) => {
  const { term } = props

  const {
    posts,
    isLoading,
    isLoadingMore,
    hasMore,
    hasNoResults,
    loadMore
  } = useSearchPosts({ term })

  const { save, initialMeasurementsCache } = useMeasurementsCache('post-search')

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

  const handleOnEndReached = React.useCallback(() => {
    loadMore()
  }, [loadMore])

  return (
    <div
      className='flex w-full flex-col items-center p-4'
    >
      <div
        className='flex w-full max-w-4xl flex-col'
      >
        <FlatList
          items={posts}
          estimateSize={ESTIMATE_HEIGHT}
          isLoading={isLoading || isLoadingMore}
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

        {hasNoResults && (
          <EmptySearchSplash />
        )}

        {!hasMore && !hasNoResults && (
          <EndSearchSplash />
        )}
      </div>
    </div>
  )
}
