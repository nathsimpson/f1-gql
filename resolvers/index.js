const { F1LatestResultsResolver } = require("./F1LatestResults");
const { F1DriverStandingsResolver } = require("./F1DriverStandings");
const { F1TeamStandingsResolver } = require("./F1TeamStandings");

const resolvers = {
  Query: {
    hello: () => "Hello world!",
    F1LatestResults: F1LatestResultsResolver,
    F1DriverStandings: F1DriverStandingsResolver,
    F1TeamStandings: F1TeamStandingsResolver,
  },
};

module.exports = { resolvers };
