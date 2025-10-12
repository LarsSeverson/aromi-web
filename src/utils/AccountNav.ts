export interface AccountNavSection {
  heading: string
  href: string
}

export const ACCOUNT_NAV: AccountNavSection[] = [
  {
    heading: 'Edit profile',
    href: '/user/settings/edit'
  },
  {
    heading: 'Payments',
    href: '/user/settings/payments'
  }
]
