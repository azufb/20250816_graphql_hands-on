// import * as memberMutation from "../resolvers/member.mutation.resolver";
// import * as memberQuery from "../resolvers/member.query.resolver";

/**
 * query名: (_parent: any, args: { id: string }) => {
      ここに処理を書く
    },
 */
export const memberResolvers = {
  Query: {
    // TODO：Queryをここに定義
    hello: () => "Hello World!",
  },
  // Mutation: {
  //   // TODO：Mutationをここに定義
  // },
};
