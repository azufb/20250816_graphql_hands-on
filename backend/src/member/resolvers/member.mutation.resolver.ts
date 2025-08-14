// MutationのResolverを実装する
import { Member, MemberInput } from "../types/member.types";

/**
 * addMember
 * メンバー追加処理
 */
export function addMember(input: MemberInput): Member {
  return {
    id: "aaa",
    ...input,
    favorite: ["aaa"],
    dislike: ["dislike"],
  };
}
