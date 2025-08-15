import { ApolloProvider } from "@apollo/client";
import { AppRoutes } from "./routes";
import { apolloClient } from "./apolloClient";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 16px 24px;
  margin: 0 auto;
`;

const Title = styled.h1`
  text-align: center;
`;

function App() {
  return (
    <Wrapper>
      <ApolloProvider client={apolloClient}>
        <Title>🌺みんなの自己紹介🌺</Title>
        <AppRoutes />
      </ApolloProvider>
    </Wrapper>
  );
}

export default App;
