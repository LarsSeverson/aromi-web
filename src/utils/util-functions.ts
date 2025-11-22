import { SEARCH_FRAGRANCES_QUERY } from '@/features/fragrances'
import type { SEARCH_FILTER_OPTIONS } from './constants'
import { SEARCH_USERS_QUERY } from '@/features/users'

export const getSearchQuery = (filter?: typeof SEARCH_FILTER_OPTIONS[number]['value']) => {
  if (filter === 'users') return SEARCH_USERS_QUERY
  return SEARCH_FRAGRANCES_QUERY
}