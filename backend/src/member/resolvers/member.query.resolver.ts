import * as MemberService from "../service/member.service";
import { Member } from "../types/member.types";

/**
 * fetchMemberList
 * メンバー一覧取得のQuery
 */
export async function fetchMemberList(): Promise<Member[]> {
  // service呼び出し
  const result = await MemberService.fetchMemberList();

  return result;
}

/**
 * fetchMemberInfoById
 * 特定のidのメンバー情報取得のQuery
 */
export async function fetchMemberInfoById(id: string): Promise<Member | null> {
  const result = await MemberService.fetchMemberInfoById(id);

  return result;
}
