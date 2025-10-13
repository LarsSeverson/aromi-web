import React from 'react'
import type { SvgProps } from './Svg'

const EmptyAvatarSvg = (props: SvgProps) => {
  const { width = '100%', height = '100%', color } = props

  return (
    <svg
      width={width}
      height={height}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 32 32'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12 11C12 9.93914 12.4214 8.92172 13.1716 8.17158C13.9217 7.42142 14.9391 7 16 7C17.0609 7 18.0783 7.42142 18.8284 8.17158C19.5786 8.92172 20 9.93914 20 11C20 12.0609 19.5786 13.0783 18.8284 13.8284C18.0783 14.5786 17.0609 15 16 15C14.9391 15 13.9217 14.5786 13.1716 13.8284C12.4214 13.0783 12 12.0609 12 11ZM12 17C10.6739 17 9.40215 17.5268 8.46446 18.4645C7.52678 19.4022 7 20.6739 7 22C7 22.7957 7.31607 23.5587 7.87868 24.1214C8.44129 24.6839 9.20435 25 10 25H22C22.7957 25 23.5587 24.6839 24.1214 24.1214C24.6839 23.5587 25 22.7957 25 22C25 20.6739 24.4732 19.4022 23.5355 18.4645C22.5978 17.5268 21.3261 17 20 17H12Z'
        fill={color}
      />
    </svg>
  )
}

export default EmptyAvatarSvg
