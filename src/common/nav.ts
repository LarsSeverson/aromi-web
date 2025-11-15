import type { FileRouteTypes } from '@/routeTree.gen'

export type AppRoutePath = FileRouteTypes['id']

export interface NavItem {
  activePaths: AppRoutePath[]
}

export const NAV_HOME: NavItem = {
  activePaths: ['/']
}

export const NAV_SEARCH: NavItem = {
  activePaths: ['/search/']
}

export const NAV_PROFILE: NavItem = {
  activePaths: ['/users/$id', '/users/$id/', '/users/$id/likes', '/users/$id/reviews']
}

export const SETTINGS_NAV = [
  {
    heading: 'Edit profile',
    to: '/settings/profile'
  },
  {
    heading: 'Account management',
    to: '/settings/account'
  }
]