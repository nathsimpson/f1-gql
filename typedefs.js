const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type CircuitLocation {
    lat: String
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
    color: String
    nationality: String
  }

  type Driver {
    driverId: ID
    number: String
    # RIC, HAM, VER
    code: String
    firstName: String
    lastName: String
    dateOfBirth: String
    nationality: String
  }

  type DriverRaceTime {
    millis: String
    time: String
  }

  type RaceCompetitorFastestLapAverageSpeed {
    # kph
    units: String
    # "207.235"
    speed: String
  }

  type RaceCompetitorFastestLap {
    rank: String
    lap: String
    # "1:34.015"
    time: String
    averageSpeed: RaceCompetitorFastestLapAverageSpeed
  }

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

  type RaceReport {
    # f1
    series: String
    # current, 2021, 2008
    season: String
    # last, 2
    round: String
    # Wikipedia URL
    url: String
    # Bahrain Grand Prix
    raceName: String
    circuit: Circuit
    # 2021-03-28
    date: String
    # 15:00:00Z
    time: String
    results: [RaceCompetitor]
  }

  type F1DriverStandingsDriver {
    position: String
    points: String
    wins: String
    number: String
    driverId: ID
    # PER
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

  type DriverStandingsReport {
    series: String
    season: String
    round: String
    drivers: [F1DriverStandingsDriver]
  }

  type ConstructorStandingsReport {
    series: String
    season: String
    round: String
    teams: [ConstructorStandingsTeam]
  }

  type Query {
    hello: String
    Results: RaceReport
    DriverStandings: DriverStandingsReport
    ConstructorStandings: ConstructorStandingsReport
  }
`;

module.exports = { typeDefs };
