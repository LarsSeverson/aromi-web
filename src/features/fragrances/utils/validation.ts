import z from 'zod'

export const MIN_FRAGRANCE_COLLECTION_NAME_LENGTH = 1
export const MAX_FRAGRANCE_COLLECTION_NAME_LENGTH = 100

export const MIN_REVIEW_BODY_LENGTH = 45
export const MAX_REVIEW_BODY_LENGTH = 5000
export const MIN_REVIEW_RATING = 0
export const MAX_REVIEW_RATING = 5

export const MIN_REPORT_BODY_LENGTH = 45
export const MAX_REPORT_BODY_LENGTH = 3000

export const ValidFragranceCollectionName = z
  .string('Collection name must be a string')
  .trim()
  .min(MIN_FRAGRANCE_COLLECTION_NAME_LENGTH, 'Collection name must not be empty')
  .max(MAX_FRAGRANCE_COLLECTION_NAME_LENGTH, `Collection name cannot exceed ${MAX_FRAGRANCE_COLLECTION_NAME_LENGTH} characters`)

export const ValidFragranceCollection = z
  .object({
    name: ValidFragranceCollectionName.nonoptional('Collection name is required')
  })
  .strip()

export const ValidFragranceReviewBody = z
  .string()
  .trim()
  .min(MIN_REVIEW_BODY_LENGTH, `Review must be at least ${MIN_REVIEW_BODY_LENGTH} characters`)
  .max(MAX_REVIEW_BODY_LENGTH, `Review cannot exceed ${MAX_REVIEW_BODY_LENGTH} characters`)

export const ValidFragranceReviewRating = z
  .number('Review rating must be a number')
  .min(MIN_REVIEW_RATING, `Review rating must be at least ${MIN_REVIEW_RATING}`)
  .max(MAX_REVIEW_RATING, `Review rating cannot exceed ${MAX_REVIEW_RATING}`)

export const ValidFragranceReview = z
  .object({
    rating: ValidFragranceReviewRating,
    body: ValidFragranceReviewBody
  })
  .strip()

export const ValidFragranceReportBody = z
  .string()
  .trim()
  .min(MIN_REPORT_BODY_LENGTH, `Report body must be at least ${MIN_REPORT_BODY_LENGTH} characters`)
  .max(MAX_REPORT_BODY_LENGTH, `Report body cannot exceed ${MAX_REPORT_BODY_LENGTH} characters`)

export const ValidFragranceReport = z
  .object({
    body: ValidFragranceReportBody.nonoptional('Report body is required')
  })
  .strip()