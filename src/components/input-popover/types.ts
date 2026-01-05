import type React from 'react'

export interface InputPopoverKeyDownEvent<T = unknown> extends React.KeyboardEvent<HTMLInputElement> {
  item: T | null
}