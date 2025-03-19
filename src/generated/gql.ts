/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n  query SuggestedFragrances(\n    $input: QueryInput = { \n      pagination: { \n        first: 20\n      }\n    }\n    $imagesInput: QueryInput = { \n      pagination: { \n        first: 1\n      }\n    }\n  ) {\n    fragrances(input: $input) {\n      edges {\n        node {\n          id\n          brand\n          name\n          votes {\n            id\n            dislikes\n            likes\n            myVote\n          }\n          images(input: $imagesInput) {\n            edges {\n              node {\n                id\n                url\n              }\n            }\n          }\n        }\n        cursor\n      }\n      pageInfo {\n        hasPreviousPage\n        hasNextPage\n        startCursor\n        endCursor\n      }\n    }\n  } \n": typeof types.SuggestedFragrancesDocument,
    "\n  mutation UpsertUser($email: String!, $cognitoId: String!) {\n    upsertUser(email: $email, cognitoId: $cognitoId) {\n      id\n      email\n      username\n      cognitoId\n      followers\n      following\n    }\n  }\n": typeof types.UpsertUserDocument,
};
const documents: Documents = {
    "\n  query SuggestedFragrances(\n    $input: QueryInput = { \n      pagination: { \n        first: 20\n      }\n    }\n    $imagesInput: QueryInput = { \n      pagination: { \n        first: 1\n      }\n    }\n  ) {\n    fragrances(input: $input) {\n      edges {\n        node {\n          id\n          brand\n          name\n          votes {\n            id\n            dislikes\n            likes\n            myVote\n          }\n          images(input: $imagesInput) {\n            edges {\n              node {\n                id\n                url\n              }\n            }\n          }\n        }\n        cursor\n      }\n      pageInfo {\n        hasPreviousPage\n        hasNextPage\n        startCursor\n        endCursor\n      }\n    }\n  } \n": types.SuggestedFragrancesDocument,
    "\n  mutation UpsertUser($email: String!, $cognitoId: String!) {\n    upsertUser(email: $email, cognitoId: $cognitoId) {\n      id\n      email\n      username\n      cognitoId\n      followers\n      following\n    }\n  }\n": types.UpsertUserDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query SuggestedFragrances(\n    $input: QueryInput = { \n      pagination: { \n        first: 20\n      }\n    }\n    $imagesInput: QueryInput = { \n      pagination: { \n        first: 1\n      }\n    }\n  ) {\n    fragrances(input: $input) {\n      edges {\n        node {\n          id\n          brand\n          name\n          votes {\n            id\n            dislikes\n            likes\n            myVote\n          }\n          images(input: $imagesInput) {\n            edges {\n              node {\n                id\n                url\n              }\n            }\n          }\n        }\n        cursor\n      }\n      pageInfo {\n        hasPreviousPage\n        hasNextPage\n        startCursor\n        endCursor\n      }\n    }\n  } \n"): (typeof documents)["\n  query SuggestedFragrances(\n    $input: QueryInput = { \n      pagination: { \n        first: 20\n      }\n    }\n    $imagesInput: QueryInput = { \n      pagination: { \n        first: 1\n      }\n    }\n  ) {\n    fragrances(input: $input) {\n      edges {\n        node {\n          id\n          brand\n          name\n          votes {\n            id\n            dislikes\n            likes\n            myVote\n          }\n          images(input: $imagesInput) {\n            edges {\n              node {\n                id\n                url\n              }\n            }\n          }\n        }\n        cursor\n      }\n      pageInfo {\n        hasPreviousPage\n        hasNextPage\n        startCursor\n        endCursor\n      }\n    }\n  } \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpsertUser($email: String!, $cognitoId: String!) {\n    upsertUser(email: $email, cognitoId: $cognitoId) {\n      id\n      email\n      username\n      cognitoId\n      followers\n      following\n    }\n  }\n"): (typeof documents)["\n  mutation UpsertUser($email: String!, $cognitoId: String!) {\n    upsertUser(email: $email, cognitoId: $cognitoId) {\n      id\n      email\n      username\n      cognitoId\n      followers\n      following\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;