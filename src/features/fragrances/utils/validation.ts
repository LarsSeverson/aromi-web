import z from 'zod'

export const MIN_REPORT_BODY_LENGTH = 1
export const MAX_REPORT_BODY_LENGTH = 2000

export const ValidFragranceReportBody = z
  .string()
  .trim()
  .min(MIN_REPORT_BODY_LENGTH, 'Report body must not be empty')
  .max(MAX_REPORT_BODY_LENGTH, `Report body cannot exceed ${MAX_REPORT_BODY_LENGTH} characters`)

export const ValidFragranceReport = z
  .object({
    body: ValidFragranceReportBody.nonoptional('Report body is required')
  })
  .strip()