const express = require("express");
const graphqlHTTP = require("express-graphql");
const { buildSchema } = require("graphql");

let serialID = 1;
const fakeNotes = [
];

const mySchema = buildSchema(`
  type Note {
    id: ID!
    content: String
  }

  type Mutation {
    createNote(content: String): Note
  }

  type Query {
    notes: String
  }
`);

const root = {
  notes: () => {
    return "remember this important thing!";
  },
  createNote: (content) => {
    const newNote = {id: serialID, content: content};
    fakeNotes.push(newNote);
    serialID++;
    return newNote;
  }
};

const app = express();

app.use("/graphql", graphqlHTTP({
  schema: mySchema,
  rootValue: root,
  graphiql: true
}));

module.exports = app;
