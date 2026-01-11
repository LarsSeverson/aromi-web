import type { PostPreviewFragment } from '@/generated/graphql'
import clsx from 'clsx'
import React from 'react'
import PostPreviewCardAsset from './PostPreviewCardAsset'

export interface PostPreviewCardAssetsProps {
  postAssets: PostPreviewFragment['assets']
  isEnlarged?: boolean
}

const PostPreviewCardAssets = (props: PostPreviewCardAssetsProps) => {
  const { postAssets, isEnlarged = false } = props

  const totalAssetCount = postAssets.length

  const sortedAssets = React.useMemo(
    () => [...postAssets].sort((a, b) => a.displayOrder - b.displayOrder),
    [postAssets]
  )

  return (
    <div
      className={clsx(
        isEnlarged ? 'max-h-120' : 'max-h-100',
        'flex h-full w-full overflow-hidden rounded-2xl'
      )}
    >
      <div
        className={clsx(
          isEnlarged ? '' : 'max-w-150',
          'flex h-full w-full gap-0.5 overflow-hidden rounded-2xl',
          'bg-empty2 relative grid overflow-hidden rounded-2xl group-hover:brightness-[.85]',
          totalAssetCount === 1 && 'grid-cols-1 grid-rows-1',
          totalAssetCount !== 1 && 'grid-cols-2 grid-rows-2'
        )}
      >
        {sortedAssets.map((postAsset, index) => (
          <PostPreviewCardAsset
            key={postAsset.id}
            postAsset={postAsset}
            index={index}
            totalAssetCount={totalAssetCount}
          />
        ))}
      </div>
    </div>
  )
}

export default PostPreviewCardAssets
