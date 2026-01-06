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
    <div>
      <GridImages
        urls={assetUrls}
      />
    </div>
  )
}

export default PostPreviewCardAssets
