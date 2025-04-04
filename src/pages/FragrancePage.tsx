import React, { useRef, useState } from 'react'
import { formatNumber } from '@/common/string-utils'
import { FragranceImageCarousel } from '@/components/fragrance/FragranceImageCarousel'
import RatingStars from '@/components/common/RatingStars'
import { VoteButton } from '@/components/common/VoteButton'
import useFragranceImages from '@/hooks/useFragranceImages'
import AccordsLadder from '@/components/fragrance/AccordsLadder'
import useFragranceAccords from '@/hooks/useFragranceAccords'
import useFragranceTraits from '@/hooks/useFragranceTraits'
import NotesPyramid from '@/components/fragrance/NotesPyramid'
import useFragranceNotes from '@/hooks/useFragranceNotes'
import { type Fragrance, NoteLayer, type User } from '@/generated/graphql'
import { CharacteristicsLadder } from '@/components/fragrance/CharacteristicsLadder'
import PageCategory from '@/components/common/PageCategory'
import useFragranceReviews from '@/hooks/useFragranceReviews'
import { ReviewsSummary } from '@/components/fragrance/ReviewsSummary'
import { ReviewsList } from '@/components/fragrance/ReviewsList'
import { PageNav } from '@/components/common/PageNav'
import { useMyReview } from '@/hooks/useMyReview'
import MyReviewCard from '@/components/common/MyReviewCard'
import { Colors } from '@/styles/Colors'
import InteractableRatingStars from '@/components/common/InteractableRatingStars'
import { useNavigate } from '@tanstack/react-router'
import BouncyButton from '@/components/common/BouncyButton'
import Divider from '@/components/common/Divider'
import { TbMessage2Star } from 'react-icons/tb'
import { PiShareFat } from 'react-icons/pi'
import { HiDotsHorizontal } from 'react-icons/hi'

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

  const reviewRef = useRef<HTMLDivElement>(null)

  const [curReviewPage, setCurReviewPage] = useState(0)
  const totalPages = Math.ceil(reviews.length / 4)

  const layers = [
    { layer: NoteLayer.Top, notes: notes.top },
    { layer: NoteLayer.Middle, notes: notes.middle },
    { layer: NoteLayer.Base, notes: notes.base }
  ].filter(item => item.notes.length > 0)

  const scrollToReview = () => {
    if (reviewRef.current != null) {
      window.scrollTo({
        top: reviewRef.current.offsetTop - 100,
        behavior: 'smooth'
      })
    }
  }

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
          <div className='flex-1 flex flex-col max-w-xl min-w-44'>
            <div className='flex flex-row justify-between items-center'>
              <h2 className='font-pd text-2xl truncate'>
                {info.name}
              </h2>
              <BouncyButton
                className='rounded-full aspect-square ml-auto'
              >
                <HiDotsHorizontal
                  size={20}
                />
              </BouncyButton>
            </div>
            <h2 className='font-p text-xl'>
              {info.brand}
            </h2>

            <div className='flex flex-row items-center mt-5'>
              <RatingStars
                rating={info.rating}
                size={20}
                filledColor={Colors.sinopia}
                emptyColor={Colors.empty2}
              />
              <p
                className='font-semibold text-sm opacity-80 ml-1'
              >
                ({info.rating} / 5.0)
              </p>
            </div>

            <div className='flex flex-row items-end mb-3 gap-3'>
              <VoteButton
                votes={info.votes.likes - info.votes.dislikes}
              />

              <BouncyButton
                className='rounded-full px-3 py-0 flex items-center justify-center border gap-1 group'
                onClick={scrollToReview}
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
                  {formatNumber(info.reviewsCount)}
                </p>
              </BouncyButton>

              <BouncyButton
                className='rounded-full px-3 py-0 flex items-center justify-center border gap-1 group'
              >
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
              </BouncyButton>

              <div className='flex ml-auto'>
                <BouncyButton
                  className='bg-sinopia text-white rounded-full px-7 py-3 hover:shadow-lg hover:brightness-105'
                >
                  <p
                    className='font-semibold'
                  >
                    Save
                  </p>
                </BouncyButton>
              </div>
            </div>

            <Divider
              horizontal
              className='mb-5'
            />

            <div
              className='flex flex-col overflow-auto'
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
          <div
            ref={reviewRef}
            className='w-full flex flex-col items-center'
          >
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
