import { type FragranceImage, type Fragrance } from '@/generated/graphql'
import clsx from 'clsx'
import React from 'react'
import { Link } from 'react-router'
import { VoteButton } from '../VoteButton'
import fallbackImage from '@/assets/fall-back-fi.svg'
import ButtonText from '@/components/ButtonText'

export type CardFragrancePreview = Omit<Pick<Fragrance, 'id' | 'name' | 'brand' | 'votes'>, 'images'> & {
  images: FragranceImage[]
}

export interface FragrancePreviewCardProps extends React.HTMLAttributes<HTMLDivElement> {
  fragrance: CardFragrancePreview
  onFragranceVote?: (myVote: boolean | null) => void
}

export const FragrancePreviewCard = (props: FragrancePreviewCardProps) => {
  const { fragrance, onFragranceVote, className, ...rest } = props
  const votes = fragrance.votes.likes - fragrance.votes.dislikes

  // const handleVote = useCallback((myVote: boolean | null) => {
  //   onFragranceVote?.(myVote)
  // }, [onFragranceVote])

  return (
    <div
      className={clsx('flex flex-col', 'h-full')}
      {...rest}
    >
      <Link
        to='/'
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
          <div className='absolute bg-black opacity-[.04] top-0 right-0 left-0 bottom-0' />
        </div>
        <div
          className='hidden group-hover:inline absolute top-3 right-3'
        >
          <ButtonText
            text='Save'
            className='bg-sinopia text-white'
          />
        </div>
        <VoteButton
          votes={votes}
          className='absolute bottom-3 right-3 bottom'
        />
      </Link>
      <div className='px-1 pt-2 pb-4'>
        <div
          className='flex flex-row'
        >
          <Link
            to='/'
            className='flex-1 truncate font-semibold text-sm'
          >
            {fragrance.name}
          </Link>
        </div>
        <Link
          to='/'
          className='truncate text-sm'
        >
          {fragrance.brand}
        </Link>
      </div>
    </div>
  )
}
