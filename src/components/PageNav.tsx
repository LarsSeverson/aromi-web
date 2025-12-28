import React from 'react'
import BouncyButton from './BouncyButton'
import { TiArrowLeftThick, TiArrowRightThick } from 'react-icons/ti'
import clsx from 'clsx'

export interface PageNavProps extends React.HTMLAttributes<HTMLElement> {
  totalPages: number
  curPage: number
  pagesShown?: number
  onPageChange?: (page: number) => void
}

export const PageNav = (props: PageNavProps) => {
  const {
    totalPages,
    curPage,
    pagesShown = 5,
    onPageChange,

    className,
    ...rest
  } = props

  const btnClassName = clsx(
    'flex h-9 w-9 items-center justify-center rounded-full px-2.25 text-sm font-semibold',
    'cursor-pointer bg-gray-200'
  )

  const showBackButton = curPage > 0
  const showForwardButton = curPage < (totalPages - 1)

  return (
    <nav
      className={clsx(
        'flex flex-row gap-2',
        className
      )}
      {...rest}
    >
      <button
        className={clsx(
          !showBackButton && 'cursor-default! opacity-50 hover:outline-transparent',
          btnClassName
        )}
        disabled={!showBackButton}
        onClick={onPageChange?.bind(null, curPage - 1)}
      >
        <TiArrowLeftThick />
      </button>

      {Array
        .from({ length: Math.min(pagesShown, totalPages) })
        .map((_, index) => {
          const halfPages = Math.floor(pagesShown / 2)
          const pageIndex = Math.max(0, Math.min(curPage - halfPages, totalPages - pagesShown)) + index

          return (
            <BouncyButton
              key={index}
              className={clsx(
                curPage === pageIndex && 'outline-2 outline-black',
                btnClassName,
                !(curPage === pageIndex) && 'outline-none'
              )}
              onClick={onPageChange?.bind(null, pageIndex)}
            >
              {pageIndex + 1}
            </BouncyButton>
          )
        })
      }

      <button
        className={clsx(
          !showForwardButton && 'cursor-default! opacity-50 hover:outline-transparent',
          btnClassName
        )}
        disabled={!showForwardButton}
        onClick={onPageChange?.bind(null, curPage + 1)}
      >
        <TiArrowRightThick />
      </button>
    </nav>
  )
}
