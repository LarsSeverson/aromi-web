import { gql } from '@/generated'

export const AuthPayloadFragment = gql(/* GraphQL */`
  fragment AuthPayloadBase on AuthPayload {
    idToken
    accessToken
    expiresIn
  }
`)

export const AuthDeliveryResultFragment = gql(/* GraphQL */`
  fragment DeliveryResultBase on DeliveryResult {
    complete
    delivery {
      attribute
      destination
      method
    }
  }
`)
