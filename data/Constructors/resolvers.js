const { constructorColors } = require("../../utils");

/** Get a list of Constructors */
const Constructors = async (
  _source,
  { input = { where: {}, pageInput: {} } },
  { dataSources }
) => {
  // http://ergast.com/api/f1/constructors.json
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
  }constructors.json?limit=${limit}&offset=${offset}`;

  console.log(`[ QUERY ]: ${URL}`);
  const { MRData } = await dataSources.f1API.get(URL);

  const totalResults = parseInt(MRData.total);
  const totalPages = Math.ceil(totalResults / limit);

  const teams = MRData.ConstructorTable.Constructors.map((t) => ({
    ...t,
    id: t.constructorId,
    color: constructorColors[t.name],
  }));

  return {
    nodes: teams,
    pageInfo: {
      hasNextPage: page < totalPages,
      totalPages: totalPages,
      total: totalResults,
    },
  };
};

// http://ergast.com/api/f1/constructors/mclaren.json
const Constructor = async (_source, { id }, { dataSources }) => {
  if (!id) {
    throw new Error("Constructor ID was not provided");
  }

  const URL = `/f1/constructors/${id}.json`;
  const { MRData } = await dataSources.f1API.get(URL);

  const team = MRData.ConstructorTable.Constructors[0];

  if (!team) {
    throw new Error("Constructor was not found");
  }

  return {
    ...team,
    color: constructorColors[team.name],
  };
};

module.exports = { Constructor, Constructors };
