const { usePagination } = require("../../utils");

// http://ergast.com/api/f1/status.json
const Status = async (
  _source,
  { input: { where = {}, pageInput = {} } },
  { dataSources }
) => {
  const args = [];

  Object.keys(where)
    .filter((arg) => !["season", "round"].includes(arg))
    .forEach((arg) => {
      args.push(`${arg}/${where[arg]}`);
    });

  const { paginationPath, pageNumber, resultsPerPageLimit } =
    usePagination(pageInput);

  const URL = [
    "/f1/",
    `${args.length ? `${args.join("/")}/` : ""}`,
    "status.json",
    paginationPath,
  ].join("");

  console.log(`[ QUERY ]: ${URL}`);
  const { MRData } = await dataSources.f1API.get(URL);

  const totalResults = parseInt(MRData.total);
  const totalPages = Math.ceil(totalResults / resultsPerPageLimit);

  const nodes = MRData.StatusTable.Status.map((t) => ({
    id: t.statusId,
    count: parseInt(t.count),
    name: t.status,
  }));

  return {
    nodes: nodes,
    pageInfo: {
      hasNextPage: pageNumber < totalPages,
      totalPages: totalPages,
      total: totalResults,
    },
  };
};

module.exports = { Status };
