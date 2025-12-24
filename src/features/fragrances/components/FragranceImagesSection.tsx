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
      className={clsx(
        'flex flex-1 items-center',
        'justify-center md:justify-end'
      )}
    >
      <div
        className={clsx(
          'group w-full overflow-hidden rounded-2xl',
          'max-w-xs sm:max-w-sm md:max-w-md'
        )}
      >
        <div
          className={clsx(
            'relative',
            className
          )}
          style={{ aspectRatio: `${images.at(0)?.width ?? 1} / ${images.at(0)?.height ?? 1}` }}
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
                className={clsx(
                  'rounded-xl bg-white p-1.5 drop-shadow-md transition-opacity duration-200 ease-in-out',
                  'opacity-85 md:opacity-0 md:group-hover:opacity-85'
                )}
                onClick={handleOnBackImage}
              >
                <HiChevronLeft
                  className='size-5 md:size-6.5'
                />
              </BouncyButton>
            )}

            {showForwardButton && (
              <BouncyButton
                className={clsx(
                  'rounded-xl bg-white p-1.5 drop-shadow-md transition-opacity duration-200 ease-in-out',
                  'opacity-85 md:opacity-0 md:group-hover:opacity-85'
                )}
                onClick={handleOnForwardImage}
              >
                <HiChevronRight
                  className='size-5 md:size-6.5'
                />
              </BouncyButton>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
