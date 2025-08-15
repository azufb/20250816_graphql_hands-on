import styled from "styled-components";

interface MemberListPresenterProps {
  // memberList: FetchMemberListQuery["fetchMemberList"];
  onClickRow: (id: string) => void;
}

export const MemberListPresenter = ({
  onClickRow,
}: MemberListPresenterProps) => {
  // TODO：後で消す
  const memberList = [
    {
      id: "1",
      name: "hanako",
    },
  ];
  return (
    <TableWrapper>
      <Table>
        <thead>
          <tr>
            <Th>No.</Th>
            <Th>名前</Th>
          </tr>
        </thead>
        <tbody>
          {memberList.map((member, index) => (
            <Tr key={member.id} onClick={() => onClickRow(member.id)}>
              <Td>{index + 1}</Td>
              <Td>{member.name}</Td>
            </Tr>
          ))}
        </tbody>
      </Table>
    </TableWrapper>
  );
};

const TableWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 24px;
`;

const Table = styled.table`
  width: 600px;
  max-width: 90%;
  border-collapse: collapse;
`;

const Th = styled.th`
  text-align: left;
  padding: 8px;
  border-bottom: 2px solid #ccc;
`;

const Td = styled.td`
  padding: 8px;
  border-bottom: 1px solid #eee;
`;

const Tr = styled.tr`
  cursor: pointer;
  &:hover {
    background-color: #f5f5f5;
  }
`;
