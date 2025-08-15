import { useNavigate } from "react-router";
import { MemberListPresenter } from "./MemberListPresenter";

export const MemberListContainer = () => {
  const navigate = useNavigate();
  // TODO：Query呼び出し

  /**
   * メンバー詳細画面に遷移
   */
  const handleClickRow = (id: string) => {
    console.log(id);
    navigate(`/members/${id}`);
  };

  return <MemberListPresenter onClickRow={handleClickRow} />;
};
