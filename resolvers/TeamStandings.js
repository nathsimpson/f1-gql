const { teamsColors } = require("../utils");

const TeamStandingsResolver = async (
  _source,
  { input = {} },
  { dataSources }
) => {
  const season = input.season || "current";
  const round = input.round || "last";
  const URL = `/f1/${season}/${round}/constructorStandings.json`;
  const data = await dataSources.f1API.get(URL);
  const list = data.MRData.StandingsTable.StandingsLists[0];

  const TeamStandings = {
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
          color: teamsColors[c.Constructor.name],
          nationality: c.Constructor.nationality,
        },
      };
    }),
  };

  return TeamStandings;
};

module.exports = { TeamStandingsResolver };
