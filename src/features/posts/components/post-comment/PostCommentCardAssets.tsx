import type { PostCommentPreviewFragment } from '@/generated/graphql'
import clsx from 'clsx'
import React from 'react'
import { PostCommentCardAsset } from './PostCommentCardAsset'

export interface PostCommentCardAssetsProps {
  commentAssets: PostCommentPreviewFragment['assets']
}

export const PostCommentCardAssets = (props: PostCommentCardAssetsProps) => {
  const { commentAssets } = props

  const totalAssetCount = commentAssets?.length ?? 0

  const sortedAssets = React.useMemo(
    () => [...(commentAssets ?? [])].sort((a, b) => a.displayOrder - b.displayOrder),
    [commentAssets]
  )

  if (totalAssetCount === 0) {
    return null
  }

  return (
    <div
      className={clsx(
        'max-h-60 max-w-40',
        'flex h-full w-full overflow-hidden rounded-2xl'
      )}
    >
      <div
        className={clsx(
          'flex h-full w-full gap-0.5 overflow-hidden rounded-2xl',
          'bg-empty2 relative grid overflow-hidden rounded-2xl group-hover:brightness-[.85]',
          totalAssetCount === 1 && 'grid-cols-1 grid-rows-1',
          totalAssetCount !== 1 && 'grid-cols-2 grid-rows-2'
        )}
      >
        {sortedAssets.map((postAsset, index) => (
          <PostCommentCardAsset
            key={postAsset.id}
            commentAssets={sortedAssets}
            index={index}
            totalAssetCount={totalAssetCount}
          />
        ))}
      </div>
    </div>
  )
}
