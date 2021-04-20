const { ResultsResolver } = require("./Results");
const { QualiResolver } = require("./Qualifying");
const { DriverResolver, DriversResolver } = require("./Drivers");
const { DriverStandingsResolver } = require("./DriverStandings");
const { TeamStandingsResolver } = require("./TeamStandings");

const resolvers = {
  Query: {
    Driver: DriverResolver,
    Drivers: DriversResolver,
    Results: ResultsResolver,
    QualifyingResults: QualiResolver,
    DriverStandings: DriverStandingsResolver,
    ConstructorStandings: TeamStandingsResolver,
  },
};

module.exports = { resolvers };
