import React from 'react'
import logo from '@/assets/aromi.svg'
import community from '@/assets/community.svg'
import home from '@/assets/home.svg'
import profile from '@/assets/profile.svg'
import search from '@/assets/search.svg'
import dislike from '@/assets/dislike.svg'
import dislikeFill from '@/assets/dislike-fill.svg'
import like from '@/assets/like.svg'
import likeFill from '@/assets/like-fill.svg'
import { ReactSVG } from 'react-svg'

export interface IconProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: number | undefined
  color?: string | undefined
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
  const { size = 18, color, ...rest } = props
  return (
    <div
      {...rest}
      style={{ color: color ?? '' }}
    >
      <ReactSVG
        src={dislike}
        beforeInjection={(svg) => {
          svg.setAttribute('style', `width: ${size}px; height: ${size}px`)
          svg.querySelectorAll('path').forEach((path) => {
            path.setAttribute('fill', 'currentColor')
          })
        }}
      />
    </div>
  )
}

export const FillDislikeIcon = (props: IconProps) => {
  const { size = 18, color, ...rest } = props
  return (
    <div
      {...rest}
      style={{ color: color ?? '' }}
    >
      <ReactSVG
        src={dislikeFill}
        beforeInjection={(svg) => {
          svg.setAttribute('style', `width: ${size}px; height: ${size}px`)
          svg.querySelectorAll('path').forEach((path) => {
            path.setAttribute('fill', 'currentColor')
          })
        }}
      />
    </div>
  )
}

export const LikeIcon = (props: IconProps) => {
  const { size = 18, color, ...rest } = props
  return (
    <div
      {...rest}
      style={{ color: color ?? '' }}
    >
      <ReactSVG
        src={like}
        beforeInjection={(svg) => {
          svg.setAttribute('style', `width: ${size}px; height: ${size}px;`)
          svg.querySelectorAll('path').forEach((path) => {
            path.setAttribute('fill', 'currentColor')
          })
        }}
      />
    </div>
  )
}

export const FillLikeIcon = (props: IconProps) => {
  const { size = 18, color, ...rest } = props
  return (
    <div
      {...rest}
      style={{ color: color ?? '' }}
    >
      <ReactSVG
        src={likeFill}
        beforeInjection={(svg) => {
          svg.setAttribute('style', `width: ${size}px; height: ${size}px;`)
          svg.querySelectorAll('path').forEach((path) => {
            path.setAttribute('fill', 'currentColor')
          })
        }}
      />
    </div>
  )
}

export const Logo = (props: IconProps) => {
  const { size = 24, ...rest } = props

  return (
    <div
      {...rest}
    >
      <ReactSVG
        src={logo}
        beforeInjection={(svg) => {
          svg.setAttribute('style', `width: ${size}px; height: ${size}px;`)
        }}
      />
    </div>
  )
}
