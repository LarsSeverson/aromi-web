import { z, type ZodType } from 'zod'

export const getFieldErrors = <T>(
  schema: ZodType<T>,
  input: unknown
) => {
  const result = schema.safeParse(input)

  if (!result.success) {
    const fieldErrors = z.flattenError(result.error).fieldErrors
    return fieldErrors
  }

  return {}
}

export const getFirstErrorMessage = <T>(
  schema: ZodType<T>,
  data: unknown
) => {
  const result = schema.safeParse(data)

  if (!result.success) {
    const issue = result.error.issues[0]
    if (issue != null) {
      return issue.message
    }
  }

  return null
}

export const ValidSearchTerm = z
  .string()
  .trim()
  .min(1)

export const ValidVote = z
  .union(
    [
      z.literal(-1),
      z.literal(0),
      z.literal(1)
    ],
    'Vote must be -1, 0, or 1'
  )

export const ValidVoteBinary = z
  .union(
    [
      z.literal(0),
      z.literal(1)
    ],
    'Vote must be 0 or 1'
  )