import express from "express";
import mongoose from "mongoose";
import { ApolloServer, gql } from "apollo-server-express";
import { resolvers } from "./resolvers";
import { typeDefs } from "./typeDefs";

const server = async () => {
  const app = express();
  const server = new ApolloServer({ typeDefs, resolvers });

  server.applyMiddleware({ app });
  try {
    const uri =
      "mongodb+srv://Rafael:Teste123@cluster0.ps000.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    await mongoose.connect(
      uri,
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
