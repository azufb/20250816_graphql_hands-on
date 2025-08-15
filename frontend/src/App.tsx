import { ApolloProvider } from "@apollo/client";
import "./App.css";
import { AppRoutes } from "./routes";
import { apolloClient } from "./apolloClient";

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <AppRoutes />
    </ApolloProvider>
  );
}

export default App;
