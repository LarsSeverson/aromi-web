import React from 'react'
import BouncyButton from '@/components/BouncyButton'
import RatingStars from '@/components/RatingStars'
import { Colors } from '@/styles/Colors'
import { VoteButtonGroup } from '@/components/VoteButtonGroup'
import { TbMessage2Star } from 'react-icons/tb'
import { formatNumber } from '@/utils/string-utils'
import { PiShareFat } from 'react-icons/pi'
import Divider from '@/components/Divider'
import PageCategory from '@/components/PageCategory'
import AccordsLadder from './AccordsLadder'
import { useVoteOnFragrance } from '../hooks/useVoteOnFragrance'
import ShareFragrancePopover from './ShareFragrancePopover'
import { Popover } from '@base-ui-components/react'
import MoreOptionsFragrancePopover from './MoreOptionsFragrancePopover'
import type { FragranceDetailFragment } from '@/generated/graphql'
import SaveFragrancePopover from './SaveFragrancePopover'
import { useFragranceAccords } from '../hooks/useFragranceAccords'
import { useDebounce } from '@/hooks/useDebounce'
import { useToastMessage } from '@/hooks/useToastMessage'

export interface FragranceInfoSectionProps {
  fragrance: FragranceDetailFragment
  onScrollToReview?: () => void
}

const FragranceInfoSection = (props: FragranceInfoSectionProps) => {
  const { fragrance, onScrollToReview } = props
  const { id, name, brand, votes, reviewInfo } = fragrance
  const { averageRating, count } = reviewInfo

  const { toastError } = useToastMessage()

  const { accords } = useFragranceAccords(id, { first: 10 })
  const { vote } = useVoteOnFragrance()

  const handleVoteOnFragrance = useDebounce(
    async (userVote: number) => {
      const res = await vote({ fragranceId: id, vote: userVote })

      res.match(
        () => {
          //
        },
        () => {
          toastError('', 'Something went wrong')
        }
      )
    }
  )

  const handleOnVote = (vote: number) => {
    handleVoteOnFragrance(vote)
  }

  return (

    <div
      className='flex flex-1 flex-col max-w-md '
    >

      <div
        className='flex justify-between items-center'
      >
        <h2
          className='font-semibold text-2xl truncate'
        >
          {name}
        </h2>

        <MoreOptionsFragrancePopover
          fragrance={fragrance}
        />
      </div>

      <h2
        className='text-xl'
      >
        {brand.name}
      </h2>

      <div
        className='flex flex-row items-center mt-4 mb-2'
      >
        <RatingStars
          rating={averageRating}
          size={20}
          filledColor={Colors.sinopia}
          emptyColor={Colors.empty2}
        />

        <p
          className='font-semibold text-sm opacity-80 ml-1'
        >
          ({averageRating ?? 0} / 5.0)
        </p>
      </div>

      <div
        className='flex flex-row items-end mb-3 gap-3'
      >
        <VoteButtonGroup
          votes={votes}
          onVote={handleOnVote}
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
            {formatNumber(count)}
          </p>
        </BouncyButton>

        <ShareFragrancePopover
          fragrance={fragrance}
          onRenderTrigger={() => (
            <Popover.Trigger>
              <div
                className='rounded-full px-3 h-[34px] flex items-center justify-center border gap-1 group hover:brightness-95 bg-white cursor-pointer'
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

        <div
          className='flex ml-auto'
        >
          <SaveFragrancePopover
            fragrance={fragrance}
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
            isEmpty={accords.length === 0}
            emptyTitle='No accords yet'
            emptyButtonText='Vote on Accords'
          >
            <AccordsLadder
              accords={accords}
              maxVote={accords.at(0)?.votes.score ?? 0}
            />
          </PageCategory>
        </div>
      </div>
    </div>
  )
}

export default FragranceInfoSection
