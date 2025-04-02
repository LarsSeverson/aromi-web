import React, { useState } from 'react'
import { formatNumber } from '@/common/string-utils'
import BouncyButton from '@/components/BouncyButton'
import ButtonText from '@/components/ButtonText'
import { FragranceImageCarousel } from '@/components/common/fragrance/FragranceImageCarousel'
import RatingStars from '@/components/common/RatingStars'
import { VoteButton } from '@/components/common/VoteButton'
import useFragranceImages from '@/hooks/useFragranceImages'
import { HiDotsHorizontal } from 'react-icons/hi'
import AccordsLadder from '@/components/common/fragrance/AccordsLadder'
import useFragranceAccords from '@/hooks/useFragranceAccords'
import useFragranceTraits from '@/hooks/useFragranceTraits'
import NotesPyramid from '@/components/common/fragrance/NotesPyramid'
import useFragranceNotes from '@/hooks/useFragranceNotes'
import { type Fragrance, NoteLayer, type User } from '@/generated/graphql'
import { CharacteristicsLadder } from '@/components/common/fragrance/CharacteristicsLadder'
import PageCategory from '@/components/common/PageCategory'
import useFragranceReviews from '@/hooks/useFragranceReviews'
import { ReviewsSummary } from '@/components/common/fragrance/ReviewsSummary'
import Divider from '@/components/Divider'
import { ReviewsList } from '@/components/common/fragrance/ReviewsList'
import { PageNav } from '@/components/common/PageNav'
import { useMyReview } from '@/hooks/useMyReview'
import MyReviewCard from '@/components/common/MyReviewCard'
import { Colors } from '@/styles/Colors'
import InteractableRatingStars from '@/components/common/InteractableRatingStars'
import { useNavigate } from '@tanstack/react-router'

export type FragrancePageUser = Pick<User, 'username' | 'id'>
export type FragrancePageFragrance = Pick<Fragrance, 'id' | 'brand' | 'name' | 'rating' | 'reviewsCount' | 'reviewDistribution' | 'votes'>
export interface FragrancePageProps {
  fragrance: FragrancePageFragrance
  user: FragrancePageUser | undefined | null
}

export const FragrancePage = (props: FragrancePageProps) => {
  const { fragrance: info } = props
  const { id: fragranceId } = info

  const navigate = useNavigate()
  const { data: images } = useFragranceImages(fragranceId, 5)
  const { data: traits } = useFragranceTraits(fragranceId)
  const { data: accords } = useFragranceAccords(fragranceId, 10)
  const { data: notes } = useFragranceNotes(fragranceId, { includeTop: true, includeMiddle: true, includeBase: true })
  const { data: reviews } = useFragranceReviews(fragranceId)
  const { data: myReview } = useMyReview(fragranceId)

  const [curReviewPage, setCurReviewPage] = useState(0)
  const totalPages = Math.ceil(reviews.length / 4)

  const layers = [
    { layer: NoteLayer.Top, notes: notes.top },
    { layer: NoteLayer.Middle, notes: notes.middle },
    { layer: NoteLayer.Base, notes: notes.base }
  ].filter(item => item.notes.length > 0)

  return (
    <div className='h-full flex flex-col items-center relative'>
      <div className='flex-1 flex flex-row flex-wrap gap-10 w-full h-full min-h-full'>
        <div className='flex-1 flex flex-row justify-end h-full'>
          <div className='flex-1 max-w-xl min-w-44 rounded-2xl overflow-hidden relative'>
            <FragranceImageCarousel
              images={images}
            />
          </div>
        </div>
        <div className='flex-1 justify-start py-3'>
          <div className='flex-1 flex flex-col gap-2 max-w-xl min-w-44'>
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
                  className='px-0 py-0 hover:backdrop-opacity-0'
                >
                  <RatingStars
                    rating={info.rating}
                    size={18}
                  />
                </BouncyButton>
                <p className='font-p text-lg mb-[3px]'>
                  ({formatNumber(info.reviewsCount)})
                </p>
              </div>
            </div>
            <div className='flex flex-col'>
              <ButtonText
                text='Add to collection'
                className='bg-sinopia text-white py-[12px] active:scale-[0.99] max-w-xs w-full self-center'
              />
            </div>
            <div
              className='flex flex-col gap-7 overflow-auto'
            >
              <div className='flex flex-col gap-3'>
                <PageCategory
                  title='Accords'
                >
                  <AccordsLadder
                    accords={accords}
                    maxVote={accords.at(0)?.votes ?? 0}
                  />
                </PageCategory>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full flex flex-col max-w-6xl min-w-44 mt-7 px-5'>
        <PageCategory
          title='Characteristics'
        >
          <div className='w-full flex flex-col items-center'>
            <CharacteristicsLadder
              characteristics={traits}
              className='w-full max-w-4xl'
            />
          </div>
        </PageCategory>
        <PageCategory
          title='Notes'
        >
          <div className='w-full flex flex-col items-center'>
            <NotesPyramid
              layers={layers}
              className='mx-5 w-full max-w-4xl'
            />
          </div>
        </PageCategory>
        {myReview != null && (
          <PageCategory
            title='My review'
          >
            <div className='w-full flex justify-center'>
              <div className='w-full max-w-4xl'>
                <MyReviewCard
                  myReview={myReview}
                />
              </div>
            </div>
          </PageCategory>
        )}
        <PageCategory
          title='Reviews'
        >
          <div className='w-full flex flex-col items-center'>
            <div className='max-w-4xl w-full'>
              {myReview == null && (
                <InteractableRatingStars
                  rating={0}
                  size={42}
                  emptyColor={Colors.empty2}
                  filledColor={Colors.sinopia}
                  className='mb-5'
                  onStarClick={(rating) => {
                    void navigate({
                      from: '/fragrance/$id',
                      to: 'review',
                      search: {
                        rating
                      }
                    })
                  }}
                />
              )}
              <ReviewsSummary
                rating={info.rating}
                reviewCount={info.reviewsCount}
                reviewDistribution={info.reviewDistribution}
                className='w-full max-w-4xl'
              />
              <Divider
                horizontal
                className='my-5'
              />

              <ReviewsList
                reviews={reviews}
                currentPage={curReviewPage}
                reviewsPerPage={4}
              />
              <PageNav
                totalPages={totalPages}
                curPage={curReviewPage}
                onPageChange={setCurReviewPage}
                className='mr-auto my-2'
              />
            </div>
          </div>
        </PageCategory>
      </div>
    </div>
  )
}
