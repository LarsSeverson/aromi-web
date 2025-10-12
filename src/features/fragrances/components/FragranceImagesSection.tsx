import React, { useState, type HTMLAttributes } from 'react'
import fallback from '@/assets/fall-back-fi.svg'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import clsx from 'clsx'
import BouncyButton from '@/components/BouncyButton'
import useFragranceImages from '../hooks/useFragranceImages'
import { type IFragranceSummary } from '../types'
import { Overlay } from '@/components/Overlay'

export interface FragranceImagesSectionProps extends HTMLAttributes<HTMLDivElement> {
  fragrance: IFragranceSummary
}

export const FragranceImagesSection = (props: FragranceImagesSectionProps) => {
  const { fragrance, className, ...rest } = props

  const { data: images } = useFragranceImages(fragrance.id, { first: 5 })

  const [curImage, setCurImage] = useState(0)

  const isSingleImage = images.length === 1

  return (
    <div
      className='flex flex-1 items-center justify-center min-w-44'
    >
      <div
        className='rounded-2xl overflow-hidden group'
      >
        <div
          className={clsx(
            'relative',
            className
          )}
          style={{ aspectRatio: `${images.at(0)?.width} / ${images.at(0)?.height}` }}
          {...rest}
        >

          <img
            src={images.at(curImage)?.src ?? fallback}
            onError={({ currentTarget }) => {
              currentTarget.onerror = null
              currentTarget.src = fallback
            }}
            className='object-contain w-full h-full'
          />

          <Overlay />

          <div
            className='flex justify-between items-center absolute top-0 w-full h-full p-2'
          >
            {!isSingleImage && curImage === 0 && (
              <BouncyButton
                className='bg-white drop-shadow-md rounded-xl px-[6px] py-[6px] opacity-0 group-hover:opacity-85'
                style={{ transition: 'opacity 200ms ease-in-out' }}
                onClick={() => { setCurImage((prev) => (prev - 1 + images.length) % images.length) }}
              >
                <HiChevronLeft
                  size={26}
                />
              </BouncyButton>
            )}

            {!isSingleImage && curImage < (images.length - 1) && (
              <BouncyButton
                className='bg-white drop-shadow-md rounded-xl px-[6px] py-[6px] opacity-0 group-hover:opacity-85'
                style={{
                  transition: 'opacity 200ms ease-in-out'
                }}
                onClick={() => { setCurImage((prev) => (prev + 1) % images.length) }}
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
