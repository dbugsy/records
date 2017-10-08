const app = require("../../app/app");

const { expressTest } = require("./graphqlHelper");
const sendRequest = expressTest(app);

const chai = require("chai");
const expect = chai.expect;

describe("Notes", function () {

  const noteContent = "remember this important thing!";

  describe("creating notes", function () {
    it("creates a note, and returns id of new note", async function () {
      const query = `mutation CreateNote($content: String) {
        createNote(content: $content) {
          id
        }
      }`;
      const options = {
        variables: {
          content: noteContent
        }
      };

      const response = await sendRequest(query, options);

      expect(response.success).to.equal(true);
      expect(response.data.createNote.id).to.equal("1");
    });
  });

  describe("retrieving notes", function () {

    it("gets a note", async function () {
      const response = await sendRequest("{ notes }");
      expect(response.data.notes).to.contain(noteContent);
    });
  });
});
