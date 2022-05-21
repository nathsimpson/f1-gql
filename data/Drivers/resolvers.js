const { getDriver } = require("../../utils")

// http://ergast.com/api/f1/current/last/results.json?limit=30&offset=30
const Drivers = async (
  _source,
  { input = { where: {}, pageInput: {} } },
  { dataSources }
) => {
  const where = input.where || {};
  const pageInput = input.pageInput || {};
  const args = [];

  if (where.season) {
    args.push(where.season);
  }

  if (where.round) {
    if (!where.season) {
      throw new Error(
        "A round must be paired with a season. Please specify a season in your query."
      );
    }
    args.push(where.round);
  }

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
  }drivers.json?limit=${limit}&offset=${offset}`;

  console.log(`[ QUERY ]: ${URL}`);
  const { MRData } = await dataSources.f1API.get(URL);

  const totalResults = parseInt(MRData.total);
  const totalPages = Math.ceil(totalResults / limit);

  const drivers = MRData.DriverTable.Drivers.map((driver) => getDriver(driver));

  return {
    nodes: drivers,
    pageInfo: {
      hasNextPage: page < totalPages,
      totalPages: totalPages,
      total: totalResults,
    },
  };
};

// http://ergast.com/api/f1/drivers/norris.json
const Driver = async (_source, { id }, { dataSources }) => {
  if (!id) {
    throw new Error("Driver ID was not provided");
  }

  const URL = `/f1/drivers/${id}.json`;
  const { MRData } = await dataSources.f1API.get(URL);

  const driver = MRData.DriverTable.Drivers[0];

  if (!driver) {
    throw new Error("Driver was not found");
  }

  return getDriver(driver);
};

module.exports = { Driver, Drivers };
