import React from 'react'
import community from '@/assets/community.svg'
import home from '@/assets/home.svg'
import profile from '@/assets/profile.svg'
import search from '@/assets/search.svg'
import dislike from '@/assets/dislike.svg'
import like from '@/assets/like.svg'
import { ReactSVG } from 'react-svg'

export interface IconProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: number | undefined
}

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

export const DislikeIcon = (props: IconProps) => {
  const { size = 16 } = props
  return (
    <div {...props}>
      <ReactSVG
        src={dislike}
        beforeInjection={(svg) => {
          svg.setAttribute('style', `width: ${size}px; height: ${size}px`)
        }}
      />
    </div>
  )
}

export const LikeIcon = (props: IconProps) => {
  const { size = 16, ...rest } = props
  return (
    <div
      {...rest}
    >
      <ReactSVG
        src={like}
        beforeInjection={(svg) => {
          svg.setAttribute('style', `width: ${size}px; height: ${size}px; overflow-visible`)
        }}
      />
    </div>
  )
}
