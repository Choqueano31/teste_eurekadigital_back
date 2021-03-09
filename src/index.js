import express from "express";
import mongoose from "mongoose";
import { ApolloServer, gql } from "apollo-server-express";
import { resolvers } from "./resolvers";
import { typeDefs } from "./typeDefs";
const dotenv = require("dotenv");

dotenv.config({
  path: process.env.NODE_ENV === "test" ? ".env.test" : ".env",
});

console.log(process.env.NODE_ENV);
const server = async () => {
  const app = express();
  const server = new ApolloServer({ typeDefs, resolvers });

  server.applyMiddleware({ app });
  try {
    await mongoose.connect(
      process.env.NODE_ENV,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      () => console.log("mongoose is connected")
    );
    app.listen({ port: 4001 }, () => {
      console.log("connected");
    });
  } catch (err) {
    console.log(err);
  }
};
server();
