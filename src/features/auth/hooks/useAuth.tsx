import { useCallback, useEffect, useRef, useState } from 'react'
import { useRefresh } from './useRefresh'
import { useLogIn } from './useLogIn'
import { accessToken as setClientAcessToken } from '@/common/client'
import { useLogOut } from './useLogOut'
import { useForgotPassword } from './useForgotPassword'
import { useConfirmForgotPassword } from './useConfirmForgotPassword'
import { useSignUp } from './useSignUp'
import { useConfirmSignUp } from './useConfirmSignUp'
import { useResendSignUpCode } from './useResendSignUpCode'
import type { LogInInput, AuthTokenPayload } from '@/generated/graphql'
import { useTimer } from '@/hooks/useTimer'
import { okAsync } from 'neverthrow'
import { useMe } from '@/features/users'

const useAuth = () => {
  const { start, clear } = useTimer()

  const payload = useRef<AuthTokenPayload | undefined>(null)
  const hasInitializedInner = useRef(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [hasInitialized, setHasInitialized] = useState(false)

  const { refresh: refreshInner } = useRefresh()
  const { logIn: logInInner } = useLogIn()
  const { logOut: logOutInner } = useLogOut()
  const { signUp } = useSignUp()
  const { confirmSignUp } = useConfirmSignUp()
  const { forgotPassword } = useForgotPassword()
  const { confirmForgotPassword } = useConfirmForgotPassword()
  const { resendSignUpCode } = useResendSignUpCode()

  const { me, load: loadMe, refresh: refreshMe } = useMe()

  const getAccessTokenExpiration = () => {
    const data = payload.current
    if (data?.expiresIn == null) return

    const expMs = data.expiresIn * 1000
    const msToRefresh = expMs - Date.now() - 60 * 1000 // 1min before

    return msToRefresh
  }

  const applyNewPayload = (newPayload?: AuthTokenPayload | null) => {
    payload.current = newPayload

    setClientAcessToken(newPayload?.accessToken)
  }

  const refresh = () => {
    return refreshInner()
      .andTee(payload => {
        applyNewPayload(payload)

        const delay = getAccessTokenExpiration()

        if (delay != null) {
          start(
            () => {
              void refresh()
            },
            delay
          )
        }
      })
  }

  const logIn = (input: LogInInput) => {
    return logInInner(input)
      .andThen(payload => {
        applyNewPayload(payload)

        const delay = getAccessTokenExpiration()

        if (delay != null) {
          start(
            () => {
              void refresh()
            },
            delay
          )
        }

        return refreshMe()
      })
      .andTee(() => {
        setIsAuthenticated(true)
      })
  }

  const logOut = () => {
    return logOutInner()
      .andTee(cleanAuth)
  }

  const initialize = () => {
    if (hasInitializedInner.current) {
      return okAsync(payload.current)
    }

    hasInitializedInner.current = true

    return refresh()
      .andThen(() => loadMe())
      .andTee(() => {
        setHasInitialized(true)
        setIsAuthenticated(payload.current != null)
      })
      .orTee(() => {
        setHasInitialized(true)
      })
  }

  const cleanAuth = useCallback(() => {
    payload.current = null
    setIsAuthenticated(false)
    setClientAcessToken(undefined)
    clear()
  }, [clear])

  useEffect(() => cleanAuth, [cleanAuth])

  return {
    me,
    payload,
    isAuthenticated,
    hasInitialized,

    initialize,
    refreshMe,

    logIn,
    logOut,

    signUp,
    confirmSignUp,
    resendSignUpCode,

    forgotPassword,
    confirmForgotPassword
  }
}

export default useAuth
