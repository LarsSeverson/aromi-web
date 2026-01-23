import type z from 'zod'
import type { SearchPageSearchSchema } from './validation'

export type SearchPageSearchType = z.infer<typeof SearchPageSearchSchema>