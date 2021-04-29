const { ConstructorResolver, ConstructorsResolver } = require("./Constructors");
const { ResultsResolver } = require("./Results");
const { QualiResolver } = require("./Qualifying");
const { DriverResolver, DriversResolver } = require("./Drivers");
const { DriverStandingsResolver } = require("./DriverStandings");
const { TeamStandingsResolver } = require("./TeamStandings");
const { SeasonsResolver } = require("./Seasons");

const resolvers = {
  Query: {
    Constructor: ConstructorResolver,
    Constructors: ConstructorsResolver,
    Driver: DriverResolver,
    Drivers: DriversResolver,
    Results: ResultsResolver,
    Seasons: SeasonsResolver,
    QualifyingResults: QualiResolver,
    DriverStandings: DriverStandingsResolver,
    ConstructorStandings: TeamStandingsResolver,
  },
};

module.exports = { resolvers };
