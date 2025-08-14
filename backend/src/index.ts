import { ApolloServer, BaseContext } from "@apollo/server";
import express from "express";
import { expressMiddleware } from "@as-integrations/express5";
import { memberTypeDefs } from "./member/schema/member.schema.js";
import { memberResolvers } from "./member/resolvers/index.resolver.js";

const app = express();
const port = 3000;
app.use(express.json());

async function startServer() {
  const server = new ApolloServer<BaseContext>({
    typeDefs: memberTypeDefs,
    resolvers: memberResolvers,
  });
  await server.start();

  // Express との統合
  app.use("/graphql", expressMiddleware(server));

  app.listen(port, () => {
    console.log(`🚀 Server ready at http://localhost:${port}/graphql`);
  });
}

// エラーキャッチも忘れずに
startServer().catch((err) => {
  console.error("Failed to start server:", err);
});
