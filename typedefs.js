const { gql } = require("apollo-server-express");

const { typeDefs: Constructors } = require("./data/Constructors/typeDefs");
const { typeDefs: Drivers } = require("./data/Drivers/typeDefs");
const { typeDefs: Status } = require("./data/Status/typeDefs");
const { typeDefs: Results } = require("./data/Results/typeDefs");
const {
  typeDefs: ConstructorStandings,
} = require("./data/ConstructorStandings/typeDefs");
const {
  typeDefs: DriverStandings,
} = require("./data/DriverStandings/typeDefs");
const { typeDefs: Qualifying } = require("./data/Qualifying/typeDefs");
const { typeDefs: Seasons } = require("./data/Seasons/typeDefs");
const { typeDefs: Schedule } = require("./data/Schedule/typeDefs");

const base = gql`
  type PageInfo {
    hasNextPage: Boolean!
    "Total of nodes returned from query."
    total: Int
    "Total of pages returned from query."
    totalPages: Int
  }

  input PageInput {
    "Page number. Starts at 1."
    number: Int!
  }

  enum RacingSeries {
    "Formula 1"
    f1
  }

  type CircuitLocation {
    "Latitude"
    lat: String
    "Longitude"
    long: String
    locality: String
    country: String
  }

  type Circuit {
    circuitId: String
    url: String
    circuitName: String
    location: CircuitLocation
  }

  input ReportInput {
    "e.g. current, 2021, 2008"
    season: String
    "e.g. last, 1, 12"
    round: String
  }
`;

const queries = gql`
  type Query {
    Constructor(id: ID): Constructor
    Constructors(input: ConstructorsInput): ConstructorsReport
    "Leaderboard for the Formula 1 Constructors Championship. Will return data from the latest race if not arguments sent."
    ConstructorStandings(input: ReportInput): ConstructorStandingsReport
    Driver(id: ID): Driver
    "Leaderboard for the Formula 1 Drivers Championship. Will return data from the latest race if not arguments sent."
    DriverStandings(input: ReportInput): DriverStandingsReport
    Drivers(input: DriversInput): DriversReport
    "Results from a qualifying session"
    QualifyingResults(input: ReportInput): Qualifying
    "Race results report. Will return data from the latest race if not arguments sent."
    Results(input: ReportInput): Race
    Seasons(input: SeasonsInput): SeasonsReport
    "A list of all finishing status codes used by the API"
    Status(input: StatusCodesInput): StatusCodesReport
    "Schedule of races in a given season"
    Schedule(input: ScheduleInput): ScheduleReport
  }
`;

const typeDefs = [
  base,
  Constructors,
  Drivers,
  Results,
  Status,
  ConstructorStandings,
  DriverStandings,
  Qualifying,
  Schedule,
  Seasons,
  queries,
];

module.exports = { typeDefs };
