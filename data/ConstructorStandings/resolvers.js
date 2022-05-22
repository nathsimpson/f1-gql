const { constructorColors } = require("../../utils");

const ConstructorStandings = async (
  _source,
  { input = {} },
  { dataSources }
) => {
  const season = input.season || "current";
  const round = input.round || "last";
  const URL = `/f1/${season}/${round}/constructorStandings.json`;
  const data = await dataSources.f1API.get(URL);
  const list = data.MRData.StandingsTable.StandingsLists[0];

  return {
    series: data.MRData.series,
    season: list.season,
    round: list.round,
    teams: list.ConstructorStandings.map((c) => {
      return {
        position: c.position,
        positionText: c.positionText,
        points: c.points,
        wins: c.wins,
        team: {
          name: c.Constructor.name,
          id: c.Constructor.constructorId,
          url: c.Constructor.url,
          color: constructorColors[c.Constructor.name],
          nationality: c.Constructor.nationality,
        },
      };
    }),
  };
};

module.exports = { ConstructorStandings };
