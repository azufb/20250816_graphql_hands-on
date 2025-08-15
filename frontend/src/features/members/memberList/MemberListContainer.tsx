import { useNavigate } from "react-router";
import { useFetchMemberListQuery } from "../../../gql/generated/graphql";
import { MemberListPresenter } from "./MemberListPresenter";

export const MemberListContainer = () => {
  const navigate = useNavigate();
  const { data, error } = useFetchMemberListQuery();

  if (error) {
    throw error.message;
  }

  /**
   * メンバー詳細画面に遷移
   */
  const handleClickRow = (id: string) => {
    navigate(`/members/${id}`);
  };

  return (
    <MemberListPresenter
      memberList={data?.fetchMemberList ?? []}
      onClickRow={handleClickRow}
    />
  );
};
