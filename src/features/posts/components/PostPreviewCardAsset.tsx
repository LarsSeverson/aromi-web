import type { AllPostAssetFragment } from '@/generated/graphql'
import clsx from 'clsx'
import React from 'react'
import PostAssetModal from './PostAssetModal'

export interface PostPreviewCardAssetProps {
  postAsset: AllPostAssetFragment
  index?: number
  totalAssetCount?: number
}

const PostPreviewCardAsset = (props: PostPreviewCardAssetProps) => {
  const { postAsset, index = 0, totalAssetCount = 1 } = props
  const { asset, post } = postAsset

  const [isModalOpen, setIsModalOpen] = React.useState(false)

  const handleOnAssetClick = (event: React.MouseEvent) => {
    event.stopPropagation()
    setIsModalOpen(true)
  }

  return (
    <>
      <button
        type='button'
        className={clsx(
          'h-full w-full cursor-pointer object-cover hover:brightness-95',
          totalAssetCount === 2 && 'row-span-2',
          (totalAssetCount === 3 && index === 0) && 'row-span-2',
          totalAssetCount === 1 && 'col-span-2 row-span-2'
        )}
        onClick={handleOnAssetClick}
      >
        <img
          src={asset.url ?? ''}
          alt={'Post Asset'}
          className='h-full w-full object-cover'
        />
      </button>

      <PostAssetModal
        postId={post.id}
        assetIndex={index}
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
      />
    </>
  )
}

export default PostPreviewCardAsset
