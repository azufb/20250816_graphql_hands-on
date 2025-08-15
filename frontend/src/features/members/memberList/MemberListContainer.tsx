import { useNavigate } from "react-router";
import { MemberListPresenter } from "./MemberListPresenter";

export const MemberListContainer = () => {
  const navigate = useNavigate();
  // const { data, error } = useFetchMemberListQuery();

  // if (error) {
  //   throw error.message;
  // }

  /**
   * メンバー詳細画面に遷移
   */
  const handleClickRow = (id: string) => {
    console.log(id);
    navigate(`/members/${id}`);
  };

  return <MemberListPresenter onClickRow={handleClickRow} />;
};
