import { MemberDetailPresenter } from "./MemberDetailPresenter";

interface MemberDetailContainerProps {
  id: string;
}

export const MemberDetailContainer = ({}: MemberDetailContainerProps) => {
  let data = null;
  // const { data, loading, error } = useFetchMemberInfoByIdQuery({
  //   variables: {
  //     id,
  //   },
  // });

  // if (error) {
  //   throw error.message;
  // }

  // if (loading) {
  //   return <p>Loading...</p>;
  // }

  return <MemberDetailPresenter />;
};
