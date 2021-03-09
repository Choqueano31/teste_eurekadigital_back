import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Formulary {
    _id: ID!
    name: String!
    sobrenome: String!
    email: String!
    endereco: String!
    cep: String!
    estado: String!
    escolaridade: String!
    idade: String!
    civil: String!
  }
  type Query {
    hello: String
    formularies: [Formulary!]!
    formulary(email: String!): Formulary!
  }
  type Mutation {
    createFormulary(
      name: String!
      sobrenome: String!
      email: String!
      endereco: String!
      cep: String!
      estado: String!
      escolaridade: String!
      idade: String!
      civil: String!
    ): Formulary!
  }
`;
