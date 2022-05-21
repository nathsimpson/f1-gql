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
