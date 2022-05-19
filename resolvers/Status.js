const { gql } = require("apollo-server-express");
const { teamsColors } = require("../utils");
const { getDriver } = require("../utils");

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

// http://ergast.com/api/f1/status.json
const StatusResolver = async (
  _source,
  { input = { where: {}, pageInput: {} } },
  { dataSources }
) => {
  const where = input.where || {};
  const pageInput = input.pageInput || {};
  const args = [];

  Object.keys(where)
    .filter((arg) => !["season", "round"].includes(arg))
    .forEach((arg) => {
      args.push(`${arg}/${where[arg]}`);
    });

  const page = pageInput.number || 1;
  const limit = 30;
  const offset = (page - 1) * limit;

  const URL = `/f1/${
    args.length ? `${args.join("/")}/` : ""
  }status.json?limit=${limit}&offset=${offset}`;

  console.log(`[ QUERY ]: ${URL}`);
  const { MRData } = await dataSources.f1API.get(URL);

  const totalResults = parseInt(MRData.total);
  const totalPages = Math.ceil(totalResults / limit);

  const nodes = MRData.StatusTable.Status.map((t) => ({
    id: t.statusId,
    count: parseInt(t.count),
    name: t.status,
  }));

  return {
    nodes: nodes,
    pageInfo: {
      hasNextPage: page < totalPages,
      totalPages: totalPages,
      total: totalResults,
    },
  };
};

module.exports = { StatusResolver };
