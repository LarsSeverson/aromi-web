export const INVALID_ID = -1

export type NonNullableVariables<T> = T extends object
  ? { [K in keyof T]-?: NonNullableVariables<NonNullable<T[K]>> }
  : T
