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
  dislike?: Maybe<Array<Scalars['String']['output']>>;
  favorite?: Maybe<Array<Scalars['String']['output']>>;
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
  fetchMemberList: Array<Member>;
};


export type QueryFetchMemberInfoByIdArgs = {
  id: Scalars['String']['input'];
};

export type FetchMemberInfoByIdQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type FetchMemberInfoByIdQuery = { __typename?: 'Query', fetchMemberInfoById?: { __typename?: 'Member', name: string, age: number, comment: string } | null };

export type FetchMemberListQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchMemberListQuery = { __typename?: 'Query', fetchMemberList: Array<{ __typename?: 'Member', id: string, name: string }> };


export const FetchMemberInfoByIdDocument = gql`
    query FetchMemberInfoById($id: String!) {
  fetchMemberInfoById(id: $id) {
    name
    age
    comment
  }
}
    `;

/**
 * __useFetchMemberInfoByIdQuery__
 *
 * To run a query within a React component, call `useFetchMemberInfoByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchMemberInfoByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchMemberInfoByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFetchMemberInfoByIdQuery(baseOptions: Apollo.QueryHookOptions<FetchMemberInfoByIdQuery, FetchMemberInfoByIdQueryVariables> & ({ variables: FetchMemberInfoByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FetchMemberInfoByIdQuery, FetchMemberInfoByIdQueryVariables>(FetchMemberInfoByIdDocument, options);
      }
export function useFetchMemberInfoByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FetchMemberInfoByIdQuery, FetchMemberInfoByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FetchMemberInfoByIdQuery, FetchMemberInfoByIdQueryVariables>(FetchMemberInfoByIdDocument, options);
        }
export function useFetchMemberInfoByIdSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FetchMemberInfoByIdQuery, FetchMemberInfoByIdQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FetchMemberInfoByIdQuery, FetchMemberInfoByIdQueryVariables>(FetchMemberInfoByIdDocument, options);
        }
export type FetchMemberInfoByIdQueryHookResult = ReturnType<typeof useFetchMemberInfoByIdQuery>;
export type FetchMemberInfoByIdLazyQueryHookResult = ReturnType<typeof useFetchMemberInfoByIdLazyQuery>;
export type FetchMemberInfoByIdSuspenseQueryHookResult = ReturnType<typeof useFetchMemberInfoByIdSuspenseQuery>;
export type FetchMemberInfoByIdQueryResult = Apollo.QueryResult<FetchMemberInfoByIdQuery, FetchMemberInfoByIdQueryVariables>;
export const FetchMemberListDocument = gql`
    query FetchMemberList {
  fetchMemberList {
    id
    name
  }
}
    `;

/**
 * __useFetchMemberListQuery__
 *
 * To run a query within a React component, call `useFetchMemberListQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchMemberListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchMemberListQuery({
 *   variables: {
 *   },
 * });
 */
export function useFetchMemberListQuery(baseOptions?: Apollo.QueryHookOptions<FetchMemberListQuery, FetchMemberListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FetchMemberListQuery, FetchMemberListQueryVariables>(FetchMemberListDocument, options);
      }
export function useFetchMemberListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FetchMemberListQuery, FetchMemberListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FetchMemberListQuery, FetchMemberListQueryVariables>(FetchMemberListDocument, options);
        }
export function useFetchMemberListSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FetchMemberListQuery, FetchMemberListQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FetchMemberListQuery, FetchMemberListQueryVariables>(FetchMemberListDocument, options);
        }
export type FetchMemberListQueryHookResult = ReturnType<typeof useFetchMemberListQuery>;
export type FetchMemberListLazyQueryHookResult = ReturnType<typeof useFetchMemberListLazyQuery>;
export type FetchMemberListSuspenseQueryHookResult = ReturnType<typeof useFetchMemberListSuspenseQuery>;
export type FetchMemberListQueryResult = Apollo.QueryResult<FetchMemberListQuery, FetchMemberListQueryVariables>;