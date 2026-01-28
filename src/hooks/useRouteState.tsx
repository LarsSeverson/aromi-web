import { useAuthContext } from '@/features/auth'
import { useChildMatches, useLocation, useRouterState, useSearch } from '@tanstack/react-router'

export const useRouteState = () => {
  const { me } = useAuthContext()

  const search = useSearch({ strict: false })

  const status = useRouterState({
    select: (state) => state.status
  })

  const matches = useChildMatches()

  const pathname = useLocation({
    select: (location) => location.pathname
  })

  const isSettled = status === 'idle'

  const profileMatch = isSettled
    ? matches.find((m) => m.routeId === '/users/$id')
    : undefined

  const matchedUserId = profileMatch?.params?.id
  const isOnMyProfile = matchedUserId != null && matchedUserId === me?.id

  const isOnRoute = (route: string) => isSettled && pathname.startsWith(route)
  const isOnExactRoute = (route: string) => isSettled && pathname === route

  const isOnSearchHome = isOnExactRoute('/search') && (search.term === '' && search.filter == null)
  const isOnSearch = isOnRoute('/search') && (search.term != null || search.filter != null)

  return {
    pathname,

    isHome: isOnExactRoute('/'),

    isUsers: isOnRoute('/users'),

    isPosts: isOnRoute('/community/posts'),

    isSearch: isOnSearch,
    isSearchHome: isOnSearchHome,

    isOnMyProfile,

    isOnRoute,
    isOnExactRoute
  }
}