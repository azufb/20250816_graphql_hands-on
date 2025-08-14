import { ApolloServer } from "@apollo/server";
import express, { Request, Response } from "express";
import { buildSchema } from "graphql";
import { createHandler } from "graphql-http";

const app = express();
const port = 3000;

const schema = buildSchema(`type Query { hello: String } `);

const resolver = {
  hello() {
    return "Hello world!";
  },
};

app.use(
  "/graphql",
  createHandler({
    schema,
    rootValue: resolver,
  })
);

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:3000/`);
});
