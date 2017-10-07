const express = require("express");
const graphqlHTTP = require("express-graphql");
const { buildSchema } = require("graphql");

const mySchema = buildSchema(`
  type Query {
    notes: String
  }
`);

const root = {
  notes: () => {
    return "remember this important thing!";
  }
};

const app = express();

app.use("/graphql", graphqlHTTP({
  schema: mySchema,
  rootValue: root,
  graphiql: true
}));

module.exports = app;
