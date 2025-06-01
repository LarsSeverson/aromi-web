import React from 'react'
import { type FragranceImage } from '@/generated/graphql'
import clsx from 'clsx'
import ProgressiveImage from '../common/ProgressiveImage'
import fallbackImage from '@/assets/fall-back-fi.svg'

export type FragranceImageCardImage = Omit<FragranceImage, 'audit'>

export interface FragranceImageCardProps {
  active: boolean
  image?: FragranceImageCardImage
}

const FragranceImageCard = (props: FragranceImageCardProps) => {
  const { active, image } = props

  return (

    <div
      className={clsx(
        'flex-1 rounded-2xl overflow-hidden',
        active ? 'brightness-[0.85]' : 'group-hover:brightness-[0.85]'
      )}
    >
      <ProgressiveImage
        src={image?.src ?? fallbackImage}
        alt={image?.alt ?? 'An image of a fragrance'}
        placeholderColor={image?.bg ?? undefined}
        fallbackImage={fallbackImage}
      />
    </div>
  )
}

export default FragranceImageCard
