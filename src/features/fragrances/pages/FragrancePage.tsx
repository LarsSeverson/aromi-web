import React, { useRef } from 'react'
import FragranceInfoSection from '../components/FragranceInfoSection'
import FragranceCharacteristicsSection from '../components/FragranceCharacteristicsSection'
import FragranceNotesSection from '../components/FragranceNotesSection'
import FragranceReviewsSection from '../components/FragranceReviewsSection'
import PageBackButton from '../../../components/PageBackButton'
import type { FragranceDetailFragment } from '@/generated/graphql'
import { FragranceImagesSection } from '../components/FragranceImagesSection'

export interface FragrancePageProps {
  fragrance: FragranceDetailFragment
}

export const FragrancePage = (props: FragrancePageProps) => {
  const { fragrance } = props

  const reviewSectionRef = useRef<HTMLDivElement>(null)

  const scrollToReview = () => {
    if (reviewSectionRef.current != null) {
      window.scrollTo({
        top: reviewSectionRef.current.offsetTop - 100,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div
      className='flex flex-wrap gap-5 h-full w-full'
    >
      <div
        className='flex pl-4'
      >
        <PageBackButton
          className='sticky top-[87px] ml-auto'
        />
      </div>

      <div
        className='flex-1 flex'
      >
        <div
          className='flex-1 flex flex-wrap gap-5'
        >
          <div
            className='flex-1 rounded-xl flex'
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

        {/* <div
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
              ref={reviewSectionRef}
              fragrance={fragrance}
            />
          </div>
        </div> */}
      </div>
    </div>
  )
}
