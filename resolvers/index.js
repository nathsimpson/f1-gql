const { ResultsResolver } = require("./Results");
const { F1DriverStandingsResolver } = require("./F1DriverStandings");
const { F1TeamStandingsResolver } = require("./F1TeamStandings");

const resolvers = {
  Query: {
    hello: () => "Hello world!",
    Results: ResultsResolver,
    DriverStandings: F1DriverStandingsResolver,
    ConstructorStandings: F1TeamStandingsResolver,
  },
};

module.exports = { resolvers };
