import React, { useEffect, useRef } from 'react'
import { FragranceImagesSection } from '@/features/fragrance/components/FragranceImagesSection'
import { type Fragrance, type User } from '@/generated/graphql'
import BouncyButton from '@/components/BouncyButton'
import { useLogFragranceView } from '@/features/fragrance/hooks/useLogFragranceView'
import { IoMdArrowRoundBack } from 'react-icons/io'
import FragranceInfoSection from '../components/FragranceInfoSection'
import FragranceCharacteristicsSection from '../components/FragranceCharacteristicsSection'
import FragranceNotesSection from '../components/FragranceNotesSection'
import FragranceReviewsSection from '../components/FragranceReviewsSection'

export type FragrancePageUser = Pick<User, 'username' | 'id'>
export type FragrancePageFragrance = Pick<Fragrance, 'id' | 'brand' | 'name' | 'rating' | 'reviewsCount' | 'reviewDistribution' | 'votes'>
export interface FragrancePageProps {
  fragrance: FragrancePageFragrance
}

export const FragrancePage = (props: FragrancePageProps) => {
  const { fragrance } = props
  const { id: fragranceId } = fragrance

  const { logFragranceView } = useLogFragranceView()

  const reviewRef = useRef<HTMLDivElement>(null)

  const scrollToReview = () => {
    if (reviewRef.current != null) {
      window.scrollTo({
        top: reviewRef.current.offsetTop - 100,
        behavior: 'smooth'
      })
    }
  }

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      void logFragranceView({ variables: { input: { fragranceId } } })
    }
  }, [fragranceId, logFragranceView])

  return (
    <div
      className='flex flex-wrap h-full gap-5'
    >
      <div
        className='flex-1'
      >
        <div
          className='flex-1'
        >
          <BouncyButton
            className='ml-auto'
          >
            <IoMdArrowRoundBack
              size={32}
            />
          </BouncyButton>
        </div>
      </div>

      <div
        className='flex-[6] gap-5'
      >
        <div
          className='flex flex-wrap gap-5'
        >
          <div
            className='border flex-1 rounded-xl flex'
          >
            <FragranceImagesSection
              fragrance={fragrance}
            />
          </div>

          <div
            className='flex-1 rounded-xl'
          >
            <FragranceInfoSection
              fragrance={fragrance}
              onScrollToReview={scrollToReview}
            />
          </div>
        </div>

        <div
          className='w-full flex justify-center mt-10'
        >
          <div
            className='max-w-6xl w-full space-y-7'
          >
            <FragranceCharacteristicsSection
              fragrance={fragrance}
            />

            <FragranceNotesSection
              fragrance={fragrance}
            />

            <FragranceReviewsSection
              ref={reviewRef}
              fragrance={fragrance}
            />
          </div>
        </div>
      </div>

      <div
        className='flex-1'
      />
    </div>
  )
}
