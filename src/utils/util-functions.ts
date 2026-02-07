import { SEARCH_FRAGRANCES_QUERY } from '@/features/fragrances'
import type { SEARCH_FILTER_OPTIONS } from './constants'
import { SEARCH_USERS_QUERY } from '@/features/users'
import { SEARCH_POSTS_QUERY } from '@/features/posts'

export const getSearchQuery = (filter?: typeof SEARCH_FILTER_OPTIONS[number]['value']) => {
  if (filter === 'users') return SEARCH_USERS_QUERY
  if (filter === 'posts') return SEARCH_POSTS_QUERY
  return SEARCH_FRAGRANCES_QUERY
}

export const pluralizer = (count: number, str: string) => {
  if (count === 1) return str
  return `${str}s`
}

export const pluralizer2 = (count: number, singular: string, plural: string) => {
  if (count === 1) return singular
  return plural
}

export const allCapsToFirstCap = (word: string) => {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
}

export const getContrastColor = (hexColor?: string | null) => {
  if (hexColor == null) return '#000000'

  const hex = hexColor.replace('#', '')

  const r = parseInt(hex.substring(0, 2), 16)
  const g = parseInt(hex.substring(2, 4), 16)
  const b = parseInt(hex.substring(4, 6), 16)

  const brightness = (r * 299 + g * 587 + b * 114) / 1000

  return brightness > 128 ? '#000000' : '#ffffff'
}