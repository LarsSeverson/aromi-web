import React from 'react'
import logo from '@/assets/aromi.svg'
import { ReactSVG } from 'react-svg'

const AromiLogo = () => {
  return (
    <ReactSVG
      src={logo}
      beforeInjection={(svg) => {
        svg.setAttribute('style', 'width: 24px; height: 24px')
      }}
    />
  )
}

export default AromiLogo
