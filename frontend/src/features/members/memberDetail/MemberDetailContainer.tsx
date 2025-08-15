import { MemberDetailPresenter } from "./MemberDetailPresenter";

interface MemberDetailContainerProps {
  id: string;
}

export const MemberDetailContainer = ({}: MemberDetailContainerProps) => {
  // TODO：Query呼び出し

  return <MemberDetailPresenter />;
};
