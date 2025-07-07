import React from 'react'
import logo from '@/assets/aromi-logo.svg'
import { ReactSVG } from 'react-svg'

const AromiLogoText = () => {
  return (
    <ReactSVG
      src={logo}
      beforeInjection={(svg) => {
        svg.setAttribute('style', 'height: 20px')
      }}
    />
  )
}

export default AromiLogoText
