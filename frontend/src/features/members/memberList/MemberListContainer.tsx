import { useFetchMemberListQuery } from "../../../gql/generated/graphql";
import { MemberListPresenter } from "./MemberListPresenter";

export const MemberListContainer = () => {
  const { data, error } = useFetchMemberListQuery();

  if (error) {
    throw error.message;
  }

  return (
    <>
      <MemberListPresenter memberList={data?.fetchMemberList ?? []} />
    </>
  );
};
