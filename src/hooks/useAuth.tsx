import { useCallback, useEffect, useRef, useState } from 'react'
import { useRefresh } from './useRefresh'
import { useLogIn } from './useLogIn'
import { type AuthPayload } from '@/generated/graphql'
import { accessToken as setClientAcessToken } from '@/common/client'

const useAuth = () => {
  const payload = useRef<AuthPayload>(null)
  const timer = useRef<ReturnType<typeof setTimeout>>(null)

  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const {
    data: refreshPayload,
    loading: refreshLoading,
    refresh
  } = useRefresh()
  const {
    data: logInPayload,
    loading: logInLoading,
    logIn
  } = useLogIn()

  const setAccessToken = useCallback((token?: string) => {
    setClientAcessToken(token)
  }, [])

  const handleTokenExpiration = useCallback(() => {
    const data = payload.current
    if (data?.expiresAt == null) return

    const expMs = data.expiresAt * 1000
    const msToRefresh = expMs - Date.now() - 60 * 1000 // 1min before

    if (timer.current != null) clearTimeout(timer.current)

    timer.current = setTimeout(() => { void refresh() }, msToRefresh)
  }, [refresh])

  const cleanAuth = useCallback(() => {
    if (timer.current != null) clearTimeout(timer.current)
  }, [])

  useEffect(() => {
    const newPayload = refreshPayload ?? logInPayload
    if (newPayload == null) return

    payload.current = newPayload
    setIsAuthenticated(true)
    setAccessToken(newPayload.accessToken)
    handleTokenExpiration()
  }, [refreshPayload, logInPayload, setAccessToken, handleTokenExpiration])

  useEffect(() => {
    void refresh()

    return cleanAuth
  }, [refresh, cleanAuth])

  return {
    payload,
    isAuthenticated,
    loading: logInLoading || refreshLoading,

    logIn,
    refresh
  }
}

export default useAuth
