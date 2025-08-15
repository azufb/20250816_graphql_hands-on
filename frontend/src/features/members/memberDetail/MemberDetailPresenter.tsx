import type { FetchMemberInfoByIdQuery } from "../../../gql/generated/graphql";

interface MemberDetailPresenterProps {
  member: FetchMemberInfoByIdQuery["fetchMemberInfoById"];
}

export const MemberDetailPresenter = ({
  member,
}: MemberDetailPresenterProps) => {
  return (
    <>
      {member ? (
        <ul>
          <li>{member.name}</li>
        </ul>
      ) : (
        <p>ユーザー情報がありません</p>
      )}
    </>
  );
};
