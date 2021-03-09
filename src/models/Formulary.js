import mongoose from "mongoose";

export const Formulary = mongoose.model("Formulario", {
  name: {
    type: String,
    required: true,
  },
  sobrenome: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  endereco: {
    type: String,
    required: true,
  },
  cep: {
    type: String,
    required: true,
  },
  estado: {
    type: String,
    required: true,
  },
  escolaridade: {
    type: String,
    required: true,
  },
  idade: {
    type: String,
    required: true,
  },
  civil: {
    type: String,
    required: true,
  },
});
