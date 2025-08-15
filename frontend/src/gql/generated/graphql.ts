import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Member = {
  __typename?: 'Member';
  age: Scalars['Int']['output'];
  comment: Scalars['String']['output'];
  dislike?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  favorite?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type MemberInput = {
  age: Scalars['Int']['input'];
  comment: Scalars['String']['input'];
  dislike1?: InputMaybe<Scalars['String']['input']>;
  dislike2?: InputMaybe<Scalars['String']['input']>;
  dislike3?: InputMaybe<Scalars['String']['input']>;
  favorite1?: InputMaybe<Scalars['String']['input']>;
  favorite2?: InputMaybe<Scalars['String']['input']>;
  favorite3?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addMember: Member;
};


export type MutationAddMemberArgs = {
  input: MemberInput;
};

export type Query = {
  __typename?: 'Query';
  fetchMemberInfoById?: Maybe<Member>;
  fetchMemberList: Array<Maybe<Member>>;
};


export type QueryFetchMemberInfoByIdArgs = {
  id: Scalars['String']['input'];
};

export type FetchMemberListQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchMemberListQueryQuery = { __typename?: 'Query', fetchMemberList: Array<{ __typename?: 'Member', id: string, name: string } | null> };


export const FetchMemberListQueryDocument = gql`
    query FetchMemberListQuery {
  fetchMemberList {
    id
    name
  }
}
    `;

/**
 * __useFetchMemberListQueryQuery__
 *
 * To run a query within a React component, call `useFetchMemberListQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchMemberListQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchMemberListQueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useFetchMemberListQueryQuery(baseOptions?: Apollo.QueryHookOptions<FetchMemberListQueryQuery, FetchMemberListQueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FetchMemberListQueryQuery, FetchMemberListQueryQueryVariables>(FetchMemberListQueryDocument, options);
      }
export function useFetchMemberListQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FetchMemberListQueryQuery, FetchMemberListQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FetchMemberListQueryQuery, FetchMemberListQueryQueryVariables>(FetchMemberListQueryDocument, options);
        }
export function useFetchMemberListQuerySuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FetchMemberListQueryQuery, FetchMemberListQueryQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FetchMemberListQueryQuery, FetchMemberListQueryQueryVariables>(FetchMemberListQueryDocument, options);
        }
export type FetchMemberListQueryQueryHookResult = ReturnType<typeof useFetchMemberListQueryQuery>;
export type FetchMemberListQueryLazyQueryHookResult = ReturnType<typeof useFetchMemberListQueryLazyQuery>;
export type FetchMemberListQuerySuspenseQueryHookResult = ReturnType<typeof useFetchMemberListQuerySuspenseQuery>;
export type FetchMemberListQueryQueryResult = Apollo.QueryResult<FetchMemberListQueryQuery, FetchMemberListQueryQueryVariables>;