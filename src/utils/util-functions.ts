import { SEARCH_FRAGRANCES_QUERY } from '@/features/fragrances'
import type { SEARCH_FILTER_OPTIONS } from './constants'
import { SEARCH_BRANDS_QUERY } from '@/features/brands'
import { SEARCH_USERS_QUERY } from '@/features/users'

export const getSearchQuery = (filter?: typeof SEARCH_FILTER_OPTIONS[number]['value']) => {
  if (filter === 'brands') return SEARCH_BRANDS_QUERY
  if (filter === 'users') return SEARCH_USERS_QUERY
  return SEARCH_FRAGRANCES_QUERY
}