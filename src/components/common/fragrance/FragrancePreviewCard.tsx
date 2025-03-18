import BouncyButton from '@/components/BouncyButton'
import { type FragranceImage, type Fragrance } from '@/generated/graphql'
import clsx from 'clsx'
import React, { useCallback } from 'react'

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

  const handleVote = useCallback((myVote: boolean | null) => {
    onFragranceVote?.(myVote)
  }, [onFragranceVote])

  return (
    <div
      className={clsx('bg-black h-full w-full', className)}
      {...rest}
    >
      <BouncyButton className='h-full rounded-md px-0 py-0'>
        {}
      </BouncyButton>
      {/* <div>
        <div>
          <p>{fragrance.name}</p>
        </div>
        <p>{fragrance.brand}</p>
      </div> */}
    </div>
  )
}
