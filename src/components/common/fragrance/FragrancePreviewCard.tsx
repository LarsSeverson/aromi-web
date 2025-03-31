import { type FragranceImage, type Fragrance } from '@/generated/graphql'
import clsx from 'clsx'
import React from 'react'
import { VoteButton } from '../VoteButton'
import fallbackImage from '@/assets/fall-back-fi.svg'
import ButtonText from '@/components/ButtonText'
import BouncyButton from '@/components/BouncyButton'
import { HiDotsHorizontal } from 'react-icons/hi'
import { Link, type LinkProps } from '@tanstack/react-router'
import { Overlay } from '../Overlay'

export type CardFragrancePreview = Omit<Pick<Fragrance, 'id' | 'name' | 'brand' | 'votes'>, 'images'> & {
  images: FragranceImage[]
}

export interface FragrancePreviewCardProps extends LinkProps {
  fragrance: CardFragrancePreview
  navigateTo?: string | undefined
  className?: string | undefined
  onFragranceVote?: (myVote: boolean | null) => void
}

export const FragrancePreviewCard = (props: FragrancePreviewCardProps) => {
  const { fragrance, navigateTo, onFragranceVote, className, to, params, ...rest } = props
  const votes = fragrance.votes.likes - fragrance.votes.dislikes

  // const handleVote = useCallback((myVote: boolean | null) => {
  //   onFragranceVote?.(myVote)
  // }, [onFragranceVote])

  return (
    <Link
      to={to ?? '/fragrance/$id'}
      params={params ?? { id: String(fragrance.id) }}
      className={clsx(
        'group flex flex-col h-full'
      )}
      {...rest}
    >
      <div
        className='group flex-1 flex rounded-2xl px-0 py-0 relative overflow-hidden'
      >
        <div
          className='flex-1 bg-white group-hover:brightness-[.85] relative'
        >
          <img
            src={fragrance.images.at(0)?.url ?? fallbackImage}
            alt={fragrance.name}
            className='absolute w-full h-full object-cover bg-transparent'
            loading='lazy'
            onError={({ currentTarget }) => {
              currentTarget.onerror = null
              currentTarget.src = fallbackImage
            }}
          />
          <Overlay />
        </div>
        <div
          className='hidden group-hover:inline absolute w-full h-full'
        >
          <ButtonText
            text='Save'
            className='bg-sinopia text-white right-3 top-3'
            style={{ position: 'absolute' }}
          />

          <BouncyButton
            className='rounded-full px-2 py-2 bg-white border-[1px] left-3 bottom-3'
            style={{ position: 'absolute' }}
          >
            <HiDotsHorizontal />
          </BouncyButton>
        </div>
        <VoteButton
          votes={votes}
          myVote={fragrance.votes.myVote}
          className='absolute bottom-3 right-3 bottom'
        />
      </div>
      <div className='px-1 pt-2'>
        <div
          className='flex flex-row'
        >
          <h5
            className='flex-1 truncate font-semibold text-sm'
          >
            {fragrance.name}
          </h5>
        </div>
        <h6
          className='truncate text-sm'
        >
          {fragrance.brand}
        </h6>
      </div>
    </Link>
  )
}
