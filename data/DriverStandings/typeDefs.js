const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type F1DriverStandingsDriver {
    position: String
    points: String
    wins: String
    number: String
    driverId: ID
    "PER"
    code: String
    firstName: String
    lastName: String
    dateOfBirth: String
    nationality: String
    "An emoji of the driver's home flag"
    flag: String
    team: Constructor
  }

  "Leaderboard for the Formula 1 Drivers Championship. Will return data from the latest race if not arguments sent."
  type DriverStandingsReport {
    "Formula 1"
    series: RacingSeries
    "e.g. current, 2021, 2008"
    season: String
    "e.g. last, 1, 12"
    round: String
    drivers: [F1DriverStandingsDriver]
  }
`;

module.exports = { typeDefs };
