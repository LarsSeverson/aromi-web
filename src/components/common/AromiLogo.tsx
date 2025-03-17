import React from 'react'
import logo from '@/assets/aromi.svg'
import { ReactSVG } from 'react-svg'

export interface AromiLogoProps {
  size?: number | undefined
}

const AromiLogo = (props: AromiLogoProps) => {
  const { size = 24 } = props

  return (
    <ReactSVG
      src={logo}
      beforeInjection={(svg) => {
        svg.setAttribute('style', `width: ${size}px; height: ${size}px`)
      }}
    />
  )
}

export default AromiLogo
