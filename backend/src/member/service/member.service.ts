import { members as Members } from "../../../generated/prisma";
import { prisma } from "../../prismaClient";
import { Member, MemberInput } from "../types/member.types";
import { ulid } from "ulid";

/**
 * fetchMemberList
 * DBに格納されているメンバーのレコードを全件取得
 */
export async function fetchMemberList(): Promise<Member[]> {
  const list = await prisma.members.findMany();

  return list.map((item) => convertObj(item));
}

/**
 * fetchMemberInfoById
 * DBに格納されているメンバーのレコードから、特定のidのレコードを取得
 */
export async function fetchMemberInfoById(id: string): Promise<Member | null> {
  const member = await prisma.members.findUnique({
    where: {
      id,
    },
  });

  if (!member) {
    return null;
  }

  return convertObj(member);
}

/**
 * addMember
 * DBにレコード追加する
 */
export async function addMember(input: MemberInput): Promise<Member> {
  const newId = ulid();
  const newMember = await prisma.members.create({
    data: {
      id: newId,
      name: input.name,
      age: input.age,
      comment: input.comment,
      favorite_1: input.favorite1,
      favorite_2: input.favorite2,
      favorite_3: input.favorite3,
      dislike_1: input.dislike1,
      dislike_2: input.dislike2,
      dislike_3: input.dislike3,
    },
  });

  return convertObj(newMember);
}

/**
 * convertObj
 * DBスキーマではなく、Member型に変換する
 */
const convertObj = (obj: Members): Member => {
  const favoriteList = [obj.favorite_1, obj.favorite_2, obj.favorite_3];

  const dislikeList = [obj.dislike_1, obj.dislike_2, obj.dislike_3];

  return {
    id: obj.id,
    name: obj.name,
    age: obj.age,
    comment: obj.comment,
    favorite: favoriteList,
    dislike: dislikeList,
  };
};
