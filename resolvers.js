const { Constructor, Constructors } = require("./data/Constructors/resolvers");
const { Driver, Drivers } = require("./data/Drivers/resolvers");
const { Seasons } = require("./data/Seasons/resolvers");
const { Status } = require("./data/Status/resolvers");
const { Results } = require("./data/Results/resolvers");
const { QualifyingResults } = require("./data/Qualifying/resolvers");
const { DriverStandings } = require("./data/DriverStandings/resolvers");
const {
  ConstructorStandings,
} = require("./data/ConstructorStandings/resolvers");
const { Schedule } = require("./data/Schedule/resolvers");

const resolvers = {
  Query: {
    Constructor,
    Constructors,
    Driver,
    Drivers,
    Results,
    Schedule,
    Seasons,
    Status,
    QualifyingResults,
    DriverStandings,
    ConstructorStandings,
  },
};

module.exports = { resolvers };
