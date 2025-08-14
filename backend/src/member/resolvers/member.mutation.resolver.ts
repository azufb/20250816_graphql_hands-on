// MutationのResolverを実装する
import { Member, MemberInput } from "../types/member.types";
import * as MemberService from "../service/member.service";

/**
 * addMember
 * メンバー追加処理
 */
export async function addMember(input: MemberInput): Promise<Member> {
  // service呼び出し
  const result = await MemberService.addMember(input);

  return result;
}
