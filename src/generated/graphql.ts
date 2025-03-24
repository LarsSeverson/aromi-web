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

export type FragranceAccordsQueryVariables = Exact<{
  fragranceId: Scalars['Int']['input'];
  accordsInput?: InputMaybe<AccordsInput>;
}>;


export type FragranceAccordsQuery = { __typename?: 'Query', fragrance?: { __typename?: 'Fragrance', id: number, accords: { __typename?: 'FragranceAccordConnection', edges: Array<{ __typename?: 'FragranceAccordEdge', node: { __typename?: 'FragranceAccord', id: number, accordId: number, name: string, color: string, votes: number, myVote?: boolean | null } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } } | null };

export type FragranceImagesQueryVariables = Exact<{
  fragranceId: Scalars['Int']['input'];
  imagesInput?: InputMaybe<QueryInput>;
}>;


export type FragranceImagesQuery = { __typename?: 'Query', fragrance?: { __typename?: 'Fragrance', id: number, images: { __typename?: 'FragranceImageConnection', edges: Array<{ __typename?: 'FragranceImageEdge', node: { __typename?: 'FragranceImage', id: number, url: string } }>, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor?: string | null, endCursor?: string | null } } } | null };

export type FragranceInfoQueryVariables = Exact<{
  fragranceId: Scalars['Int']['input'];
}>;


export type FragranceInfoQuery = { __typename?: 'Query', fragrance?: { __typename?: 'Fragrance', id: number, brand: string, name: string, rating: number, reviewsCount: number, votes: { __typename?: 'FragranceVotes', id: number, likes: number, dislikes: number, myVote?: boolean | null }, reviewDistribution: { __typename?: 'FragranceReviewDistribution', one: number, two: number, three: number, four: number, five: number } } | null };

export type FragranceNotesQueryVariables = Exact<{
  fragranceId: Scalars['Int']['input'];
  includeTop?: InputMaybe<Scalars['Boolean']['input']>;
  includeMiddle?: InputMaybe<Scalars['Boolean']['input']>;
  includeBase?: InputMaybe<Scalars['Boolean']['input']>;
  notesInput?: InputMaybe<NotesInput>;
}>;


export type FragranceNotesQuery = { __typename?: 'Query', fragrance?: { __typename?: 'Fragrance', id: number, notes: { __typename?: 'FragranceNotes', top?: { __typename?: 'FragranceNoteConnection', edges: Array<{ __typename?: 'FragranceNoteEdge', node: { __typename?: 'FragranceNote', id: number, noteId: number, name: string, icon: string, layer: NoteLayer, votes: number, myVote?: boolean | null } }>, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor?: string | null, endCursor?: string | null } }, middle?: { __typename?: 'FragranceNoteConnection', edges: Array<{ __typename?: 'FragranceNoteEdge', node: { __typename?: 'FragranceNote', id: number, noteId: number, name: string, icon: string, layer: NoteLayer, votes: number, myVote?: boolean | null } }>, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor?: string | null, endCursor?: string | null } }, base?: { __typename?: 'FragranceNoteConnection', edges: Array<{ __typename?: 'FragranceNoteEdge', node: { __typename?: 'FragranceNote', id: number, noteId: number, name: string, icon: string, layer: NoteLayer, votes: number, myVote?: boolean | null } }>, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor?: string | null, endCursor?: string | null } } } } | null };

export type FragranceNotesLayerQueryVariables = Exact<{
  fragranceId: Scalars['Int']['input'];
  includeTop?: InputMaybe<Scalars['Boolean']['input']>;
  includeMiddle?: InputMaybe<Scalars['Boolean']['input']>;
  includeBase?: InputMaybe<Scalars['Boolean']['input']>;
  notesInput?: InputMaybe<NotesInput>;
}>;


export type FragranceNotesLayerQuery = { __typename?: 'Query', fragrance?: { __typename?: 'Fragrance', id: number, notes: { __typename?: 'FragranceNotes', top?: { __typename?: 'FragranceNoteConnection', edges: Array<{ __typename?: 'FragranceNoteEdge', node: { __typename?: 'FragranceNote', id: number, noteId: number, name: string, icon: string, layer: NoteLayer, votes: number, myVote?: boolean | null } }>, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor?: string | null, endCursor?: string | null } }, middle?: { __typename?: 'FragranceNoteConnection', edges: Array<{ __typename?: 'FragranceNoteEdge', node: { __typename?: 'FragranceNote', id: number, noteId: number, name: string, icon: string, layer: NoteLayer, votes: number, myVote?: boolean | null } }>, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor?: string | null, endCursor?: string | null } }, base?: { __typename?: 'FragranceNoteConnection', edges: Array<{ __typename?: 'FragranceNoteEdge', node: { __typename?: 'FragranceNote', id: number, noteId: number, name: string, icon: string, layer: NoteLayer, votes: number, myVote?: boolean | null } }>, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor?: string | null, endCursor?: string | null } } } } | null };

export type FragranceReviewsQueryVariables = Exact<{
  fragranceId: Scalars['Int']['input'];
  reviewsInput?: InputMaybe<QueryInput>;
}>;


export type FragranceReviewsQuery = { __typename?: 'Query', fragrance?: { __typename?: 'Fragrance', id: number, reviews: { __typename?: 'FragranceReviewConnection', edges: Array<{ __typename?: 'FragranceReviewEdge', node: { __typename?: 'FragranceReview', id: number, rating: number, review: string, votes: number, dCreated: Date, dModified: Date, dDeleted?: Date | null, author: string, myVote?: boolean | null } }>, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor?: string | null, endCursor?: string | null } } } | null };

export type FragranceTraitsQueryVariables = Exact<{
  fragranceId: Scalars['Int']['input'];
}>;


export type FragranceTraitsQuery = { __typename?: 'Query', fragrance?: { __typename?: 'Fragrance', id: number, traits: { __typename?: 'FragranceTraits', gender: { __typename?: 'FragranceTrait', id: number, trait: FragranceTraitType, value: number, myVote?: number | null }, longevity: { __typename?: 'FragranceTrait', id: number, trait: FragranceTraitType, value: number, myVote?: number | null }, sillage: { __typename?: 'FragranceTrait', id: number, trait: FragranceTraitType, value: number, myVote?: number | null }, complexity: { __typename?: 'FragranceTrait', id: number, trait: FragranceTraitType, value: number, myVote?: number | null }, balance: { __typename?: 'FragranceTrait', id: number, trait: FragranceTraitType, value: number, myVote?: number | null }, allure: { __typename?: 'FragranceTrait', id: number, trait: FragranceTraitType, value: number, myVote?: number | null } } } | null };

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


export const FragranceAccordsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FragranceAccords"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fragranceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"accordsInput"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"AccordsInput"}},"defaultValue":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"pagination"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"18"}},{"kind":"ObjectField","name":{"kind":"Name","value":"sort"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"by"},"value":{"kind":"EnumValue","value":"votes"}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"fill"},"value":{"kind":"BooleanValue","value":false}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fragrance"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fragranceId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"accords"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"accordsInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"accordId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"votes"}},{"kind":"Field","name":{"kind":"Name","value":"myVote"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]}}]}}]}}]} as unknown as DocumentNode<FragranceAccordsQuery, FragranceAccordsQueryVariables>;
export const FragranceImagesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FragranceImages"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fragranceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"imagesInput"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"QueryInput"}},"defaultValue":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"pagination"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"5"}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fragrance"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fragranceId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"imagesInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]}}]}}]}}]} as unknown as DocumentNode<FragranceImagesQuery, FragranceImagesQueryVariables>;
export const FragranceInfoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FragranceInfo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fragranceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fragrance"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fragranceId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"brand"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}},{"kind":"Field","name":{"kind":"Name","value":"reviewsCount"}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"likes"}},{"kind":"Field","name":{"kind":"Name","value":"dislikes"}},{"kind":"Field","name":{"kind":"Name","value":"myVote"}}]}},{"kind":"Field","name":{"kind":"Name","value":"reviewDistribution"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"one"}},{"kind":"Field","name":{"kind":"Name","value":"two"}},{"kind":"Field","name":{"kind":"Name","value":"three"}},{"kind":"Field","name":{"kind":"Name","value":"four"}},{"kind":"Field","name":{"kind":"Name","value":"five"}}]}}]}}]}}]} as unknown as DocumentNode<FragranceInfoQuery, FragranceInfoQueryVariables>;
export const FragranceNotesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FragranceNotes"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fragranceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeTop"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeMiddle"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeBase"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"notesInput"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"NotesInput"}},"defaultValue":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"pagination"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"12"}},{"kind":"ObjectField","name":{"kind":"Name","value":"sort"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"by"},"value":{"kind":"EnumValue","value":"votes"}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"fill"},"value":{"kind":"BooleanValue","value":false}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fragrance"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fragranceId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"notes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"top"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"notesInput"}}}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeTop"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"noteId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"layer"}},{"kind":"Field","name":{"kind":"Name","value":"votes"}},{"kind":"Field","name":{"kind":"Name","value":"myVote"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"middle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"notesInput"}}}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeMiddle"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"noteId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"layer"}},{"kind":"Field","name":{"kind":"Name","value":"votes"}},{"kind":"Field","name":{"kind":"Name","value":"myVote"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"base"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"notesInput"}}}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeBase"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"noteId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"layer"}},{"kind":"Field","name":{"kind":"Name","value":"votes"}},{"kind":"Field","name":{"kind":"Name","value":"myVote"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<FragranceNotesQuery, FragranceNotesQueryVariables>;
export const FragranceNotesLayerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FragranceNotesLayer"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fragranceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeTop"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeMiddle"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeBase"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"notesInput"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"NotesInput"}},"defaultValue":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"pagination"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"18"}},{"kind":"ObjectField","name":{"kind":"Name","value":"sort"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"by"},"value":{"kind":"EnumValue","value":"votes"}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"fill"},"value":{"kind":"BooleanValue","value":false}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fragrance"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fragranceId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"notes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"top"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"notesInput"}}}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeTop"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"noteId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"layer"}},{"kind":"Field","name":{"kind":"Name","value":"votes"}},{"kind":"Field","name":{"kind":"Name","value":"myVote"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"middle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"notesInput"}}}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeMiddle"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"noteId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"layer"}},{"kind":"Field","name":{"kind":"Name","value":"votes"}},{"kind":"Field","name":{"kind":"Name","value":"myVote"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"base"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"notesInput"}}}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeBase"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"noteId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"layer"}},{"kind":"Field","name":{"kind":"Name","value":"votes"}},{"kind":"Field","name":{"kind":"Name","value":"myVote"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<FragranceNotesLayerQuery, FragranceNotesLayerQueryVariables>;
export const FragranceReviewsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FragranceReviews"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fragranceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"reviewsInput"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"QueryInput"}},"defaultValue":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"pagination"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"20"}},{"kind":"ObjectField","name":{"kind":"Name","value":"sort"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"by"},"value":{"kind":"EnumValue","value":"votes"}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fragrance"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fragranceId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"reviews"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"reviewsInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}},{"kind":"Field","name":{"kind":"Name","value":"review"}},{"kind":"Field","name":{"kind":"Name","value":"votes"}},{"kind":"Field","name":{"kind":"Name","value":"dCreated"}},{"kind":"Field","name":{"kind":"Name","value":"dModified"}},{"kind":"Field","name":{"kind":"Name","value":"dDeleted"}},{"kind":"Field","name":{"kind":"Name","value":"author"}},{"kind":"Field","name":{"kind":"Name","value":"myVote"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]}}]}}]}}]} as unknown as DocumentNode<FragranceReviewsQuery, FragranceReviewsQueryVariables>;
export const FragranceTraitsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FragranceTraits"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fragranceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fragrance"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fragranceId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"traits"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gender"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"trait"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"myVote"}}]}},{"kind":"Field","name":{"kind":"Name","value":"longevity"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"trait"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"myVote"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sillage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"trait"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"myVote"}}]}},{"kind":"Field","name":{"kind":"Name","value":"complexity"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"trait"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"myVote"}}]}},{"kind":"Field","name":{"kind":"Name","value":"balance"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"trait"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"myVote"}}]}},{"kind":"Field","name":{"kind":"Name","value":"allure"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"trait"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"myVote"}}]}}]}}]}}]}}]} as unknown as DocumentNode<FragranceTraitsQuery, FragranceTraitsQueryVariables>;
export const SuggestedFragrancesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SuggestedFragrances"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"QueryInput"}},"defaultValue":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"pagination"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"20"}}]}}]}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"imagesInput"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"QueryInput"}},"defaultValue":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"pagination"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fragrances"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"brand"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"dislikes"}},{"kind":"Field","name":{"kind":"Name","value":"likes"}},{"kind":"Field","name":{"kind":"Name","value":"myVote"}}]}},{"kind":"Field","name":{"kind":"Name","value":"images"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"imagesInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"cursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]}}]}}]} as unknown as DocumentNode<SuggestedFragrancesQuery, SuggestedFragrancesQueryVariables>;
export const UpsertUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpsertUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cognitoId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upsertUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"cognitoId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cognitoId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"cognitoId"}},{"kind":"Field","name":{"kind":"Name","value":"followers"}},{"kind":"Field","name":{"kind":"Name","value":"following"}}]}}]}}]} as unknown as DocumentNode<UpsertUserMutation, UpsertUserMutationVariables>;