import { useFetchMemberInfoByIdQuery } from "../../../gql/generated/graphql";
import { MemberDetailPresenter } from "./MemberDetailPresenter";

interface MemberDetailContainerProps {
  id: string;
}

export const MemberDetailContainer = ({ id }: MemberDetailContainerProps) => {
  const { data, error } = useFetchMemberInfoByIdQuery({
    variables: {
      id,
    },
  });

  if (error) {
    throw error.message;
  }

  return <MemberDetailPresenter member={data?.fetchMemberInfoById} />;
};
