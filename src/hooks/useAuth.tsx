import { type AuthError, confirmResetPassword, confirmSignUp, getCurrentUser, resendSignUpCode, resetPassword, signIn, signInWithRedirect, signOut, signUp } from 'aws-amplify/auth'
import { useCallback, useState } from 'react'
import { AromiAuthError, AuthErrorCode, toConfirmSignUpError, toResendSignUpError, toLogInError, toSignUpError, toGetUserInfoError, toConfirmResetPasswordError, toResetPasswordError, toSocialSignInError } from '../common/auth-errors'
import { useClientContext } from '../contexts/ClientContext'
import { type User } from '../generated/graphql'
import useUpsertUser from './useUpsertUser'

export enum AuthState {
  UNAUTHENTICATED = 'UNAUTHENTICATED',
  AUTHENTICATED = 'AUTHENTICATED'
}

export interface AuthOutput<T = null> {
  success: boolean
  error: AromiAuthError | null
  data?: T | undefined
}

export interface AuthUserInfo {
  user?: Omit<User, 'likes' | 'collections' | 'reviews'> | null
  state: AuthState
}

export interface UseAuthReturn {
  userInfo: AuthUserInfo

  userGetInfo: () => Promise<AuthOutput<AuthUserInfo>>
  socialSignIn: (provider: 'Google' | 'Apple') => Promise<AuthOutput>
  userSignUp: (email: string, password: string) => Promise<AuthOutput>
  userConfirmSignUp: (email: string, code: string) => Promise<AuthOutput>
  userResendConfirmCode: (email: string) => Promise<AuthOutput>
  userLogIn: (email: string, password: string) => Promise<AuthOutput>
  userSignOut: () => Promise<AuthOutput>
  sendResetPasswordCode: (email: string) => Promise<AuthOutput>
  userResetPassword: (email: string, password: string, code: string) => Promise<AuthOutput>

  validateEmail: (email: string) => boolean
  validatePassword: (password: string) => boolean
  validateConfirmPassword: (p1: string, p2: string) => boolean
}

const useAuth = (): UseAuthReturn => {
  const { refresh } = useClientContext()

  const { upsertUser } = useUpsertUser()

  const [userInfo, setUserInfo] = useState<AuthUserInfo>({ user: null, state: AuthState.UNAUTHENTICATED })

  const userGetInfo = useCallback(async (): Promise<AuthOutput<AuthUserInfo>> => {
    const err = new AromiAuthError('Something went wrong getting this user', AuthErrorCode.USER_NOT_FOUND)

    try {
      const { userId, signInDetails } = await getCurrentUser()
      await refresh()

      const email = signInDetails?.loginId
      if (email === undefined) return { success: false, error: err }

      const { data } = await upsertUser({ variables: { email, cognitoId: userId } })
      const user = data?.upsertUser

      if (user === undefined || user === null) return { success: false, error: err }

      const newUserInfo = { user, state: AuthState.AUTHENTICATED }

      setUserInfo(newUserInfo)

      return { success: true, error: null, data: newUserInfo }
    } catch (error: unknown) {
      const authError = toGetUserInfoError(error as AuthError)

      return { success: false, error: authError }
    }
  }, [refresh, upsertUser])

  const socialSignIn = useCallback(async (provider: 'Google' | 'Apple'): Promise<AuthOutput> => {
    try {
      await signInWithRedirect({ provider })

      const { success, error } = await userGetInfo()

      return { success, error }
    } catch (error: unknown) {
      const authError = toSocialSignInError(error as AuthError)

      return { success: false, error: authError }
    }
  }, [userGetInfo])

  const userSignUp = useCallback(async (email: string, password: string): Promise<AuthOutput> => {
    try {
      await signUp({
        username: email,
        password,
        options: {
          userAttributes: {
            email
          },
          autoSignIn: true
        }
      })

      void userGetInfo()

      return { success: true, error: null }
    } catch (error: unknown) {
      const authError = toSignUpError(error as AuthError)

      return { success: false, error: authError }
    }
  }, [userGetInfo])

  const userConfirmSignUp = useCallback(async (email: string, confirmationCode: string): Promise<AuthOutput> => {
    try {
      await confirmSignUp({
        username: email,
        confirmationCode
      })

      return { success: true, error: null }
    } catch (error: unknown) {
      const authError = toConfirmSignUpError(error as AuthError)

      return { success: false, error: authError }
    }
  }, [])

  const userResendConfirmCode = useCallback(async (email: string): Promise<AuthOutput> => {
    try {
      await resendSignUpCode({
        username: email
      })

      return { success: true, error: null }
    } catch (error: unknown) {
      const authError = toResendSignUpError(error as AuthError)

      return { success: false, error: authError }
    }
  }, [])

  const userLogIn = useCallback(async (email: string, password: string): Promise<AuthOutput> => {
    try {
      const { isSignedIn, nextStep } = await signIn({
        username: email,
        password
      })

      await userGetInfo()

      if (nextStep.signInStep === 'CONFIRM_SIGN_UP') {
        const authError = new AromiAuthError("You haven't finished signing up yet.", AuthErrorCode.SIGN_UP_INCOMPLETE)
        return { success: false, error: authError }
      }

      return { success: isSignedIn, error: null }
    } catch (error: unknown) {
      const authError = toLogInError(error as AuthError)

      return { success: false, error: authError }
    }
  }, [userGetInfo])

  const userSignOut = useCallback(async (): Promise<AuthOutput> => {
    try {
      await signOut()

      setUserInfo({ user: null, state: AuthState.UNAUTHENTICATED })

      return { success: true, error: null }
    } catch (error) {
      const authError = new AromiAuthError('Something went wrong signing you out. Please try again.', AuthErrorCode.UNKNOWN_ERROR)

      return { success: false, error: authError }
    }
  }, [])

  const validateEmail = useCallback((email: string): boolean => {
    const emailRegex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
    const valid = emailRegex.test(email.toLowerCase())

    return valid
  }, [])

  const validatePassword = useCallback((password: string): boolean => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/
    const valid = passwordRegex.test(password)

    return valid
  }, [])

  const validateConfirmPassword = useCallback((p1: string, p2: string): boolean => {
    return p1 === p2
  }, [])

  const sendResetPasswordCode = useCallback(async (email: string) => {
    try {
      await resetPassword({ username: email })

      return { success: true, error: null }
    } catch (error: unknown) {
      const authError = toResetPasswordError(error as AuthError)

      return { success: false, error: authError }
    }
  }, [])

  const userResetPassword = useCallback(async (email: string, password: string, code: string): Promise<AuthOutput> => {
    try {
      await confirmResetPassword({
        username: email,
        newPassword: password,
        confirmationCode: code
      })

      return { success: true, error: null }
    } catch (error: unknown) {
      const authError = toConfirmResetPasswordError(error as AuthError)

      return { success: false, error: authError }
    }
  }, [])

  return {
    userInfo,

    userGetInfo,
    socialSignIn,
    userSignUp,
    userConfirmSignUp,
    userResendConfirmCode,
    userLogIn,
    userSignOut,
    sendResetPasswordCode,
    userResetPassword,

    validateEmail,
    validatePassword,
    validateConfirmPassword
  }
}

export default useAuth
