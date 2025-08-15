import type { FetchMemberListQuery } from "../../../gql/generated/graphql";

interface MemberListPresenterProps {
  memberList: FetchMemberListQuery["fetchMemberList"];
  onClickRow: (id: string) => void;
}

export const MemberListPresenter = ({
  memberList,
  onClickRow,
}: MemberListPresenterProps) => {
  return (
    <>
      <h2>一覧</h2>
      <table>
        <thead>
          <tr>
            <th>名前</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {memberList.map((member, index) => (
            <tr key={member.id} onClick={() => onClickRow(member.id)}>
              <td>{index + 1}</td>
              <td>{member.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
