import { ResultAsync } from 'neverthrow'

export const fakeTask = (label: string, ms: number, fail?: boolean) =>
  ResultAsync
    .fromPromise(
      new Promise<string>(
        (resolve, reject) => {
          setTimeout(
            () => {
              fail != null ? reject(new Error('fail ' + label)) : resolve(label)
            },
            ms
          )
        }),
      e => e as Error
    )
