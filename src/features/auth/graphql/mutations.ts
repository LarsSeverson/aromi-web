import { gql } from '@/generated'

export const REFRESH_MUTATION = gql(/* GraphQL */ `
  mutation Refresh {
    refresh {
      ...AllAuthTokenPayload
    }
  }
`)

export const LOG_IN_MUTATION = gql(/* GraphQL */ `
  mutation LogIn(
    $input: LogInInput!
  ) {
    logIn(input: $input) { 
      ...AllAuthTokenPayload
    }
  }
`)
export const LOG_OUT_MUTATION = gql(/* GraphQL */ `
  mutation LogOut {
    logOut
  }
`)

export const SIGN_UP_MUTATION = gql(/* GraphQL */ `
  mutation SignUp(
    $input: SignUpInput!
  ) {
    signUp(input: $input) {
      ...AllAuthDeliveryResult
    }
  }
`)

export const CONFIRM_SIGN_UP_MUTATION = gql(/* GraphQL */ `
  mutation ConfirmSignUp(
    $input: ConfirmSignUpInput!
  ) {
    confirmSignUp(input: $input) {
      ...Me
    }
  }
`)

export const RESEND_SIGN_UP_CODE_MUTATION = gql(/* GraphQL */ `
  mutation ResendSignUpCode(
    $input: ResendSignUpCodeInput!
  ) {
    resendSignUpCode(input: $input) {
      ...AllAuthDeliveryResult
    }
  }
`)

export const FORGOT_PASSWORD_MUTATION = gql(/* GraphQL */ `
  mutation ForgotPassword(
    $input: ForgotPasswordInput!
  ) {
    forgotPassword(input: $input) {
      ...AllAuthDeliveryResult
    }
  }
`)

export const CONFIRM_FORGOT_PASSWORD_MUTATION = gql(/* GraphQL */ `
  mutation ConfirmForgotPassword(
    $input: ConfirmForgotPasswordInput!
  ) {
    confirmForgotPassword(input: $input)
  }
`)

export const CHANGE_PASSWORD_MUTATION = gql(/* GraphQL */ `
  mutation ChangePassword(
    $input: ChangePasswordInput!
  ) {
    changePassword(input: $input)
  }
`)