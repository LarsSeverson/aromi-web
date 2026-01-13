import type React from 'react'

export interface TreeItem {
  id: string
  label: string | React.ReactNode

  children?: TreeItem[]
}