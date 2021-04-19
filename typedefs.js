const { gql } = require("apollo-server-express");

const typeDefs = gql`
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

  type Constructor {
    id: String
    name: String
    url: String
    "Team primary colour in HEX format. Not part of the Ergast database."
    color: String
    nationality: String
  }

  type Driver {
    "alonso"
    id: ID
    "14"
    number: String
    "RIC, HAM, VER"
    code: String
    "Fernando"
    firstName: String
    "Alonso"
    lastName: String
    "1981-07-29"
    dateOfBirth: String
    "Spanish"
    nationality: String
    "http://en.wikipedia.org/wiki/Fernando_Alonso"
    driverUrl: String
  }

  type DriverRaceTime {
    millis: String
    time: String
  }

  type RaceCompetitorFastestLapAverageSpeed {
    "kph"
    units: String
    "207.235"
    speed: String
  }

  type RaceCompetitorFastestLap {
    rank: String
    lap: String
    "1:34.015"
    time: String
    averageSpeed: RaceCompetitorFastestLapAverageSpeed
  }

  "Competitor in a race"
  type RaceCompetitor {
    id: ID
    number: String
    position: String
    points: String
    driver: Driver
    constructor: Constructor
    grid: String
    laps: String
    status: String
    timeMillis: Int
    timeString: String
    fastestLap: RaceCompetitorFastestLap
  }

  "Race results report. Will return data from the latest race if not arguments sent."
  type RaceReport {
    "Formula 1"
    series: RacingSeries
    "current, 2021, 2008"
    season: String
    "last, 2"
    round: String
    "Wikipedia URL"
    url: String
    "Bahrain Grand Prix"
    raceName: String
    circuit: Circuit
    "2021-03-28"
    date: String
    "15:00:00Z"
    time: String
    results: [RaceCompetitor]
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

  type ConstructorStandingsTeam {
    position: String
    points: String
    wins: String
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

  "Leaderboard for the Formula 1 Contstructors Championship. Will return data from the latest race if not arguments sent."
  type ConstructorStandingsReport {
    "Formula 1"
    series: RacingSeries
    "e.g. current, 2021, 2008"
    season: String
    "e.g. last, 1, 12"
    round: String
    teams: [ConstructorStandingsTeam]
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

  type Query {
    Driver(id: ID): Driver
    Drivers(input: DriversInput): DriversReport
    Results(input: ReportInput): RaceReport
    DriverStandings(input: ReportInput): DriverStandingsReport
    ConstructorStandings(input: ReportInput): ConstructorStandingsReport
  }
`;

module.exports = { typeDefs };
