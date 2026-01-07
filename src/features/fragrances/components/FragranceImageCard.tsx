import React from 'react'
import type { FragrancePreviewFragment } from '@/generated/graphql'
import clsx from 'clsx'
import ProgressiveImage from '@/components/ProgressiveImage'
import blankPreviewThumbnail from '@/assets/blank-fragrance-thumbnail.svg'

export interface FragranceImageCardProps {
  isActive: boolean
  fragrance: FragrancePreviewFragment
  className?: string
}

const FragranceImageCard = (props: FragranceImageCardProps) => {
  const { isActive, fragrance, className } = props
  const { thumbnail } = fragrance
  const { url, primaryColor } = thumbnail ?? {}

  return (

    <div
      className={clsx(
        className,
        'flex-1 overflow-hidden rounded-2xl',
        'group-hover:brightness-[0.85] group-focus:brightness-[0.85]',
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
