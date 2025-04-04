import clsx from 'clsx'
import React from 'react'
import TextButton from './TextButton'

export interface PageCategoryProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  expandText?: string | undefined
  showSeeAll?: boolean | undefined
  children?: React.ReactNode
  onCategoryPressed?: () => void
  onSeeAll?: (open: boolean) => void
}

const PageCategory = (props: PageCategoryProps) => {
  const {
    title,
    expandText,
    showSeeAll,
    children,
    onCategoryPressed,
    onSeeAll,
    className,
    ...rest
  } = props

  return (
    <div
      className={clsx(
        'py-2',
        className
      )}
      {...rest}
    >
      <div
        className='flex flex-row justify-between items-center mb-4'
      >
        <h2
          className='font-pd text-xl'
        >
          {title}
        </h2>
        {(showSeeAll ?? false) && (
          <TextButton
            text='see all'
            onClick={() => { onSeeAll?.(true) }}
          />
        )}
      </div>

      {children}

      {/* {(expandText != null) && (
        <BouncyButton
          style={[styles.categoryButton, { borderColor: theme.colors.surfaceDisabled }]}
          onPress={onCategoryPressed}
        >
          <Text style={{ opacity: 0.8 }}>{expandText}</Text>
        </BouncyButton>
      )} */}

    </div>
  )
}

export default PageCategory
