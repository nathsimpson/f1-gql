const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type ScheduledDateTime {
    "2021-03-28"
    date: String
    "15:00:00Z"
    time: String
  }

  type ScheduledEvent {
    "2021, 2008"
    season: String
    "1, 2"
    round: String
    "Bahrain Grand Prix"
    raceName: String
    Circuit: Circuit
    "2021-03-28"
    date: String
    "15:00:00Z"
    time: String
    "Scheduled date-time for firstpractice session"
    FirstPractice: ScheduledDateTime
    "Scheduled date-time for second practice session"
    SecondPractice: ScheduledDateTime
    "Scheduled date-time for third practice session"
    ThirdPractice: ScheduledDateTime
    "Scheduled date-time for Qualifying session"
    Qualifying: ScheduledDateTime
    "Wikipedia URL"
    url: String
  }

  "Race results report"
  type ScheduleReport {
    "Formula 1"
    series: RacingSeries
    "2021, 2008"
    season: String
    races: [ScheduledEvent]
  }

  input ScheduleSearchInput {
    "e.g. current, 2021, 2008"
    season: String
    "e.g. last, 1, 12"
    round: String
    "Races at a particular circuit. e.g. 'monza'"
    circuits: String
    "Races with a particular constructor. e.g. 'mclaren'"
    constructors: String
  }

  input ScheduleInput {
    where: ScheduleSearchInput
  }
`;

module.exports = { typeDefs };
