import React from 'react'

export interface ProfileSvgProps extends React.ComponentProps<'svg'> {}

const ProfileSvg = (props: ProfileSvgProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_604_8)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.88889 7.11111C8.88889 5.22513 9.63809 3.41639 10.9717 2.0828C12.3053 0.749204 14.114 0 16 0C17.886 0 19.6947 0.749204 21.0283 2.0828C22.3619 3.41639 23.1111 5.22513 23.1111 7.11111C23.1111 8.9971 22.3619 10.8058 21.0283 12.1394C19.6947 13.473 17.886 14.2222 16 14.2222C14.114 14.2222 12.3053 13.473 10.9717 12.1394C9.63809 10.8058 8.88889 8.9971 8.88889 7.11111ZM8.88889 17.7778C6.53141 17.7778 4.27049 18.7143 2.6035 20.3813C0.936505 22.0483 0 24.3092 0 26.6667C0 28.0812 0.561903 29.4377 1.5621 30.4379C2.56229 31.4381 3.91885 32 5.33333 32H26.6667C28.0812 32 29.4377 31.4381 30.4379 30.4379C31.4381 29.4377 32 28.0812 32 26.6667C32 24.3092 31.0635 22.0483 29.3965 20.3813C27.7295 18.7143 25.4686 17.7778 23.1111 17.7778H8.88889Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_604_8">
          <rect
            width="32"
            height="32"
            fill="white"
          />
        </clipPath>
      </defs>
    </svg>
  )
}

export default ProfileSvg
