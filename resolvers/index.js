const { ResultsResolver } = require("./Results");
const { DriverStandingsResolver } = require("./DriverStandings");
const { TeamStandingsResolver } = require("./TeamStandings");

const resolvers = {
  Query: {
    hello: () => "Hello world!",
    Results: ResultsResolver,
    DriverStandings: DriverStandingsResolver,
    ConstructorStandings: TeamStandingsResolver,
  },
};

module.exports = { resolvers };
