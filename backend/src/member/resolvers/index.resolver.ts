import * as memberMutation from "../resolvers/member.mutation.resolver";
import * as memberQuery from "../resolvers/member.query.resolver";
import { MemberInput } from "../types/member.types";

export const memberResolvers = {
  Query: {
    fetchMemberList: memberQuery.fetchMemberList,
    fetchMemberInfoById: (_parent: any, args: { id: string }) => {
      return memberQuery.fetchMemberInfoById(args.id);
    },
  },
  Mutation: {
    addMember: (_parent: any, args: { input: MemberInput }) => {
      return memberMutation.addMember(args.input);
    },
  },
};
