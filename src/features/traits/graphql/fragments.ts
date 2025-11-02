import { gql } from '@/generated'

export const ALL_TRAIT_OPTION_FRAGMENT = gql(/* GraphQL */`
  fragment AllTraitOption on TraitOption {
    id
    label
    score
  }
`)

export const ALL_TRAIT_VOTE_DIST_FRAGMENT = gql(/* GraphQL */`
  fragment AllTraitVoteDistribution on TraitVoteDistribution {
    option {
      ...AllTraitOption
    }
    votes
  }
`)

export const ALL_TRAIT_STATS_FRAGMENT = gql(/* GraphQL */`
  fragment AllTraitStats on TraitStats {
    averageScore 
    totalVotes
    distribution {
      ...AllTraitVoteDistribution
    }
  }
`)
