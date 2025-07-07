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
  const { totalPages, curPage, pagesShown = 5, onPageChange, className, ...rest } = props

  const btnClassName = clsx(
    'w-8 px-[9px] aspect-square rounded-full text-sm font-semibold',
    'bg-gray-200 outline outline-2 outline-offset-0 outline-none hover:outline-sinopia'
  )

  return (
    <nav
      className={clsx(
        'flex flex-row gap-2',
        className
      )}
      {...rest}
    >
      <BouncyButton
        className={clsx(
          btnClassName,
          curPage === 0 && 'hover:outline-transparent'
        )}
        disabled={curPage === 0}
        onClick={() => { onPageChange?.(curPage - 1) }}
      >
        <TiArrowLeftThick />
      </BouncyButton>
      {Array.from({ length: Math.min(pagesShown, totalPages) }).map((_, index) => {
        const halfPages = Math.floor(pagesShown / 2)
        const pageIndex = Math.max(0, Math.min(curPage - halfPages, totalPages - pagesShown)) + index

        return (
          <BouncyButton
            key={index}
            className={clsx(
              btnClassName,
              curPage === pageIndex && 'outline-black',
              !(curPage === pageIndex) && 'outline-none'
            )}
            onClick={() => { onPageChange?.(pageIndex) }}
          >
            {pageIndex + 1}
          </BouncyButton>
        )
      })}
      <BouncyButton
        className={clsx(
          btnClassName,
          curPage === totalPages - 1 && 'hover:outline-transparent'
        )}
        disabled={curPage === totalPages - 1}
        onClick={() => { onPageChange?.(curPage + 1) }}
      >
        <TiArrowRightThick />
      </BouncyButton>
    </nav>
  )
}
