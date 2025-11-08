import React, { useRef } from 'react'
import FragranceInfoSection from '../components/FragranceInfoSection'
import PageBackButton from '../../../components/PageBackButton'
import type { FragranceDetailFragment } from '@/generated/graphql'
import { FragranceImagesSection } from '../components/FragranceImagesSection'
import FragranceGenderSection from '../components/FragranceGenderSection'
import Divider from '@/components/Divider'
import FragranceNotesSection from '../components/FragranceNotesSection'
import FragranceTraitsSection from '../components/FragranceTraitsSection'
import FragranceReviewsSection from '../components/FragranceReviewsSection'

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
      className='flex h-full w-full flex-wrap gap-5'
    >

      <div
        className='flex pl-4'
      >
        <PageBackButton
          className='sticky top-16 mb-auto ml-auto'
        />
      </div>

      <div
        className='flex w-full flex-1 flex-col'
      >

        <div
          className='flex flex-1 flex-wrap gap-8'
        >
          <div
            className='flex flex-1 items-start rounded-xl'
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
          className='mt-10 flex w-full max-w-5xl flex-col gap-7 self-center'
        >
          <Divider
            horizontal
            className='mb-5'
          />

          <FragranceGenderSection
            fragrance={fragrance}
          />

          <FragranceNotesSection
            fragrance={fragrance}
          />

          <FragranceTraitsSection
            fragrance={fragrance}
          />

          <FragranceReviewsSection
            ref={reviewSectionRef}
            fragrance={fragrance}
          />
        </div>
      </div>
    </div>
  )
}
