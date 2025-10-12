import type { router } from '@/main'

declare module '@tanstack/react-router' {
  export interface Register {
    router: typeof router
  }
}
