import { Link } from '@tanstack/react-router'
import React from 'react'
import { type IFragrancePreviewSummary } from '../types'

export interface StartReviewButtonProps {
  fragrance: IFragrancePreviewSummary
}

const StartReviewButton = (props: StartReviewButtonProps) => {
  const { fragrance } = props
  const { id } = fragrance

  return (
    <Link
      to='/fragrance/$id/review'
      params={{ id: String(id) }}
    >
      {}
    </Link>
  )
}

export default StartReviewButton
