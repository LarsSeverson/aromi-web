import { NoteLayer } from '@/generated/graphql'

export const ratingMap = {
  0: 'Select your rating',
  1: 'Terrible',
  2: 'Poor',
  3: 'Average',
  4: 'Good',
  5: 'Excellent'
}

export const MAX_ACCORD_VOTES = 5
export const MAX_NOTE_VOTES = 5

export const NOTE_LAYER_OPTIONS = [
  { label: 'Top', value: NoteLayer.Top },
  { label: 'Middle', value: NoteLayer.Middle },
  { label: 'Base', value: NoteLayer.Base }
]

export const MAX_REVIEW_BODY_DISPLAY_LENGTH = 500
export const MAX_REVIEW_BODY_NEWLINES = 4