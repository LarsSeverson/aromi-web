import React from 'react'
import { formatVoteTypeNumber } from '@/common/string-utils'
import BouncyButton from '@/components/BouncyButton'
import ButtonText from '@/components/ButtonText'
import { FragranceImageCarousel } from '@/components/common/fragrance/FragranceImageCarousel'
import RatingStars from '@/components/common/RatingStars'
import { VoteButton } from '@/components/common/VoteButton'
import useFragranceImages from '@/hooks/useFragranceImages'
import useFragranceInfo from '@/hooks/useFragranceInfo'
import { useNavigate, useParams } from 'react-router'
import { TiArrowLeftThick } from 'react-icons/ti'
import { HiDotsHorizontal } from 'react-icons/hi'
import AccordsLadder from '@/components/common/fragrance/AccordsLadder'
import useFragranceAccords from '@/hooks/useFragranceAccords'

export const Fragrance = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const fragranceId = Number(id)

  const { data: info } = useFragranceInfo(fragranceId)
  const { data: images } = useFragranceImages(fragranceId, 5)
  const { data: accords } = useFragranceAccords(fragranceId, 10)

  return (
    <div className='h-full flex flex-col gap-10 items-center'>
      <div className='flex-1 flex flex-row flex-wrap gap-10 overflow-auto w-full'>
        <div className='flex-1 flex flex-nowrap justify-end min-w-96'>
          <BouncyButton
            className='mb-auto mr-10'
            onClick={() => { void navigate(-1) }}
          >
            <TiArrowLeftThick size={24} />
          </BouncyButton>
          <div className='flex-1 max-w-xl rounded-2xl overflow-hidden relative'>
            <FragranceImageCarousel
              images={images}
            />
          </div>
        </div>
        <div className='flex-1 justify-start'>
          <div className='flex-1 max-w-md pt-3 flex flex-col gap-2'>
            <div className='flex flex-row justify-between items-center'>
              <h2 className='font-pd text-2xl truncate'>
                {info.name}
              </h2>
              <BouncyButton
                className='rounded-full'
              >
                <HiDotsHorizontal
                  size={20}
                />
              </BouncyButton>
            </div>
            <h2 className='font-p text-xl'>
              {info.brand}
            </h2>
            <div className='flex flex-row items-center justify-between my-4'>
              <VoteButton
                votes={info.votes.likes - info.votes.dislikes}
              />
              <div className='flex flex-row items-center'>
                <BouncyButton
                  className='px-0 py-0 hover:backdrop-brightness-100'
                >
                  <RatingStars
                    rating={info.rating}
                    size={16}
                  />
                </BouncyButton>
                <p className='font-p text-lg mb-[3px]'>
                  ({formatVoteTypeNumber(info.reviewsCount)})
                </p>
              </div>
            </div>
            <ButtonText
              text='Add to collection'
              className='bg-sinopia text-white py-[12px]'
            />
            <div className='mt-4 flex flex-col gap-5'>
              <h2 className='font-pd text-xl'>Top accords</h2>
              <AccordsLadder
                accords={accords}
                maxVote={accords.at(0)?.votes ?? 0}
              />
            </div>
          </div>
        </div>
      </div>
      <div />
    </div>
  )
}
