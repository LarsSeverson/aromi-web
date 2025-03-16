import { type AuthError } from 'aws-amplify/auth'

export enum AuthErrorCode {
  USERNAME_EXISTS = 'USERNAME_EXISTS',
  INVALID_PASSWORD = 'INVALID_PASSWORD',
  INVALID_PARAMETER = 'INVALID_PARAMETER',
  LIMIT_EXCEEDED = 'LIMIT_EXCEEDED',
  TOO_MANY_REQUESTS = 'TOO_MANY_REQUESTS',
  SERVICE_EXCEPTION = 'SERVICE_EXCEPTION',
  UNKNOWN_ERROR = 'UNKNOWN_ERROR',
  INVALID_EMAIL = 'INVALID_EMAIL',

  INVALID_CONFIRMATION_CODE = 'INVALID_CONFIRMATION_CODE',
  EMPTY_CONFIRMATION_CODE = 'EMPTY_CONFIRMATION_CODE',
  AUTH_TOKEN_CONFIG_INVALID = 'AUTH_TOKEN_CONFIG_INVALID',

  USER_NOT_FOUND = 'USER_NOT_FOUND',
  CODE_DELIVERY_FAILURE = 'CODE_DELIVERY_FAILURE',
  RESEND_LIMIT_EXCEEDED = 'RESEND_LIMIT_EXCEEDED',

  NOT_AUTHORIZED = 'NOT_AUTHORIZED',
  SIGN_UP_INCOMPLETE = 'SIGN_UP_INCOMPLETE'
}

export class AromiAuthError extends Error {
  public code: AuthErrorCode

  constructor (message: string, code: AuthErrorCode) {
    super(message)
    this.name = 'AuthError'
    this.code = code
  }
}

export const toSignUpError = (error: AuthError): AromiAuthError => {
  switch (error.name) {
    case 'UsernameExistsException':
      return new AromiAuthError('This email is already registered. Please log in to continue.', AuthErrorCode.USERNAME_EXISTS)
    case 'InvalidPasswordException':
      return new AromiAuthError('Password does not meet the required criteria.', AuthErrorCode.INVALID_PASSWORD)
    case 'LimitExceededException':
      return new AromiAuthError('Request limit exceeded. Please try again later.', AuthErrorCode.LIMIT_EXCEEDED)
    case 'TooManyRequestsException':
      return new AromiAuthError('Too many requests. Please slow down and try again.', AuthErrorCode.TOO_MANY_REQUESTS)
    case 'ServiceException':
      return new AromiAuthError('Internal service error. Please try again later.', AuthErrorCode.SERVICE_EXCEPTION)
    default:
      console.error(error)
      return new AromiAuthError(error.message ?? 'Something went wrong. Please try again later.', AuthErrorCode.UNKNOWN_ERROR)
  }
}

export const toConfirmSignUpError = (error: AuthError): AromiAuthError => {
  switch (error.name) {
    case 'CodeMismatchException':
      return new AromiAuthError(
        'The confirmation code is incorrect or has expired. Please try again.',
        AuthErrorCode.INVALID_CONFIRMATION_CODE
      )
    case 'ExpiredCodeException':
      return new AromiAuthError(
        'The confirmation code has expired. Please request a new one.',
        AuthErrorCode.INVALID_CONFIRMATION_CODE
      )
    case 'InvalidParameterException':
      return new AromiAuthError(
        'Invalid parameters provided.',
        AuthErrorCode.INVALID_PARAMETER
      )
    case 'AuthTokenConfigException':
      return new AromiAuthError(
        'Invalid token provider configuration.',
        AuthErrorCode.AUTH_TOKEN_CONFIG_INVALID
      )
    default:
      console.error(error)
      return new AromiAuthError(
        error.message ?? 'Something went wrong. Please try again later.',
        AuthErrorCode.UNKNOWN_ERROR
      )
  }
}

export const toResendSignUpError = (error: AuthError): AromiAuthError => {
  switch (error.name) {
    case 'UserNotFoundException':
      return new AromiAuthError(
        'No account found for the provided username.',
        AuthErrorCode.USER_NOT_FOUND
      )
    case 'CodeDeliveryFailureException':
      return new AromiAuthError(
        'Failed to deliver the confirmation code. Please try again later.',
        AuthErrorCode.CODE_DELIVERY_FAILURE
      )
    case 'LimitExceededException':
      return new AromiAuthError(
        'Resend limit exceeded. Please wait before trying again.',
        AuthErrorCode.RESEND_LIMIT_EXCEEDED
      )
    case 'InvalidParameterException':
      return new AromiAuthError(
        'Invalid parameters provided.',
        AuthErrorCode.INVALID_PARAMETER
      )
    case 'AuthTokenConfigException':
      return new AromiAuthError(
        'Invalid token provider configuration.',
        AuthErrorCode.AUTH_TOKEN_CONFIG_INVALID
      )
    default:
      console.log(error)
      return new AromiAuthError(
        error.message ?? 'Something went wrong. Please try again later.',
        AuthErrorCode.UNKNOWN_ERROR
      )
  }
}

export const toLogInError = (error: AuthError): AromiAuthError => {
  switch (error.name) {
    case 'UserNotFoundException':
    case 'NotAuthorizedException':
      return new AromiAuthError(
        'Incorrect email or password.',
        AuthErrorCode.USER_NOT_FOUND
      )
    case 'UserNotConfirmedException':
      return new AromiAuthError(
        'User account is not confirmed. Please confirm your account.',
        AuthErrorCode.USER_NOT_FOUND
      )
    default:
      console.error(error)
      return new AromiAuthError(
        error.message ?? 'Something went wrong. Please try again later.',
        AuthErrorCode.UNKNOWN_ERROR
      )
  }
}

export const toGetUserInfoError = (error: AuthError): AromiAuthError => {
  switch (error.name) {
    case 'InitiateAuthException':
      return new AromiAuthError(
        'Please log in again.',
        AuthErrorCode.SERVICE_EXCEPTION
      )
    case 'AuthTokenConfigException':
      return new AromiAuthError(
        'Invalid token provider configuration.',
        AuthErrorCode.AUTH_TOKEN_CONFIG_INVALID
      )
    case 'UserUnAuthenticatedException':
      return new AromiAuthError(
        'You are not logged in.',
        AuthErrorCode.NOT_AUTHORIZED
      )
    default:
      console.error(error)
      return new AromiAuthError(
        error.message ?? 'Something went wrong. Please try again later.',
        AuthErrorCode.UNKNOWN_ERROR
      )
  }
}

export const toResetPasswordError = (error: AuthError): AromiAuthError => {
  switch (error.name) {
    case 'UserNotFoundException':
      return new AromiAuthError(
        'No account found for the provided email.',
        AuthErrorCode.USER_NOT_FOUND
      )
    case 'LimitExceededException':
      return new AromiAuthError(
        'Resend limit exceeded. Please wait before trying again.',
        AuthErrorCode.LIMIT_EXCEEDED
      )
    default:
      console.error(error)
      return new AromiAuthError(
        error.message ?? 'Something went wrong. Please try again later.',
        AuthErrorCode.UNKNOWN_ERROR
      )
  }
}

export const toConfirmResetPasswordError = (error: AuthError): AromiAuthError => {
  switch (error.name) {
    case 'CodeMismatchException':
      return new AromiAuthError(
        'The confirmation code is incorrect. Please try again.',
        AuthErrorCode.INVALID_CONFIRMATION_CODE
      )
    case 'ExpiredCodeException':
      return new AromiAuthError(
        'The confirmation code has expired. Please request a new one.',
        AuthErrorCode.INVALID_CONFIRMATION_CODE
      )
    case 'InvalidParameterException':
      if (error.message.includes('confirmation code')) {
        return new AromiAuthError(
          'Confirmation code cannot be empty.',
          AuthErrorCode.EMPTY_CONFIRMATION_CODE
        )
      } else if (error.message.includes('password')) {
        return new AromiAuthError(
          'Password cannot be empty.',
          AuthErrorCode.INVALID_PASSWORD
        )
      } else if (error.message.includes('username')) {
        return new AromiAuthError(
          'Email cannot be empty.',
          AuthErrorCode.USER_NOT_FOUND
        )
      } else {
        return new AromiAuthError(
          'Invalid parameters provided.',
          AuthErrorCode.INVALID_PARAMETER
        )
      }
    case 'LimitExceededException':
      return new AromiAuthError(
        'Attempt limit exceeded. Please try again later.',
        AuthErrorCode.LIMIT_EXCEEDED
      )
    default:
      console.error(error)
      return new AromiAuthError(
        error.message ?? 'Something went wrong. Please try again later.',
        AuthErrorCode.UNKNOWN_ERROR
      )
  }
}

export const toSocialSignInError = (error: AuthError): AromiAuthError => {
  console.error(error)
  return new AromiAuthError(
    'Something went wrong. Please try again later.',
    AuthErrorCode.SERVICE_EXCEPTION
  )
}
