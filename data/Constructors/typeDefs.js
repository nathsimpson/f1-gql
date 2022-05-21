const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Constructor {
    id: String
    name: String
    url: String
    "Team primary colour in HEX format. Not part of the Ergast database."
    color: String
    nationality: String
  }

  type ConstructorsReport {
    nodes: [Constructor]
    pageInfo: PageInfo!
  }

  input ConstructorsSearchInput {
    "e.g. current, 2021, 2008"
    season: String
    "e.g. last, 1, 12"
    round: String
    "Constructors who have raced with a particular driver. e.g. 'alonso'"
    drivers: String
    "Constructors who have raced at a particular circuit. e.g. 'monza'"
    circuits: String
    "Constructors who have achieved a particular final position in the championship. e.g. '1'"
    Constructorstandings: String
    "Constructors who started the race in a specified position. e.g. '1'"
    grid: String
    "Constructors who finished the race in a specified position. e.g. '1'"
    results: String
    "Constructors who achieve a specific ranking of fastest lap in a grand prix. e.g. '1'"
    fastest: String
  }

  input ConstructorsInput {
    where: ConstructorsSearchInput
    pageInput: PageInput!
  }
`;

module.exports = { typeDefs };
