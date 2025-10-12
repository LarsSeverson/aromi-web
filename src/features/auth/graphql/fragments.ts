import { gql } from '@/generated'

export const ALL_AUTH_TOKEN_PAYLOAD_FRAGMENT = gql(/* GraphQL */`
  fragment AllAuthTokenPayload on AuthTokenPayload {
    idToken
    accessToken
    expiresIn
  }
`)

export const ALL_AUTH_CODE_DELIVERY_DETAILS_FRAGMENT = gql(/* GraphQL */`
  fragment AllAuthCodeDeliveryDetails on AuthCodeDeliveryDetails {
    method
    attribute
    destination
  }
`)

export const ALL_AUTH_DELIVERY_RESULT_FRAGMENT = gql(/* GraphQL */`
  fragment AllAuthDeliveryResult on AuthDeliveryResult {
    isComplete 
    delivery {
      ...AllAuthCodeDeliveryDetails
    }
  }
`)