import TextButton from '@/components/TextButton'
import clsx from 'clsx'
import React from 'react'

export interface FragranceCategoryProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  expandText?: string | undefined
  showSeeAll?: boolean | undefined
  children?: React.ReactNode
  onCategoryPressed?: () => void
  onSeeAll?: () => void
}

const FragranceCategory = (props: FragranceCategoryProps) => {
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
        'px-5 py-2',
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
        {(showSeeAll ?? false) && <TextButton text='see all' />}
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

export default FragranceCategory
