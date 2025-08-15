import { ApolloServer, BaseContext } from "@apollo/server";
import express from "express";
import cors from "cors";
import { expressMiddleware } from "@as-integrations/express5";
import { memberTypeDefs } from "./member/schema/member.schema";
import { memberResolvers } from "./member/resolvers/index.resolver";

const app = express();
const port = 6000;

app.use(cors());
app.use(express.json());

/**
 * GraphQLサーバ起動
 */
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
