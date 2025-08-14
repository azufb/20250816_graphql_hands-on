// 型定義（SDLで記述）
export const memberTypeDefs = `#graphql
  type Member {
    id: String!
    name: String!
    age: Int!
    comment: String!
    favorite: [String]
    dislike: [String]
  }

  type MemberInput {
    id: String!
    name: String!
    age: Int!
    comment: String!
    favorite1: String
    favorite2: String
    favorite3: String
    dislike1: String
    dislike2: String
    dislike3: String
  }

  type Mutation {
    addMember(input: MemberInput!): Member!
  }
`;
