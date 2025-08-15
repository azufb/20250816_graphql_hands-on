import * as MemberService from "../service/member.service";
import { Member } from "../types/member.types";

/**
 * fetchMemberList
 * メンバー一覧取得のQuery
 *
 * // TODO：service呼び出し実装後、返り値の型修正する
 */
export async function fetchMemberList(): Promise<[]> {
  // TODO：service呼び出し

  return [];
}

/**
 * fetchMemberInfoById
 * 特定のidのメンバー情報取得のQuery
 */
export async function fetchMemberInfoById(id: string): Promise<Member | null> {
  // TODO：service呼び出し

  return null;
}
