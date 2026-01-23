import { useLocation } from '@tanstack/react-router'

export const useRouteState = () => {
  const pathname = useLocation({
    select: (location) => location.pathname
  })

  return {
    pathname,

    isHome: pathname === '/',

    isUsers: pathname.startsWith('/users'),

    isPosts: pathname.startsWith('/community/posts')
  }
}