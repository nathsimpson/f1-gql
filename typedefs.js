const { gql } = require("apollo-server-express");

const { typeDefs: Constructors } = require("./data/Constructors/typeDefs");
const { typeDefs: Drivers } = require("./data/Drivers/typeDefs");
const { typeDefs: Status } = require("./data/Status/typeDefs");
const { typeDefs: Results } = require("./data/Results/typeDefs");
const { typeDefs: ConstructorStandings } = require("./data/ConstructorStandings/typeDefs");
const { typeDefs: Qualifying } = require("./data/Qualifying/typeDefs");
const { typeDefs: Seasons } = require("./data/Seasons/typeDefs");

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

  type DriversReport {
    nodes: [Driver]
    pageInfo: PageInfo!
  }

  input ReportInput {
    "e.g. current, 2021, 2008"
    season: String
    "e.g. last, 1, 12"
    round: String
  }

  input DriversSearchInput {
    "e.g. current, 2021, 2008"
    season: String
    "e.g. last, 1, 12"
    round: String
    "Drivers who have raced with a particular constructor. e.g. 'mclaren'"
    constructors: String
    "Drivers who have raced at a particular circuit. e.g. 'monza'"
    circuits: String
    "Drivers who have achieved a particular final position in the championship. e.g. '1'"
    driverStandings: String
    "Drivers who started the race in a specified position. e.g. '1'"
    grid: String
    "Drivers who finished the race in a specified position. e.g. '1'"
    results: String
    "Drivers who achieve a specific ranking of fastest lap in a grand prix. e.g. '1'"
    fastest: String
  }

  input DriversInput {
    where: DriversSearchInput
    pageInput: PageInput!
  }
`;

const queries = gql`
  type Query {
    Constructor(id: ID): Constructor
    Constructors(input: ConstructorsInput): ConstructorsReport
    ConstructorStandings(input: ReportInput): ConstructorStandingsReport
    Driver(id: ID): Driver
    DriverStandings(input: ReportInput): DriverStandingsReport
    Drivers(input: DriversInput): DriversReport
    QualifyingResults(input: ReportInput): Qualifying
    Results(input: ReportInput): Race
    Seasons(input: SeasonsInput): SeasonsReport
    "A list of all finishing status codes used by the API"
    Status(input: StatusCodesInput): StatusCodesReport
  }
`

const typeDefs = [
  base,
  Constructors,
  Drivers,
  Results,
  Status,
  ConstructorStandings,
  Qualifying,
  Seasons,
  queries,
];

module.exports = { typeDefs };
