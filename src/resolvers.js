import { Formulary } from "./models/Formulary";

export const resolvers = {
  Query: {
    hello: () => "Hello World",
    formularies: () => Formulary.find(),
  },
  Mutation: {
    createFormulary: async (
      _,
      {
        name,
        sobrenome,
        email,
        endereco,
        cep,
        estado,
        escolaridade,
        idade,
        civil,
      }
    ) => {
      const newFormulary = new Formulary({
        name,
        sobrenome,
        email,
        endereco,
        cep,
        estado,
        escolaridade,
        idade,
        civil,
      });
      await newFormulary.save();
      return newFormulary;
    },
  },
};
