import type { PostCommentPreviewFragment, PostPreviewFragment } from '@/generated/graphql'
import React from 'react'
import { PostCommentCard } from './PostCommentCard'
import { useMeasurementsCache } from '@/hooks/useMeasurementsCache'
import { useElementScrollRestoration } from '@tanstack/react-router'
import { PostCommentCardSkeleton } from './PostCommentCardSkeleton'
import { FlatList } from '@/components/FlatList'
import { usePostCommentsWithComments } from '../../hooks/usePostCommentsWithComments'

const ESTIMATE_HEIGHT = 120
const OVERSCAN = 5
const END_SCROLL_THRESHOLD = 1000
const SKELETON_COUNT = 4

export interface PostCommentsSectionProps {
  post: PostPreviewFragment
}

export const PostCommentsSection = (props: PostCommentsSectionProps) => {
  const { post } = props

  const {
    comments,
    isLoading,
    isLoadingMore,
    loadMore
  } = usePostCommentsWithComments(post.id)

  const { save, initialMeasurementsCache } = useMeasurementsCache(`post-comments-${post.id}`)

  const scrollEntry = useElementScrollRestoration({
    getElement: () => window
  })

  const containerRef = React.useRef<HTMLDivElement>(null)

  const [scrollMargin, setScrollMargin] = React.useState(0)

  const onRenderComment = React.useCallback(
    (comment: PostCommentPreviewFragment) => (
      <PostCommentCard
        key={comment.id}
        comment={comment}
      />
    ),
    []
  )

  const onRenderCommentSkeleton = React.useCallback(
    () => (
      <PostCommentCardSkeleton />
    ),
    []
  )

  const handleOnEndReached = React.useCallback(
    () => {
      loadMore()
    },
    [loadMore]
  )

  React.useLayoutEffect(
    () => {
      if (containerRef.current == null) return

      const rect = containerRef.current.getBoundingClientRect()
      const offset = rect.top + window.scrollY

      setScrollMargin(offset)
    },
    []
  )

  return (
    <div
      ref={containerRef}
      className='flex w-full flex-col gap-2 pt-4'
    >
      <FlatList
        items={comments}
        estimateSize={ESTIMATE_HEIGHT}
        isLoading={isLoading || isLoadingMore}
        scrollMargin={scrollMargin}
        initialScrollOffset={scrollEntry?.scrollY}
        initialMeasurementsCache={initialMeasurementsCache}
        skeletonCount={SKELETON_COUNT}
        overscan={OVERSCAN}
        onEndReachedThreshold={END_SCROLL_THRESHOLD}
        onEndReached={handleOnEndReached}
        onRenderItem={onRenderComment}
        onRenderSkeleton={onRenderCommentSkeleton}
        onSaveMeasurements={save}
      />
    </div>
  )
}
