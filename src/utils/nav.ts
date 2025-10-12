export interface NavItem {
  label: string
  href: string
  badge?: string
  active?: (
    currentPath: string,
    myId?: string
  ) => boolean
}

export interface NavSection {
  heading: string
  items: NavItem[]
}

export const NAV: NavSection[] = [
  {
    heading: 'Browse',
    items: [
      {
        label: 'All',
        href: '/browse'
      },
      {
        label: 'Categories',
        href: '/categories'
      }
    ]
  },
  {
    heading: 'Library',
    items: [
      {
        label: 'Owned',
        href: '/owned'
      },
      {
        label: 'Published',
        href: '/published'
      },
      {
        label: 'Drafts',
        href: '/drafts'
      }
    ]
  },
  {
    heading: 'Profile',
    items: [
      {
        label: 'Your profile',
        href: '/users/',
        active: (currentPath, myId) =>
          myId != null && currentPath === `/user/${myId}`
      },
      {
        label: 'Settings',
        href: '/users/settings',
        active: (currentPath) => currentPath.startsWith('/user/settings')
      }
    ]
  }
]
