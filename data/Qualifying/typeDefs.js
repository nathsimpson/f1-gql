const { gql } = require("apollo-server-express");

const typeDefs = gql`
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
`
