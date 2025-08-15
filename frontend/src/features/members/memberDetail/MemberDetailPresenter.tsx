import styled from "styled-components";

interface MemberDetailPresenterProps {
  // member: FetchMemberInfoByIdQuery["fetchMemberInfoById"];
}

export const MemberDetailPresenter = ({}: MemberDetailPresenterProps) => {
  // TODO：後で消す
  const member = {
    name: "hanako",
    age: 27,
    comment: "Hello!",
  };
  const memberName = member?.name ?? "NoName";

  return (
    <Wrapper>
      <h2>{memberName}さんはこんな方！🎉</h2>

      <ProfileContainer>
        {member ? (
          <ProfileInfo>
            <ProfileInfoRow>
              <ProfileInfoLabel>●名前</ProfileInfoLabel>
              <ProfileInfoData>{member.name}</ProfileInfoData>
            </ProfileInfoRow>

            <ProfileInfoRow>
              <ProfileInfoLabel>●年齢</ProfileInfoLabel>
              <ProfileInfoData>{member.age}</ProfileInfoData>
            </ProfileInfoRow>

            <ProfileInfoRow>
              <ProfileInfoLabel>●コメント</ProfileInfoLabel>
              <ProfileInfoData>{member.comment}</ProfileInfoData>
            </ProfileInfoRow>
          </ProfileInfo>
        ) : (
          <NotFoundProfile>プロフィール情報がありません</NotFoundProfile>
        )}
      </ProfileContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileContainer = styled.div`
  width: 680px;
  max-width: 90%;
  padding: 16px;
  border: 1px solid #555;
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ProfileInfoRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ProfileInfoLabel = styled.div`
  font-weight: bold;
  color: #555;
`;

const ProfileInfoData = styled.div`
  font-size: 18px;
  font-weight: 400;
  color: #222;
`;

const NotFoundProfile = styled.div`
  font-weight: bold;
  color: #555;
`;
