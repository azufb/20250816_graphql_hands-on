import { useFetchMemberInfoByIdQuery } from "../../../gql/generated/graphql";
import { MemberDetailPresenter } from "./MemberDetailPresenter";

interface MemberDetailContainerProps {
  id: string;
}

export const MemberDetailContainer = ({ id }: MemberDetailContainerProps) => {
  const { data, loading, error } = useFetchMemberInfoByIdQuery({
    variables: {
      id,
    },
  });

  if (error) {
    throw error.message;
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  return <MemberDetailPresenter member={data?.fetchMemberInfoById} />;
};
