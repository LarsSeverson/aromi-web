import { useRef, useEffect } from 'react'
import { useToastMessage } from './useToastMessage'
import type { Nullable } from '@/utils/util'
import { router } from '@/main'

export const useRouterUtils = () => {
  const { toastMessage } = useToastMessage()
  const lastRoute = useRef<Nullable<{ pathname: string }>>(undefined)

  useEffect(() => {
    const unsub = router.subscribe(
      'onBeforeNavigate',
      ({ fromLocation }) => {
        lastRoute.current = fromLocation
      })

    return unsub
  }, [])

  return {
    toastMessage,
    lastRoute
  }
}

export type UseRouterUtilsReturn = ReturnType<typeof useRouterUtils>
