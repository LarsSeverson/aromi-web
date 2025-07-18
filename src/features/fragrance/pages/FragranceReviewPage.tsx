import VoteAccordsList from '@/features/fragrance/components/VoteAccordsList'
import { Icon } from '@/components/Icon'
import InteractableRatingStars from '@/components/InteractableRatingStars'
import MiddleSlider from '@/components/MiddleSlider'
import PageCategory from '@/components/PageCategory'
import useFragranceAccords from '@/features/fragrance/hooks/useFragranceAccords'
import gender from '@/assets/gender.svg'
import longevity from '@/assets/longevity.svg'
import sillage from '@/assets/sillage.svg'
import complexity from '@/assets/complexity.svg'
import balance from '@/assets/balance.svg'
import allure from '@/assets/allure.svg'
import fallbackImage from '@/assets/fall-back-fi.svg'
import { Colors } from '@/styles/Colors'
import React from 'react'
import { type Fragrance } from '@/generated/graphql'
import TextareaAutosize from 'react-textarea-autosize'
import clsx from 'clsx'
import { TiArrowLeftThick } from 'react-icons/ti'
import useFragranceImages from '@/features/fragrance/hooks/useFragranceImages'
import { Overlay } from '@/components/Overlay'
import RatingStars from '@/components/RatingStars'
import { Link, useCanGoBack, useRouter } from '@tanstack/react-router'
import Divider from '@/components/Divider'
import BouncyButton from '@/components/BouncyButton'
import FragranceBackButton from '../components/FragranceBackButton'
import { type IFragranceSummary } from '../types'
import ReviewDistributionLadder from '../components/ReviewDistributionLadder'
import { ReviewsSummary } from '../components/ReviewsSummary'

export interface FragranceReviewPageProps {
  fragrance: IFragranceSummary
  rating: number
}

const FragranceReviewPage = (props: FragranceReviewPageProps) => {
  const { fragrance, rating } = props
  const {
    id,
    name,
    brand,
    rating: fragranceRating,
    reviewDistribution,
    reviewsCount
  } = fragrance

  const { data: images } = useFragranceImages(id)
  const { data: accords } = useFragranceAccords(id)

  return (
    <div
      className='flex flex-wrap gap-5'
    >
      <div
        className='flex-1'
      >
        <FragranceBackButton
          className='sticky top-[87px] ml-auto'
        />
      </div>

      <div
        className='flex-[6] flex-col gap-5 w-full max-w-3xl'
      >
        <div>
          <p
            className='mx-2 mt-2 font-semibold text-xl truncate'
          >
            {name}
          </p>

          <p
            className='mx-2 font-light text-lg'
          >
            {brand}
          </p>
        </div>

        <Divider
          horizontal
          className='my-3'
        />

        <PageCategory
          title='How are the accords?'
        >
          {}
        </PageCategory>

        <PageCategory
          title='How do the notes develop?'
        >
          {}
        </PageCategory>
      </div>

      <div
        className='flex-1'
      />

    </div>
  )
}

export default FragranceReviewPage
