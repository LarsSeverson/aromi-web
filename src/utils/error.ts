import { CombinedGraphQLErrors, CombinedProtocolErrors, ServerError, ServerParseError } from '@apollo/client'
import { errAsync, okAsync } from 'neverthrow'

export interface ServerErrorInfo {
  message: string
  code: string
  status: number
}

export const getApolloErrorMessage = (error: unknown) => {
  if (CombinedGraphQLErrors.is(error)) {
    return error.errors.map(e => e.message).join(', ')
  }

  if (CombinedProtocolErrors.is(error)) {
    return error.errors.map(e => e.message).join(', ')
  }

  if (ServerError.is(error) || ServerParseError.is(error)) {
    return error.message
  }

  if (error instanceof Error) {
    return error.message
  }

  return 'Something went wrong'
}

export const getServerErrorInfo = (
  error: unknown
): ServerErrorInfo => {
  if (error == null) return { message: 'Unknown error', code: 'UNKNOWN', status: 500 }

  if (CombinedGraphQLErrors.is(error)) {
    const first = error.errors.at(0)
    return {
      message: first?.message ?? 'Unknown server error',
      code: (first?.extensions?.code as string) ?? 'UNKNOWN',
      status: (first?.extensions?.status as number) ?? 500
    }
  }

  if (error instanceof Error) {
    return { message: error.message, code: 'UNKNOWN', status: 500 }
  }

  return { message: 'Something went wrong', code: 'UNKNOWN', status: 500 }
}

export const checkNullFetchResponse = <T>(res: T) => {
  if (res == null) {
    return errAsync(
      getServerErrorInfo(
        new Error('Something went wrong')
      )
    )
  }

  return okAsync(res)
}

export const noRes = okAsync(undefined)
