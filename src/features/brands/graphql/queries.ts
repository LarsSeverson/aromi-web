import { gql } from '@/generated'

export const BRAND_QUERY = gql(/* GraphQL */ `
  query Brand($id: ID!) {
    brand(id: $id) {
      ...BrandPreview
    }
  }
`)

export const BRANDS_QUERY = gql(/* GraphQL */ `
  query Brands($input: BrandPaginationInput) {
    brands(input: $input) {
      edges {
        node {
          ...BrandPreview
        }
      }
      pageInfo {
        ...AllPageInfo
      }
    }
  }
`)

export const SEARCH_BRANDS_QUERY = gql(/* GraphQL */ `
  query SearchBrands($input: SearchInput) {
    searchBrands(input: $input) {
      edges {
        node {
          ...BrandPreview
        }
        offset
      }
      pageInfo {
        ...AllSearchPageInfo
      } 
    }
  }
`)

// export const BRAND_FRAGRANCES_QUERY = gql(/* GraphQL */ `
//   query BrandFragrances($id: ID!, $input: FragrancePaginationInput) {
//     brand(id: $id) {
//       id
//       fragrances(input: $input) {
//         edges {
//           node {
//             ...FragrancePreview
//           }
//         }
//         pageInfo {
//           ...AllPageInfo
//         }
//       }
//     }
//   }
// `)