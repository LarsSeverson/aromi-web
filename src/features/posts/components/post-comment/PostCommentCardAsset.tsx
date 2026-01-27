import AssetModal from '@/features/assets/components/AssetModal'
import type { AllPostCommentAssetFragment } from '@/generated/graphql'
import clsx from 'clsx'
import React from 'react'

export interface PostCommentCardAssetProps {
  commentAssets: AllPostCommentAssetFragment[]
  index?: number
  totalAssetCount?: number
}

export const PostCommentCardAsset = (props: PostCommentCardAssetProps) => {
  const {
    commentAssets,
    index = 0,
    totalAssetCount = 1
  } = props

  const assets = commentAssets.map(ca => ca.asset)
  const asset = assets.at(index)

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
          src={asset?.url ?? ''}
          className='h-full w-full object-cover'
        />
      </button>

      <AssetModal
        assets={assets}
        assetIndex={index}
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
      />
    </>
  )
}
