import React from 'react'
import BouncyButton from '@/components/BouncyButton'
import RatingStars from '@/components/RatingStars'
import { Colors } from '@/styles/Colors'
import { VoteButtonGroup } from '@/components/VoteButtonGroup'
import { TbMessage2Star } from 'react-icons/tb'
import { formatNumber } from '@/utils/string-utils'
import { PiShareFat } from 'react-icons/pi'
import Divider from '@/components/Divider'
import { useVoteOnFragrance } from '../hooks/useVoteOnFragrance'
import ShareFragrancePopover from './ShareFragrancePopover'
import { Popover } from '@base-ui/react'
import MoreOptionsFragrancePopover from './MoreOptionsFragrancePopover'
import SaveFragrancePopover from './SaveFragrancePopover'
import { useDebounce } from '@/hooks/useDebounce'
import { useToastMessage } from '@/hooks/useToastMessage'
import clsx from 'clsx'
import { BrowserView } from 'react-device-detect'
import FragranceAccordsSection from './FragranceAccordsSection'
import { useFragranceContext } from '../contexts/FragranceContext'

export interface FragranceInfoSectionProps {
  onScrollToReview?: () => void
}

const FragranceInfoSection = (props: FragranceInfoSectionProps) => {
  const { fragrance } = useFragranceContext()

  const { onScrollToReview } = props

  const { id, name, brand, votes, reviewInfo } = fragrance
  const { averageRating, count } = reviewInfo

  const { toastError } = useToastMessage()

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
    },
    150
  )

  const handleOnVote = (vote: number) => {
    handleVoteOnFragrance(vote)
  }

  return (
    <div
      className={clsx(
        'flex flex-1 flex-col',
        'items-center text-center md:items-start md:text-left',
        'max-w-full md:max-w-md'
      )}
    >
      <div
        className='flex w-full items-center justify-between'
      >
        <div className='hidden md:block' />

        <h2
          className={clsx(
            'truncate font-semibold',
            'text-xl md:text-2xl',
            'flex-1 text-center md:text-left'
          )}
        >
          {name}
        </h2>

        <BrowserView>
          <MoreOptionsFragrancePopover
            fragrance={fragrance}
          />
        </BrowserView>
      </div>

      <h2
        className={clsx(
          'text-md md:text-xl'
        )}
      >
        {brand.name}
      </h2>

      <div
        className={clsx(
          'flex flex-col items-center md:flex-row',
          'my-2 md:mt-4 md:mb-2'
        )}
      >
        <RatingStars
          rating={averageRating}
          filledColor={Colors.sinopia}
          emptyColor={Colors.empty2}
          className='flex items-center justify-center'
        />

        <p
          className='mt-1 -mb-0.5 text-xs font-semibold opacity-80 md:mt-0 md:ml-1 md:text-sm'
        >
          ({averageRating ?? 0} / 5)
        </p>
      </div>

      <div
        className={clsx(
          'flex w-full flex-row flex-wrap items-end gap-2 md:mb-3 md:items-end md:justify-start md:gap-3'
        )}
      >
        <VoteButtonGroup
          votes={votes}
          onVote={handleOnVote}
        />

        <BouncyButton
          className='group mr-auto flex items-center justify-center gap-1 rounded-full border px-3 py-0 md:mr-0'
          onClick={onScrollToReview}
        >
          <div
            className='group-hover:text-sinopia flex h-8 items-center justify-center'
          >
            <TbMessage2Star
              className='size-4 md:size-4.5'
            />
          </div>

          <p
            className='text-sm font-semibold'
          >
            {formatNumber(count)}
          </p>
        </BouncyButton>

        <ShareFragrancePopover
          fragrance={fragrance}
          onRenderTrigger={() => (
            <Popover.Trigger>
              <div
                className='group flex h-8.5 cursor-pointer items-center justify-center gap-1 rounded-full border bg-white px-3 hover:brightness-95'
              >
                <PiShareFat
                  className='group-hover:text-sinopia'
                  size={18}
                />

                <p
                  className='text-sm font-semibold'
                >
                  Share
                </p>
              </div>
            </Popover.Trigger>
          )}
        />

        <div
          className={clsx(
            'flex',
            'ml-0 md:ml-auto'
          )}
        >
          <SaveFragrancePopover
            fragrance={fragrance}
          />
        </div>
      </div>

      <Divider
        horizontal
        className='my-3 w-full md:my-0'
      />

      <div
        className='flex w-full flex-col overflow-auto'
      >
        <div
          className='flex flex-col gap-3'
        >
          <FragranceAccordsSection
            previewOnly
          />
        </div>
      </div>
    </div>
  )
}

export default FragranceInfoSection