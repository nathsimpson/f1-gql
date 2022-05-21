const { Constructor, Constructors } = require("../data/Constructors/resolvers");
const { Driver, Drivers } = require("../data/Drivers/resolvers");
const { SeasonsResolver } = require("./Seasons");
const { StatusResolver } = require("../data/Status/resolvers");
const { Results } = require("../data/Results/resolvers");
const { QualiResolver } = require("./Qualifying");
const { DriverStandings } = require("./DriverStandings");
const { ConstructorStandings } = require("../data/ConstructorStandings/resolvers");

const resolvers = {
  Query: {
    Constructor,
    Constructors,
    Driver,
    Drivers,
    Results,
    Seasons: SeasonsResolver,
    Status: StatusResolver,
    QualifyingResults: QualiResolver,
    DriverStandings,
    ConstructorStandings,
  },
};

module.exports = { resolvers };
