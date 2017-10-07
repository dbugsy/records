const app = require("../../app/app");

const { expressTest } = require("./graphqlHelper");
const sendRequest = expressTest(app);

const chai = require("chai");
const expect = chai.expect;

describe("Notes", function () {

  const noteContent = "remember this important thing!";

  describe("retrieving notes", function () {

    it("gets a note", async function () {
      const response = await sendRequest("{ notes }");
      expect(response.data.notes).to.contain(noteContent);
    });
  });
});
