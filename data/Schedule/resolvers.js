/** To obtain the schedule of races for a specific season. */
const Schedule = async (
  _source,
  { input: { where = {} } },
  { dataSources }
) => {
  const { round, season = "current" } = where;

  const URL = ["/f1", `/${season}`, round ? `/${round}` : "", ".json"].join("");
  console.log(`[ QUERY ]: ${URL}`);

  const { MRData } = await dataSources.f1API.get(URL);

  return {
    series: MRData.series,
    season: MRData.RaceTable.season,
    races: MRData.RaceTable.Races.map((race) => {
      return {
        ...race,
      };
    }),
  };
};

module.exports = { Schedule };
