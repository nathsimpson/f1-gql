const { ResultsResolver } = require("./Results");
const { DriverResolver, DriversResolver } = require("./Drivers");
const { DriverStandingsResolver } = require("./DriverStandings");
const { TeamStandingsResolver } = require("./TeamStandings");

const resolvers = {
  Query: {
    hello: () => "Hello world!",
    Driver: DriverResolver,
    Drivers: DriversResolver,
    Results: ResultsResolver,
    DriverStandings: DriverStandingsResolver,
    ConstructorStandings: TeamStandingsResolver,
  },
};

module.exports = { resolvers };
