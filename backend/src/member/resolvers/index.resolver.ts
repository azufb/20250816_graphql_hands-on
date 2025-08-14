import * as memberMutation from "../resolvers/member.mutation.resolver";
import { MemberInput } from "../types/member.types";

export const memberResolvers = {
  Query: {
    hello: () => {
      return "Hello";
    },
  },
  Mutation: {
    addMember: (_parent: any, args: { input: MemberInput }) => {
      return memberMutation.addMember(args.input);
    },
  },
};
