import React, { useRef } from 'react'
import FragranceInfoSection from '../components/FragranceInfoSection'
import PageBackButton from '../../../components/PageBackButton'
import type { FragranceDetailFragment } from '@/generated/graphql'
import { FragranceImagesSection } from '../components/FragranceImagesSection'
import FragranceGenderSection from '../components/FragranceGenderSection'
import Divider from '@/components/Divider'
import FragranceNotesSection from '../components/FragranceNotesSection'
import FragranceTraitsSection from '../components/FragranceTraitsSection'

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
          className='sticky top-[64px] ml-auto mb-auto'
        />
      </div>

      <div
        className='flex-1 flex flex-col'
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

        <div
          className='self-center mt-10 max-w-4xl w-full flex flex-col gap-7'
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
        </div>
      </div>
    </div>
  )
}
