import { useParams } from "react-router";
import { MemberDetailContainer } from "../features/members/memberDetail/MemberDetailContainer";

export const MemberDetailPage = () => {
  const { id } = useParams();

  return <MemberDetailContainer id={id ?? ""} />;
};
