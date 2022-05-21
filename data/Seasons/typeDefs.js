const { gql } = require("apollo-server-express");

const typeDefs = gql`
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
`;

module.exports = { typeDefs };
