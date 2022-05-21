const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type StatusCode {
    "e.g. '1'"
    id: ID
    "count '13'"
    count: Int
    "Finished"
    name: String
  }
  type StatusCodesReport {
    nodes: [StatusCode]
    pageInfo: PageInfo!
  }
  input StatusCodesSearchInput {
    "Finishes in a season. e.g. current, 2021, 2008"
    season: String
    "Finishes in a certain round. e.g. last, 1, 12"
    round: String
    "Finishes for a particular constructor. e.g. 'mclaren'"
    constructors: String
    "Finishes for a particular driver. e.g. 'alonso'"
    drivers: String
    "Finishes at a particular circuit. e.g. 'monza'"
    circuits: String
    "Finishes for a driver that started a race in a specified position. e.g. '1'"
    grid: String
    "Specify a particular finish code ID"
    status: String
  }
  input StatusCodesInput {
    where: StatusCodesSearchInput
    pageInput: PageInput!
  }
`;

module.exports = { typeDefs };
