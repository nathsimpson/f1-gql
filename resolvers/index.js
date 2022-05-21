const { Constructor, Constructors } = require("../data/Constructors/resolvers");
const { Driver, Drivers } = require("../data/Drivers/resolvers");
const { Seasons } = require("../data/Seasons/resolvers");
const { StatusResolver } = require("../data/Status/resolvers");
const { Results } = require("../data/Results/resolvers");
const { QualifyingResults } = require("../data/Qualifying/resolvers");
const { DriverStandings } = require("./DriverStandings");
const { ConstructorStandings } = require("../data/ConstructorStandings/resolvers");

const resolvers = {
  Query: {
    Constructor,
    Constructors,
    Driver,
    Drivers,
    Results,
    Seasons,
    Status: StatusResolver,
    QualifyingResults,
    DriverStandings,
    ConstructorStandings,
  },
};

module.exports = { resolvers };
