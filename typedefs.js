const { gql } = require("apollo-server-express");

const { typeDefs: Constructors } = require("./data/Constructors/typeDefs");
const { typeDefs: Drivers } = require("./data/Drivers/typeDefs");
const { typeDefs: Status } = require("./data/Status/typeDefs");
const { typeDefs: Results } = require("./data/Results/typeDefs");
const { typeDefs: ConstructorStandings } = require("./data/ConstructorStandings/typeDefs");

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

  "Competitor in a qualifying event"
  type QualiCompetitor {
    number: String
    position: String
    id: ID
    driver: Driver
    constructor: Constructor
    "Q1 time. e.g. '1:26.736'"
    Q1: String
    "Q2 time. e.g. '1:26.736'"
    Q2: String
    "Q3 time. e.g. '1:26.736'"
    Q3: String
  }

  type Qualifying {
    "Formula 1"
    series: RacingSeries
    "2021, 2008"
    season: String
    "1, 2"
    round: String
    "Bahrain Grand Prix"
    raceName: String
    circuit: Circuit
    "2021-03-28"
    date: String
    "15:00:00Z"
    time: String
    results: [QualiCompetitor]
    "Wikipedia URL"
    url: String
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

  type Season {
    "e.g. 2021, 2008"
    year: String
    "Wikipedia URL"
    url: String
  }

  type SeasonsReport {
    nodes: [Season]
    pageInfo: PageInfo!
  }

  input SeasonsSearchInput {
    "e.g. current, 2021, 2008"
    season: String
    "e.g. last, 1, 12"
    round: String
    "Seasons which included a particular constructor. e.g. 'mclaren'"
    constructors: String
    "Seasons which included a particular circuit. e.g. 'monza'"
    drivers: String
    "Seasons which included a particular driver. e.g. 'alonso'"
    circuits: String
    "Seasons where a specified driver/constructor started the race in a specified position. e.g. '1'"
    grid: String
    "Seasons where a specified driver/constructor finished the race in a specified position. e.g. '1'"
    results: String
    "Seasons where a specified driver/constructor achieve a specific ranking of fastest lap in a grand prix. e.g. '1'"
    fastest: String
    "Seasons where a specified driver/constructor ended the race with a specific 'status'"
    status: String
  }

  input SeasonsInput {
    where: SeasonsSearchInput
    pageInput: PageInput!
  }

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
`;

const typeDefs = [base, Constructors, Drivers, Results, Status, ConstructorStandings];

module.exports = { typeDefs };
