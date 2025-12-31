import React from 'react'
import { useMyFragranceReview } from '../hooks/useMyFragranceReview'
import TextAreaAutoSize from 'react-textarea-autosize'
import clsx from 'clsx'
import { MIN_REVIEW_BODY_LENGTH, ValidFragranceReviewBody } from '../utils/validation'
import { Field } from '@base-ui/react'
import { useAuthHelpers } from '@/features/auth/hooks/useAuthHelpers'

export interface WriteReviewSectionProps {
  fragranceId: string
  onBodyChange?: (body: string) => void
}

const WriteReviewSection = (props: WriteReviewSectionProps) => {
  const { fragranceId, onBodyChange } = props

  const helpers = useAuthHelpers()

  const { myReview, isLoading } = useMyFragranceReview(fragranceId)

  const [body, setBody] = React.useState(myReview?.body ?? '')
  const isValidBody = body.trim().length >= MIN_REVIEW_BODY_LENGTH

  const handleOnValueChange = (value: string) => {
    setBody(value)
    onBodyChange?.(value)
  }

  const handleValidate = (value: unknown) => {
    if (value == null) return null

    const result = ValidFragranceReviewBody.safeParse(value)
    if (result.success) return null

    const messages = result.error.issues.map(issue => issue.message)
    return messages.at(0) ?? null
  }

  const handleOnFocus = () => {
    helpers.checkAuthenticated('You need to log in to write a review')
  }

  React.useEffect(() => {
    setBody(myReview?.body ?? '')
  }, [myReview])

  if (isLoading) return null

  return (
    <div
      className='flex w-full flex-col'
    >
      <div
        className={clsx(
          'p-2',
          'md:p-3'
        )}
      >
        <span
          className={clsx(
            'text-base font-bold',
            'md:text-lg'
          )}
        >
          {myReview == null ? 'Tell us about your experience' : 'Your review'}
        </span>
      </div>

      <Field.Root
        name='body'
        validate={handleValidate}
        className={clsx(
          'mt-2 w-full px-2',
          'md:mt-3 md:px-10'
        )}
      >
        <Field.Control
          value={body}
          placeholder='Got compliments or regrets? Tell us here...'
          onValueChange={handleOnValueChange}
          onFocus={handleOnFocus}
          className={clsx(
            'min-h-32 w-full resize-none overflow-auto rounded-lg border-2 p-3 text-sm',
            'md:text-md md:min-h-44 md:rounded-xl md:p-4',
            'hover:border-sinopia focus:border-sinopia transition-colors duration-150 ease-in-out focus:outline-none'
          )}
          render={props => {
            const { style: _style, ...rest } = props

            return (
              <TextAreaAutoSize
                {...rest}
                autoComplete='off'
                autoCorrect='off'
                autoCapitalize='off'
              />
            )
          }}
        />

        <Field.Description
          className={state => clsx(
            'mt-2 text-xs transition-opacity duration-200 ease-in-out',
            'md:mt-1 md:text-sm',
            (state.valid ?? true) ? 'text-black/80' : 'text-red-700',
            isValidBody && 'opacity-0'
          )}
        >
          Reviews need to be at least {MIN_REVIEW_BODY_LENGTH} characters.
        </Field.Description>
      </Field.Root>
    </div>
  )
}

export default WriteReviewSection