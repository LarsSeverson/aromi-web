import { gql } from '@/generated'

export const AuthDeliveryResultFragment = gql(/* GraphQL */ `
  fragment DeliveryResultBase on DeliveryResult {
    complete
    delivery {
      attribute
      destination
      method
    }
  }
`)

export const AuthPayloadFragment = gql(/* GraphQL */ `
  fragment AuthPayloadBase on AuthPayload {
    idToken
    accessToken
    expiresIn
  }
`)
