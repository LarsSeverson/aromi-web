/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: Date; output: Date; }
};

export type AccordsInput = {
  fill?: InputMaybe<Scalars['Boolean']['input']>;
  pagination?: InputMaybe<PaginationInput>;
};

export type CreateCollectionInput = {
  name: Scalars['String']['input'];
};

export type Fragrance = {
  __typename?: 'Fragrance';
  accords: FragranceAccordConnection;
  brand: Scalars['String']['output'];
  dCreated: Scalars['DateTime']['output'];
  dModified: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  images: FragranceImageConnection;
  myReview?: Maybe<FragranceReview>;
  name: Scalars['String']['output'];
  notes: FragranceNotes;
  rating: Scalars['Float']['output'];
  reviewDistribution: FragranceReviewDistribution;
  reviews: FragranceReviewConnection;
  reviewsCount: Scalars['Int']['output'];
  traits: FragranceTraits;
  votes: FragranceVotes;
};


export type FragranceAccordsArgs = {
  input?: InputMaybe<AccordsInput>;
};


export type FragranceImagesArgs = {
  input?: InputMaybe<QueryInput>;
};


export type FragranceReviewsArgs = {
  input?: InputMaybe<QueryInput>;
};

export type FragranceAccord = {
  __typename?: 'FragranceAccord';
  accordId: Scalars['Int']['output'];
  color: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  myVote?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
  votes: Scalars['Int']['output'];
};

export type FragranceAccordConnection = {
  __typename?: 'FragranceAccordConnection';
  edges: Array<FragranceAccordEdge>;
  pageInfo: PageInfo;
};

export type FragranceAccordEdge = {
  __typename?: 'FragranceAccordEdge';
  cursor: Scalars['String']['output'];
  node: FragranceAccord;
};

export type FragranceCollection = {
  __typename?: 'FragranceCollection';
  dCreated: Scalars['DateTime']['output'];
  dModified: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  items: FragranceCollectionItemConnection;
  name: Scalars['String']['output'];
  user: User;
};


export type FragranceCollectionItemsArgs = {
  input?: InputMaybe<QueryInput>;
};

export type FragranceCollectionConnection = {
  __typename?: 'FragranceCollectionConnection';
  edges: Array<FragranceCollectionEdge>;
  pageInfo: PageInfo;
};

export type FragranceCollectionEdge = {
  __typename?: 'FragranceCollectionEdge';
  cursor: Scalars['String']['output'];
  node: FragranceCollection;
};

export type FragranceCollectionItem = {
  __typename?: 'FragranceCollectionItem';
  collection: FragranceCollection;
  dCreated: Scalars['DateTime']['output'];
  dModified: Scalars['DateTime']['output'];
  fragrance: Fragrance;
  id: Scalars['Int']['output'];
};

export type FragranceCollectionItemConnection = {
  __typename?: 'FragranceCollectionItemConnection';
  edges: Array<FragranceCollectionItemEdge>;
  pageInfo: PageInfo;
};

export type FragranceCollectionItemEdge = {
  __typename?: 'FragranceCollectionItemEdge';
  cursor: Scalars['String']['output'];
  node: FragranceCollectionItem;
};

export type FragranceConnection = {
  __typename?: 'FragranceConnection';
  edges: Array<FragranceEdge>;
  pageInfo: PageInfo;
};

export type FragranceEdge = {
  __typename?: 'FragranceEdge';
  cursor: Scalars['String']['output'];
  node: Fragrance;
};

export type FragranceImage = {
  __typename?: 'FragranceImage';
  id: Scalars['Int']['output'];
  url: Scalars['String']['output'];
};

export type FragranceImageConnection = {
  __typename?: 'FragranceImageConnection';
  edges: Array<FragranceImageEdge>;
  pageInfo: PageInfo;
};

export type FragranceImageEdge = {
  __typename?: 'FragranceImageEdge';
  cursor: Scalars['String']['output'];
  node: FragranceImage;
};

export type FragranceNote = {
  __typename?: 'FragranceNote';
  icon: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  layer: NoteLayer;
  myVote?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
  noteId: Scalars['Int']['output'];
  votes: Scalars['Int']['output'];
};

export type FragranceNoteConnection = {
  __typename?: 'FragranceNoteConnection';
  edges: Array<FragranceNoteEdge>;
  pageInfo: PageInfo;
};

export type FragranceNoteEdge = {
  __typename?: 'FragranceNoteEdge';
  cursor: Scalars['String']['output'];
  node: FragranceNote;
};

export type FragranceNotes = {
  __typename?: 'FragranceNotes';
  base: FragranceNoteConnection;
  fragranceId: Scalars['Int']['output'];
  middle: FragranceNoteConnection;
  top: FragranceNoteConnection;
};


export type FragranceNotesBaseArgs = {
  input?: InputMaybe<NotesInput>;
};


export type FragranceNotesMiddleArgs = {
  input?: InputMaybe<NotesInput>;
};


export type FragranceNotesTopArgs = {
  input?: InputMaybe<NotesInput>;
};

export type FragranceReview = {
  __typename?: 'FragranceReview';
  author: Scalars['String']['output'];
  dCreated: Scalars['DateTime']['output'];
  dDeleted?: Maybe<Scalars['DateTime']['output']>;
  dModified: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  myVote?: Maybe<Scalars['Boolean']['output']>;
  rating: Scalars['Int']['output'];
  review: Scalars['String']['output'];
  votes: Scalars['Int']['output'];
};

export type FragranceReviewConnection = {
  __typename?: 'FragranceReviewConnection';
  edges: Array<FragranceReviewEdge>;
  pageInfo: PageInfo;
};

export type FragranceReviewDistribution = {
  __typename?: 'FragranceReviewDistribution';
  five: Scalars['Int']['output'];
  four: Scalars['Int']['output'];
  one: Scalars['Int']['output'];
  three: Scalars['Int']['output'];
  two: Scalars['Int']['output'];
};

export type FragranceReviewEdge = {
  __typename?: 'FragranceReviewEdge';
  cursor: Scalars['String']['output'];
  node: FragranceReview;
};

export type FragranceTrait = {
  __typename?: 'FragranceTrait';
  id: Scalars['Int']['output'];
  myVote?: Maybe<Scalars['Float']['output']>;
  trait: FragranceTraitType;
  value: Scalars['Float']['output'];
};

export enum FragranceTraitType {
  Allure = 'allure',
  Balance = 'balance',
  Complexity = 'complexity',
  Gender = 'gender',
  Longevity = 'longevity',
  Sillage = 'sillage'
}

export type FragranceTraits = {
  __typename?: 'FragranceTraits';
  allure: FragranceTrait;
  balance: FragranceTrait;
  complexity: FragranceTrait;
  fragranceId: Scalars['Int']['output'];
  gender: FragranceTrait;
  longevity: FragranceTrait;
  sillage: FragranceTrait;
};

export type FragranceVotes = {
  __typename?: 'FragranceVotes';
  dislikes: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  likes: Scalars['Int']['output'];
  myVote?: Maybe<Scalars['Boolean']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addFragranceToCollection?: Maybe<FragranceCollection>;
  createCollection?: Maybe<FragranceCollection>;
  removeFragranceFromCollection?: Maybe<FragranceCollection>;
  reviewFragrance?: Maybe<FragranceReview>;
  upsertUser?: Maybe<User>;
  voteOnAccord?: Maybe<FragranceAccord>;
  voteOnFragrance?: Maybe<FragranceVotes>;
  voteOnNote?: Maybe<FragranceNote>;
  voteOnReview?: Maybe<FragranceReview>;
  voteOnTrait?: Maybe<FragranceTrait>;
};


export type MutationAddFragranceToCollectionArgs = {
  collectionId: Scalars['Int']['input'];
  fragranceId: Scalars['Int']['input'];
};


export type MutationCreateCollectionArgs = {
  input: CreateCollectionInput;
};


export type MutationRemoveFragranceFromCollectionArgs = {
  collectionId: Scalars['Int']['input'];
  fragranceId: Scalars['Int']['input'];
};


export type MutationReviewFragranceArgs = {
  fragranceId: Scalars['Int']['input'];
  myRating: Scalars['Int']['input'];
  myReview: Scalars['String']['input'];
};


export type MutationUpsertUserArgs = {
  cognitoId: Scalars['String']['input'];
  email: Scalars['String']['input'];
};


export type MutationVoteOnAccordArgs = {
  accordId: Scalars['Int']['input'];
  fragranceId: Scalars['Int']['input'];
  myVote: Scalars['Boolean']['input'];
};


export type MutationVoteOnFragranceArgs = {
  fragranceId: Scalars['Int']['input'];
  myVote?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationVoteOnNoteArgs = {
  fragranceId: Scalars['Int']['input'];
  layer: NoteLayer;
  myVote: Scalars['Boolean']['input'];
  noteId: Scalars['Int']['input'];
};


export type MutationVoteOnReviewArgs = {
  myVote?: InputMaybe<Scalars['Boolean']['input']>;
  reviewId: Scalars['Int']['input'];
};


export type MutationVoteOnTraitArgs = {
  fragranceId: Scalars['Int']['input'];
  myVote: Scalars['Float']['input'];
  trait: FragranceTraitType;
};

export enum NoteLayer {
  Base = 'base',
  Middle = 'middle',
  Top = 'top'
}

export type NotesInput = {
  fill?: InputMaybe<Scalars['Boolean']['input']>;
  pagination?: InputMaybe<PaginationInput>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type PaginationInput = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortByInput>;
};

export type Query = {
  __typename?: 'Query';
  fragrance?: Maybe<Fragrance>;
  fragrances: FragranceConnection;
  me?: Maybe<User>;
  user?: Maybe<User>;
};


export type QueryFragranceArgs = {
  id: Scalars['Int']['input'];
};


export type QueryFragrancesArgs = {
  input?: InputMaybe<QueryInput>;
};


export type QueryUserArgs = {
  id: Scalars['Int']['input'];
};

export type QueryInput = {
  pagination?: InputMaybe<PaginationInput>;
};

export enum SortBy {
  Added = 'added',
  Created = 'created',
  Id = 'id',
  Modified = 'modified',
  Votes = 'votes'
}

export type SortByInput = {
  by: SortBy;
  direction?: SortDirection;
};

export enum SortDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type User = {
  __typename?: 'User';
  cognitoId: Scalars['String']['output'];
  collections: FragranceCollectionConnection;
  email: Scalars['String']['output'];
  followers: Scalars['Int']['output'];
  following: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  likes: FragranceConnection;
  reviews: FragranceReviewConnection;
  username: Scalars['String']['output'];
};


export type UserCollectionsArgs = {
  input?: InputMaybe<QueryInput>;
};


export type UserLikesArgs = {
  input?: InputMaybe<QueryInput>;
};


export type UserReviewsArgs = {
  input?: InputMaybe<QueryInput>;
};

export type SuggestedFragrancesQueryVariables = Exact<{
  input?: InputMaybe<QueryInput>;
  imagesInput?: InputMaybe<QueryInput>;
}>;


export type SuggestedFragrancesQuery = { __typename?: 'Query', fragrances: { __typename?: 'FragranceConnection', edges: Array<{ __typename?: 'FragranceEdge', cursor: string, node: { __typename?: 'Fragrance', id: number, brand: string, name: string, votes: { __typename?: 'FragranceVotes', id: number, dislikes: number, likes: number, myVote?: boolean | null }, images: { __typename?: 'FragranceImageConnection', edges: Array<{ __typename?: 'FragranceImageEdge', node: { __typename?: 'FragranceImage', id: number, url: string } }> } } }>, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor?: string | null, endCursor?: string | null } } };

export type UpsertUserMutationVariables = Exact<{
  email: Scalars['String']['input'];
  cognitoId: Scalars['String']['input'];
}>;


export type UpsertUserMutation = { __typename?: 'Mutation', upsertUser?: { __typename?: 'User', id: number, email: string, username: string, cognitoId: string, followers: number, following: number } | null };


export const SuggestedFragrancesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SuggestedFragrances"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"QueryInput"}},"defaultValue":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"pagination"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"20"}}]}}]}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"imagesInput"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"QueryInput"}},"defaultValue":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"pagination"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fragrances"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"brand"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"dislikes"}},{"kind":"Field","name":{"kind":"Name","value":"likes"}},{"kind":"Field","name":{"kind":"Name","value":"myVote"}}]}},{"kind":"Field","name":{"kind":"Name","value":"images"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"imagesInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"cursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]}}]}}]} as unknown as DocumentNode<SuggestedFragrancesQuery, SuggestedFragrancesQueryVariables>;
export const UpsertUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpsertUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cognitoId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upsertUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"cognitoId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cognitoId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"cognitoId"}},{"kind":"Field","name":{"kind":"Name","value":"followers"}},{"kind":"Field","name":{"kind":"Name","value":"following"}}]}}]}}]} as unknown as DocumentNode<UpsertUserMutation, UpsertUserMutationVariables>;