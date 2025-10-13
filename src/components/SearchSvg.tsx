import React from 'react'

export interface SearchSvgProps extends React.ComponentProps<'svg'> {}

const SearchSvg = (props: SearchSvgProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_510_7)">
        <path
          d="M0 13.2047C0 20.5 5.78818 26.4101 12.9264 26.4101C15.2779 26.4138 17.5855 25.759 19.5984 24.5169L25.8656 30.9192L25.8874 30.897C26.5277 31.5803 27.4366 32 28.4638 32C30.4484 32.0004 32.0004 30.3853 32 28.3599C31.9996 27.3254 31.5944 26.4002 30.9352 25.74L30.9509 25.7239L24.4841 19.118C25.3855 17.2829 25.8542 15.2578 25.8527 13.2047C25.8527 5.90886 20.0653 -6.9513e-07 12.9264 -6.9513e-07C5.78818 -6.9513e-07 0 5.90927 0 13.2047ZM20.7698 13.1246C20.7698 17.6845 17.1529 21.3782 12.6909 21.3782C8.22964 21.3782 4.61188 17.6845 4.61188 13.1246C4.61188 8.56472 8.22924 4.87184 12.6909 4.87184C17.1529 4.87143 20.7698 8.56472 20.7698 13.1246Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_510_7">
          <rect
            width="32"
            height="32"
            fill="white"
            transform="matrix(0 -1 1 0 0 32)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}

export default SearchSvg
