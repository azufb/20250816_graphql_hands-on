import { ApolloServer, BaseContext } from "@apollo/server";
import express from "express";
import { expressMiddleware } from "@as-integrations/express5";
import cors from "cors";

const app = express();
const port = 3000;

const typeDefs = `type Query { hello: String } `;

const resolvers = {
  Query: {
    hello: () => {
      return "Hello world!";
    },
  },
};

const server = new ApolloServer<BaseContext>({
  typeDefs,
  resolvers,
});

await server.start();

app.use(
  "/graphQL",
  cors<cors.CorsRequest>(),
  express.json(),
  expressMiddleware(server)
);

app.listen(port, () => {
  console.log(`🚀 Server ready at http://localhost:${port}/graphQL`);
});
