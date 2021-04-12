const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type F1Team {
    id: String
    name: String
    url: String
    color: String
    nationality: String
  }

  type F1SessionCompetitor {
    number: String
    position: String
    points: String
    driverId: ID
    # PER
    code: String
    firstName: String
    lastName: String
    dateOfBirth: String
    nationality: String
    team: F1Team
    grid: String
    laps: String
    status: String
    TimeMillis: Int
    timeString: String
    fastestLapTime: String
    fastestLapIndex: String
    fastestLapRank: String
  }

  type F1SessionResults {
    series: String
    season: String
    round: String
    raceName: String
    locality: String
    country: String
    date: String
    time: String
    results: [F1SessionCompetitor]
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
    team: F1Team
  }

  type F1TeamStandingsTeam {
    position: String
    points: String
    wins: String
    team: F1Team
  }

  type F1DriverStandingsReport {
    series: String
    season: String
    round: String
    drivers: [F1DriverStandingsDriver]
  }

  type F1TeamStandingsReport {
    series: String
    season: String
    round: String
    teams: [F1TeamStandingsTeam]
  }

  type Query {
    hello: String
    F1LatestResults: F1SessionResults
    F1DriverStandings: F1DriverStandingsReport
    F1TeamStandings: F1TeamStandingsReport
  }
`;

module.exports = { typeDefs };
