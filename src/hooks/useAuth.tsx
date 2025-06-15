import { useCallback, useEffect, useRef, useState } from 'react'
import { useRefresh } from './useRefresh'
import { useLogIn } from './useLogIn'
import { type AuthPayload } from '@/generated/graphql'
import { accessToken as setClientAcessToken } from '@/common/client'
import { ResultAsync } from 'neverthrow'
import { useLogOut } from './useLogOut'
import { useForgotPassword } from './useForgotPassword'
import { useConfirmForgotPassword } from './useConfirmForgotPassword'
import { useSignUp } from './useSignUp'
import { useConfirmSignUp } from './useConfirmSignUp'
import { useResendSignUpConfirmationCode } from './useResendSignUpConfirmationCode'

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

  const {
    signUp
  } = useSignUp()

  const {
    confirmSignUp
  } = useConfirmSignUp()

  const {
    forgotPassword
  } = useForgotPassword()

  const {
    confirmForgotPassword
  } = useConfirmForgotPassword()

  const {
    resendSignUpConfirmationCode
  } = useResendSignUpConfirmationCode()

  const handleTokenExpiration = useCallback(() => {
    const data = payload.current
    if (data?.expiresIn == null) return

    const expMs = data.expiresIn * 1000
    const msToRefresh = expMs - Date.now() - 60 * 1000 // 1min before

    if (timer.current != null) clearTimeout(timer.current)

    timer.current = setTimeout(() => { void refresh() }, msToRefresh)
  }, [refresh])

  const handleNewPayload = useCallback((newPayload: AuthPayload | null | undefined) => {
    payload.current = newPayload
    setIsAuthenticated(newPayload != null)
    setClientAcessToken(newPayload?.accessToken)
    handleTokenExpiration()
  }, [handleTokenExpiration])

  const cleanAuth = useCallback(() => {
    if (timer.current != null) clearTimeout(timer.current)
    payload.current = null
    setIsAuthenticated(false)
    setClientAcessToken(undefined)
  }, [])

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
    if (!hasInitialized) return

    const newPayload = refreshPayload?.refresh ?? logInPayload?.logIn
    handleNewPayload(newPayload)
  }, [hasInitialized, refreshPayload, logInPayload, handleNewPayload])

  useEffect(() => {
    if (hasInitialized) return

    void ResultAsync
      .fromPromise(refresh(), () => null)
      .match(
        ({ data }) => {
          handleNewPayload(data?.refresh)
        },
        () => null
      )
      .finally(() => {
        setHasInitialized(true)
      })
  }, [hasInitialized, handleNewPayload, refresh])

  useEffect(() => cleanAuth, [cleanAuth])

  return {
    payload,
    isAuthenticated,
    hasInitialized,
    loading: logInLoading || refreshLoading,

    refresh,
    logIn,
    logOut,
    signUp,
    confirmSignUp,

    forgotPassword,
    confirmForgotPassword,
    resendSignUpConfirmationCode
  }
}

export default useAuth
