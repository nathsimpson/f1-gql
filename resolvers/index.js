const { ConstructorResolver, ConstructorsResolver } = require("./Constructors");
const { ResultsResolver } = require("./Results");
const { QualiResolver } = require("./Qualifying");
const { DriverResolver, DriversResolver } = require("../data/Drivers/resolvers");
const { DriverStandingsResolver } = require("./DriverStandings");
const { TeamStandingsResolver } = require("./TeamStandings");
const { SeasonsResolver } = require("./Seasons");
const { StatusResolver } = require("../data/Status/resolvers");

const resolvers = {
  Query: {
    Constructor: ConstructorResolver,
    Constructors: ConstructorsResolver,
    Driver: DriverResolver,
    Drivers: DriversResolver,
    Results: ResultsResolver,
    Seasons: SeasonsResolver,
    Status: StatusResolver,
    QualifyingResults: QualiResolver,
    DriverStandings: DriverStandingsResolver,
    ConstructorStandings: TeamStandingsResolver,
  },
};

module.exports = { resolvers };
