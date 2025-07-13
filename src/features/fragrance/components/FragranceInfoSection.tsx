import React from 'react'
import BouncyButton from '@/components/BouncyButton'
import RatingStars from '@/components/RatingStars'
import { Colors } from '@/styles/Colors'
import { VoteButton } from '@/components/VoteButton'
import { TbMessage2Star } from 'react-icons/tb'
import { formatNumber } from '@/common/string-utils'
import { PiShareFat } from 'react-icons/pi'
import Divider from '@/components/Divider'
import PageCategory from '@/components/PageCategory'
import AccordsLadder from './AccordsLadder'
import useFragranceAccords from '../hooks/useFragranceAccords'
import { type IFragranceSummary } from '../types'
import { useVoteOnFragrance } from '../hooks/useVoteOnFragrance'
import ShareFragrancePopover from './ShareFragrancePopover'
import { useMyContext } from '@/features/user'
import { INVALID_ID } from '@/common/util-types'
import { Popover } from '@base-ui-components/react'
import CollectionPopover from '@/features/collection/components/CollectionPopover'
import MoreOptionsFragrancePopover from './MoreOptionsFragrancePopover'

export interface FragranceInfoSectionProps {
  fragrance: IFragranceSummary
  onScrollToReview?: () => void
}

const FragranceInfoSection = (props: FragranceInfoSectionProps) => {
  const { fragrance, onScrollToReview } = props

  const { id, name, brand, rating, votes, reviewsCount } = fragrance
  const { voteScore, myVote } = votes

  const myContext = useMyContext()

  const { data: accords } = useFragranceAccords(id, { pagination: { first: 10 } })
  const { voteOnFragrance } = useVoteOnFragrance()

  const handleFragranceVote = (vote: boolean | null) => {
    void voteOnFragrance({ variables: { input: { fragranceId: fragrance.id, vote } } })
  }

  return (

    <div
      className='flex flex-col m-2 min-w-44'
    >

      <div
        className='flex justify-between items-center'
      >
        <h2
          className='font-pd text-2xl truncate'
        >
          {name}
        </h2>

        <MoreOptionsFragrancePopover
          fragrance={fragrance}
        />
      </div>

      <h2 className='font-p text-xl'>
        {brand}
      </h2>

      <div className='flex flex-row items-center mt-4 mb-2'>
        <RatingStars
          rating={rating}
          size={20}
          filledColor={Colors.sinopia}
          emptyColor={Colors.empty2}
        />

        <p
          className='font-semibold text-sm opacity-80 ml-1'
        >
          ({rating} / 5.0)
        </p>
      </div>

      <div className='flex flex-row items-end mb-3 gap-3'>
        <VoteButton
          votes={voteScore}
          myVote={myVote}
          onVote={handleFragranceVote}
        />

        <BouncyButton
          className='rounded-full px-3 py-0 flex items-center justify-center border gap-1 group'
          onClick={onScrollToReview}
        >
          <div
            className='h-8 flex items-center justify-center group-hover:text-sinopia'
          >
            <TbMessage2Star
              size={18}
            />
          </div>
          <p
            className='font-semibold text-sm'
          >
            {formatNumber(reviewsCount)}
          </p>
        </BouncyButton>

        <div
          className='rounded-full px-3 py-0 flex items-center justify-center border gap-1 group'
        >
          <ShareFragrancePopover
            fragrance={fragrance}
            userId={myContext.me?.id ?? INVALID_ID}
            onRenderTrigger={() => (
              <Popover.Trigger>
                <div
                  className='h-8 flex items-center justify-center gap-2'
                >
                  <PiShareFat
                    className='group-hover:text-sinopia'
                    size={18}
                  />
                  <p
                    className='font-semibold text-sm'
                  >
                    Share
                  </p>

                </div>
              </Popover.Trigger>
            )}
          />
        </div>

        <div
          className='flex ml-auto'
        >
          <CollectionPopover
            fragrance={fragrance}
            userId={myContext.me?.id ?? INVALID_ID}
          />
        </div>
      </div>

      <Divider
        horizontal
      />

      <div
        className='flex flex-col overflow-auto'
      >
        <div
          className='flex flex-col gap-3'
        >
          <PageCategory
            title='Accords'
          >
            <AccordsLadder
              accords={accords}
              maxVote={accords.at(0)?.votes.voteScore ?? 0}
            />
          </PageCategory>
        </div>
      </div>
    </div>
  )
}

export default FragranceInfoSection
