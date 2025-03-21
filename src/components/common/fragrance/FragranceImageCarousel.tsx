import { type FragranceImage } from '@/generated/graphql'
import React, { useState, type HTMLAttributes } from 'react'
import fallback from '@/assets/fall-back-fi.svg'
import BouncyButton from '@/components/BouncyButton'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import clsx from 'clsx'

export interface FragranceImageCarouselProps extends HTMLAttributes<HTMLDivElement> {
  images: FragranceImage[]
}

export const FragranceImageCarousel = (props: FragranceImageCarouselProps) => {
  const { images, className, ...rest } = props
  const [curImage, setCurImage] = useState(0)
  const empty = images.length === 0

  return (
    <div
      className='flex flex-row h-full w-full items-center group'
    >

      <div
        className={clsx(
          'flex-1 w-full h-full relative',
          className
        )}
        {...rest}
      >
        <div
          className='px-4 h-full w-full flex flex-row justify-between items-center z-10 absolute'
        >
          {!empty && (
            <BouncyButton
              className='bg-white drop-shadow-md rounded-full px-2 py-2 opacity-0 group-hover:opacity-100'
              style={{ transition: 'opacity 200ms ease-in-out' }}
              onClick={() => { setCurImage((prev) => (prev - 1 + images.length) % images.length) }}
            >
              <HiChevronLeft
                size={32}
              />
            </BouncyButton>
          )}
          {!empty && (
            <BouncyButton
              className='bg-white drop-shadow-md rounded-full px-2 py-2 opacity-0 group-hover:opacity-100'
              style={{ transition: 'opacity 200ms ease-in-out' }}
              onClick={() => { setCurImage((prev) => (prev + 1) % images.length) }}
            >
              <HiChevronRight
                size={32}
              />
            </BouncyButton>
          )}
        </div>
        <img
          src={empty ? fallback : images.at(curImage)?.url ?? fallback}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null
            currentTarget.src = fallback
          }}
          className='h-full object-contain absolute'
        />
        <div className='absolute bg-black opacity-[.04] top-0 right-0 left-0 bottom-0' />
      </div>

    </div>
  )
}
