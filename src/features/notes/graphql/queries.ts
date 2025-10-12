import { gql } from '@/generated'

export const NOTE_QUERY = gql(/* GraphQL */`
  query Note(
    $id: ID!
  ) {
    note(id: $id) {
      ...NotePreview
    }
  }
`)

export const NOTES_QUERY = gql(/* GraphQL */`
  query Notes(
    $input: NotePaginationInput
  ) {
    notes(input: $input) {
      edges {
        node {
          ...NotePreview
        }
      }
      pageInfo {
        ...AllPageInfo
      }
    }
  }
`)

export const SEARCH_NOTES_QUERY = gql(/* GraphQL */`
  query SearchNotes(
    $input: SearchInput
  ) {
    searchNotes(input: $input) {
      edges {
        node {
          ...NotePreview
        }
        offset
      }
      pageInfo {
        ...AllSearchPageInfo
      }
    }
  }
`)
