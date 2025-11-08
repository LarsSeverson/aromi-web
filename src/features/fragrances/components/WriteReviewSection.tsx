import React from 'react'
import { useMyFragranceReview } from '../hooks/useMyFragranceReview'
import TextAreaAutoSize from 'react-textarea-autosize'
import clsx from 'clsx'
import { MIN_REVIEW_BODY_LENGTH, ValidFragranceReviewBody } from '../utils/validation'
import { Field } from '@base-ui-components/react'

export interface WriteReviewSectionProps {
  fragranceId: string
}

const WriteReviewSection = (props: WriteReviewSectionProps) => {
  const { fragranceId } = props

  const { myReview, isLoading } = useMyFragranceReview(fragranceId)

  const [body, setBody] = React.useState(myReview?.body ?? '')
  const isValidBody = body.trim().length >= MIN_REVIEW_BODY_LENGTH

  const handleOnValueChange = (value: string) => {
    setBody(value)
  }

  const handleValidate = (value: unknown) => {
    if (value == null) return null

    const result = ValidFragranceReviewBody.safeParse(value)
    if (result.success) return null

    const messages = result.error.issues.map(issue => issue.message)
    return messages.at(0) ?? null
  }

  if (isLoading) return null

  return (
    <div
      className='flex w-full flex-col'
    >
      <div
        className='p-3'
      >
        <span
          className='text-lg font-bold'
        >
          {myReview == null ? 'Tell us about your experience' : 'Your review'}
        </span>
      </div>

      <Field.Root
        name='body'
        className='mt-3 w-full px-10'
        validate={handleValidate}
      >
        <Field.Control
          value={body}
          placeholder='Got compliments or regrets? Tell us here...'
          className={clsx(
            'hover:border-sinopia min-h-44 w-full resize-none overflow-auto rounded-md border-2 p-4',
            'focus:border-sinopia transition-colors duration-150 ease-in-out focus:outline-none'
          )}
          onValueChange={handleOnValueChange}

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
          className={
            state => clsx(
              !(state.valid ?? true) && 'text-red-700',
              'mt-1 text-sm text-black/80 transition-opacity duration-200 ease-in-out',
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
