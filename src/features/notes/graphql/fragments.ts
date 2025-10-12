import { gql } from '@/generated'

export const ALL_NOTE_FRAGMENT = gql(/* GraphQL */`
  fragment AllNote on Note { 
    id
    name
    thumbnail {
      ...AllAsset
    }
  }
`)

export const NOTE_PREVIEW_FRAGMENT = gql(/* GraphQL */`
  fragment NotePreview on Note { 
    id
    name
    thumbnail {
      ...AllAsset
    }
  }
`)
