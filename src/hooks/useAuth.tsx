import { useCallback, useEffect, useRef, useState } from 'react'
import { useRefresh } from './useRefresh'
import { useLogIn } from './useLogIn'
import { type AuthPayload } from '@/generated/graphql'
import { accessToken as setClientAcessToken } from '@/common/client'
import { ResultAsync } from 'neverthrow'
import { useLogOut } from './useLogOut'

const useAuth = () => {
  const payload = useRef<AuthPayload | undefined>(null)
  const timer = useRef<ReturnType<typeof setTimeout>>(null)

  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [hasInitialized, setHasInitialized] = useState(false)

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

  const {
    logOut: logOutInner
  } = useLogOut()

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
    payload.current = null
    setIsAuthenticated(false)
    setAccessToken(undefined)
  }, [setAccessToken])

  const logOut = useCallback(async () => {
    const result = await ResultAsync
      .fromPromise(
        logOutInner(),
        error => error
      )
      .then(cleanAuth)

    return result
  }, [logOutInner, cleanAuth])

  useEffect(() => {
    const newPayload = refreshPayload ?? logInPayload
    payload.current = newPayload

    setIsAuthenticated(newPayload != null)
    setAccessToken(newPayload?.accessToken)

    handleTokenExpiration()
  }, [refreshPayload, logInPayload, setAccessToken, handleTokenExpiration])

  useEffect(() => {
    if (hasInitialized) return

    void ResultAsync
      .fromPromise(refresh(), () => null)
      .then(() => {
        setHasInitialized(true)
      })
  }, [hasInitialized, refresh])

  useEffect(cleanAuth, [cleanAuth])

  return {
    payload,
    isAuthenticated,
    hasInitialized,
    loading: logInLoading || refreshLoading,

    logIn,
    logOut,
    refresh
  }
}

export default useAuth
