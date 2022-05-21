const { gql } = require("apollo-server-express");

const typeDefs = gql`
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

  type DriversReport {
    nodes: [Driver]
    pageInfo: PageInfo!
  }
`;

module.exports = { typeDefs };
