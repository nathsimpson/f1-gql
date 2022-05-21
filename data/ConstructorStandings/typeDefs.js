const { gql } = require("apollo-server-express");

const typeDefs = gql`

type ConstructorStandingsTeam {
  position: String
  points: String
  wins: String
  team: Constructor
}

"Leaderboard for the Formula 1 Constructors Championship. Will return data from the latest race if not arguments sent."
type ConstructorStandingsReport {
  "Formula 1"
  series: RacingSeries
  "e.g. current, 2021, 2008"
  season: String
  "e.g. last, 1, 12"
  round: String
  teams: [ConstructorStandingsTeam]
}
`
