import { z, type ZodType } from 'zod'

export const getFieldErrors = <T>(
  formData: FormData,
  schema: ZodType<T>,
  transform?: (data: Record<string, FormDataEntryValue>) => unknown
) => {
  const raw = Object.fromEntries(formData)
  const parsed = transform?.(raw) ?? raw
  const result = schema.safeParse(parsed)

  if (!result.success) {
    const errorTree = z.treeifyError(result.error)
    return errorTree
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
