import React from 'react'
import type { FragrancePreviewFragment } from '@/generated/graphql'
import clsx from 'clsx'
import ProgressiveImage from '@/components/ProgressiveImage'
import blankPreviewThumbnail from '@/assets/blank-fragrance-thumbnail.svg'

export interface FragranceImageCardProps {
  isActive: boolean
  fragrance: FragrancePreviewFragment
}

const FragranceImageCard = (props: FragranceImageCardProps) => {
  const { isActive, fragrance } = props
  const { thumbnail } = fragrance
  const { url, primaryColor } = thumbnail ?? {}

  return (

    <div
      className={clsx(
        'flex-1 rounded-2xl overflow-hidden',
        'group-focus:brightness-[0.85] group-hover:brightness-[0.85]',
        isActive && 'brightness-[0.85]'
      )}
    >
      <ProgressiveImage
        src={url ?? blankPreviewThumbnail}
        alt={`Thumbnail image for ${fragrance.name} by ${fragrance.brand.name}`}
        placeholderColor={primaryColor}
        fallbackImage={blankPreviewThumbnail}
      />
    </div>
  )
}

export default FragranceImageCard
