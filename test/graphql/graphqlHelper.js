const { tester } = require("graphql-tester");
const expressWrapper = require("../expressWrapper");

const expressTest = (app) => {
  return tester({
    server: expressWrapper.create(app),
    url: "/graphql"
  });
};

module.exports = { expressTest: expressTest };
