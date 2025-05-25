import { type ZodType } from 'zod'

export const parseForm = (
  formData: FormData,
  schema: ZodType,
  transform?: (data: Record<string, FormDataEntryValue>) => unknown
) => {
  const raw = Object.fromEntries(formData)
  const parsed = transform?.(raw) ?? raw
  const result = schema.safeParse(parsed)

  if (!result.success) {
    return result.error.flatten().fieldErrors
  }

  return {}
}
