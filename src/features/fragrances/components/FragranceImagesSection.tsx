import React, { useState, type HTMLAttributes } from 'react'
import blankFragranceThumbnail from '@/assets/blank-fragrance-thumbnail.svg'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import clsx from 'clsx'
import BouncyButton from '@/components/BouncyButton'
import { Overlay } from '@/components/Overlay'
import type { FragrancePreviewFragment } from '@/generated/graphql'
import { useFragranceImages } from '../hooks/useFragranceImages'
import ProgressiveImage from '@/components/ProgressiveImage'

export interface FragranceImagesSectionProps extends HTMLAttributes<HTMLDivElement> {
  fragrance: FragrancePreviewFragment
}

export const FragranceImagesSection = (props: FragranceImagesSectionProps) => {
  const { fragrance, className, ...rest } = props

  const { images } = useFragranceImages(fragrance.id)

  const [curImage, setCurImage] = useState(0)

  const isSingleImage = images.length === 1
  const showBackButton = !isSingleImage && curImage > 0
  const showForwardButton = !isSingleImage && curImage < (images.length - 1)

  const handleOnBackImage = () => {
    setCurImage((prev) => (prev - 1 + images.length) % images.length)
  }

  const handleOnForwardImage = () => {
    setCurImage((prev) => (prev + 1) % images.length)
  }

  return (
    <div
      className='flex flex-1 items-center justify-end'
    >
      <div
        className='group w-full max-w-md min-w-3xs overflow-hidden rounded-2xl'
      >
        <div
          className={clsx(
            'relative',
            className
          )}
          style={{ aspectRatio: `${images.at(0)?.width} / ${images.at(0)?.height}` }}
          {...rest}
        >
          <ProgressiveImage
            src={images.at(curImage)?.url ?? blankFragranceThumbnail}
            alt={fragrance.name}
          />

          <Overlay />

          <div
            className='absolute top-0 flex h-full w-full items-center justify-between p-2'
          >
            {showBackButton && (
              <BouncyButton
                className='rounded-xl bg-white px-1.5 py-1.5 opacity-0 drop-shadow-md transition-opacity duration-200 ease-in-out group-hover:opacity-85'
                onClick={handleOnBackImage}
              >
                <HiChevronLeft
                  size={26}
                />
              </BouncyButton>
            )}

            {showForwardButton && (
              <BouncyButton
                className='rounded-xl bg-white px-1.5 py-1.5 opacity-0 drop-shadow-md transition-opacity duration-200 ease-in-out group-hover:opacity-85'
                onClick={handleOnForwardImage}
              >
                <HiChevronRight
                  size={26}
                />
              </BouncyButton>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
