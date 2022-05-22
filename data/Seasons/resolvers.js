const { usePagination } = require("../../utils");

const Seasons = async (
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
    seasons.json,
    paginationPath,
  ].join("");

  console.log(`[ QUERY ]: ${URL}`);
  const { MRData } = await dataSources.f1API.get(URL);
  const list = MRData.SeasonTable.Seasons;

  const totalResults = parseInt(MRData.total);
  const totalPages = Math.ceil(totalResults / resultsPerPageLimit);

  const seasons = list.map(({ season, url }) => {
    return {
      year: season,
      url,
    };
  });

  return {
    nodes: seasons,
    pageInfo: {
      hasNextPage: pageNumber < totalPages,
      totalPages: totalPages,
      total: totalResults,
    },
  };
};

module.exports = { Seasons };
