import GridImages from '@/components/GridImages'
import type { PostPreviewFragment } from '@/generated/graphql'
import React from 'react'

export interface PostPreviewCardAssetsProps {
  assets: PostPreviewFragment['assets']
}

const PostPreviewCardAssets = (props: PostPreviewCardAssetsProps) => {
  const { assets } = props

  const assetUrls = assets.map(asset => asset.asset.url).filter(url => url != null)

  return (
    <div
      className='flex h-full max-h-100 w-full overflow-hidden rounded-2xl'
    >
      <div
        className='flex h-full max-w-150 overflow-hidden rounded-2xl'
      >
        <GridImages
          showSeparator
          urls={assetUrls}
          className='group-hover:brightness-100!'
        />
      </div>
    </div>
  )
}

export default PostPreviewCardAssets
