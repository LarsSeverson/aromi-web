import type { FileRouteTypes } from '@/routeTree.gen'

export type AppRoutePath = FileRouteTypes['id']

export interface NavItem {
  activePaths: AppRoutePath[]
}

export const NAV_HOME: NavItem = {
  activePaths: ['/']
}

export const NAV_SEARCH: NavItem = {
  activePaths: ['/search']
}

export const NAV_PROFILE: NavItem = {
  activePaths: ['/users/$id/']
}
