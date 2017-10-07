const chai = require("chai")
  , chaiHttp = require("chai-http");
const expect = chai.expect;
chai.use(chaiHttp);

const { tester } = require("graphql-tester");
const expressWrapper = require("../expressWrapper");

const app = require("../../app/app");

describe("retrieving a note", function () {
  const noteContent = "remember this important thing!";
  const expressTest = tester({
    server: expressWrapper.create(app),
    url: "/graphql"
  });

  it("gets a note", async function () {
    const response = await expressTest("{ notes }");
    expect(response.data.notes).to.contain(noteContent);
  });
});
