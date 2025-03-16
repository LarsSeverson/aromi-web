import React from 'react'
import community from '@/assets/community.svg'
import home from '@/assets/home.svg'
import { ReactSVG } from 'react-svg'

import profile from '@/assets/profile.svg'

import search from '@/assets/search.svg'

export interface IconProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CommunityIcon = (props: IconProps) => {
  return (
    <div {...props}>
      <ReactSVG
        src={community}
        beforeInjection={(svg) => {
          svg.setAttribute('style', 'width: 20px; height: 20px')
        }}
      />
    </div>
  )
}

export const HomeIcon = (props: IconProps) => {
  return (
    <div {...props}>
      <ReactSVG
        src={home}
        beforeInjection={(svg) => {
          svg.setAttribute('style', 'width: 20px; height: 20px')
        }}
      />
    </div>
  )
}

export const ProfileIcon = (props: IconProps) => {
  return (
    <div {...props}>
      <ReactSVG
        src={profile}
        beforeInjection={(svg) => {
          svg.setAttribute('style', 'width: 20px; height: 20px')
        }}
      />
    </div>
  )
}

export const SearchIcon = (props: IconProps) => {
  return (
    <div {...props}>
      <ReactSVG
        src={search}
        beforeInjection={(svg) => {
          svg.setAttribute('style', 'width: 20px; height: 20px')
        }}
      />
    </div>
  )
}
