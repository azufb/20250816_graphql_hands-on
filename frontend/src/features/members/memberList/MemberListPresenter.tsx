import type { FetchMemberListQuery } from "../../../gql/generated/graphql";

interface MemberListPresenterProps {
  memberList: FetchMemberListQuery["fetchMemberList"];
}

export const MemberListPresenter = ({
  memberList,
}: MemberListPresenterProps) => {
  return (
    <table>
      <thead>
        <tr>
          <th>名前</th>
        </tr>
      </thead>
      <tbody>
        {memberList.map((member) => (
          <tr>
            <td>{member.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
