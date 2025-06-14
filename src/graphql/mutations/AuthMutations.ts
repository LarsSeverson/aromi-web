import { gql } from '@/generated'

export const REFRESH_MUTATION = gql(/* GraphQL */`
  mutation Refresh {
    refresh {
      ...AuthPayloadBase 
    }
  }
`)

export const LOG_IN_MUTATION = gql(/* GraphQL */`
  mutation LogIn(
    $email: String!
    $password: String!
  ) {
    logIn(email: $email, password: $password) {
      ...AuthPayloadBase
    }
  }
`)

export const LOG_OUT_MUTATION = gql(/* GraphQL */`
  mutation LogOut {
    logOut
  }
`)

export const SIGN_UP_MUTATION = gql(/* GraphQL */`
  mutation SignUp(
    $email: String!
    $password: String!
  ) {
    signUp(email: $email, password: $password) {
      ...DeliveryResultBase
    }
  }
`)

export const CONFIRM_SIGN_UP_MUTATION = gql(/* GraphQL */`
  mutation ConfirmSignUp(
    $email: String!
    $confirmationCode: String!
  ) {
    confirmSignUp(
      email: $email
      confirmationCode: $confirmationCode
    ) {
      ...UserSummary
    }
  }
`)

export const RESEND_SIGN_UP_CONFIRMATION_MUTATION = gql(/* GraphQL */`
  mutation ResendSignUpConfirmationCode(
    $email: String!
  ) {
    resendSignUpConfirmationCode(email: $email) {
      ...DeliveryResultBase
    }
  }
`)

export const FORGOT_PASSWORD_MUTATION = gql(/* GraphQL */`
  mutation ForgotPassword(
    $email: String!
  ) {
    forgotPassword(email: $email) {
      ...DeliveryResultBase
    }
  }
`)

export const CONFIRM_FORGOT_PASSWORD_MUTATION = gql(/* GraphQL */`
  mutation ConfirmForgotPassword(
    $email: String!
    $confirmationCode: String!
    $newPassword: String!
  ) {
    confirmForgotPassword(email: $email, confirmationCode: $confirmationCode, newPassword: $newPassword) {
      complete
    }
  }
`)
