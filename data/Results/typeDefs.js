const { gql } = require("apollo-server-express");

const typeDefs = gql`
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
    "1:26.736"
    timeString: String
    fastestLap: RaceCompetitorFastestLap
  }

  "Race results report. Will return data from the latest race if not arguments sent."
  type Race {
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
    results: [RaceCompetitor]
    "Wikipedia URL"
    url: String
  }
`;

module.exports = { typeDefs };
